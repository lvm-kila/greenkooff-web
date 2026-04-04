import type { AuthSession, AuthProvider, LoginInput, RegisterInput } from "../types";

const USERS_KEY = "gvc_mock_users";
const SESSION_KEY = "gvc_mock_session";

type MockStoredUser = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  company?: string;
  createdAt: string;
};

const isBrowser = typeof window !== "undefined";

const seedUser: MockStoredUser = {
  id: "usr_demo",
  fullName: "Cliente Demo",
  email: "demo@gvc.cl",
  password: "demo1234",
  company: "GVC Demo",
  createdAt: new Date().toISOString(),
};

const readUsers = (): MockStoredUser[] => {
  if (!isBrowser) return [seedUser];
  const raw = window.localStorage.getItem(USERS_KEY);
  if (!raw) {
    window.localStorage.setItem(USERS_KEY, JSON.stringify([seedUser]));
    return [seedUser];
  }
  return JSON.parse(raw) as MockStoredUser[];
};

const writeUsers = (users: MockStoredUser[]) => {
  if (!isBrowser) return;
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const toSession = (user: MockStoredUser): AuthSession => ({
  user: { id: user.id, email: user.email, fullName: user.fullName },
  profile: {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    company: user.company,
    createdAt: user.createdAt,
  },
});

const setSession = (id: string) => {
  if (!isBrowser) return;
  window.localStorage.setItem(SESSION_KEY, id);
};

export const mockAuthProvider: AuthProvider = {
  async getCurrentSession() {
    if (!isBrowser) return null;
    const id = window.localStorage.getItem(SESSION_KEY);
    if (!id) return null;
    const user = readUsers().find((item) => item.id === id);
    return user ? toSession(user) : null;
  },
  async login(input: LoginInput) {
    const user = readUsers().find((item) => item.email.toLowerCase() === input.email.toLowerCase());
    if (!user || user.password !== input.password) {
      throw new Error("Credenciales inválidas en modo mock.");
    }
    setSession(user.id);
    return toSession(user);
  },
  async register(input: RegisterInput) {
    const users = readUsers();
    if (users.some((item) => item.email.toLowerCase() === input.email.toLowerCase())) {
      throw new Error("El correo ya está registrado.");
    }
    const newUser: MockStoredUser = {
      id: `usr_${crypto.randomUUID()}`,
      fullName: input.fullName,
      email: input.email,
      password: input.password,
      company: input.company,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    writeUsers(users);
    setSession(newUser.id);
    return toSession(newUser);
  },
  async logout() {
    if (isBrowser) window.localStorage.removeItem(SESSION_KEY);
  },
  async forgotPassword(email: string) {
    return {
      ok: true,
      message: `En modo mock, simula envío de recuperación a ${email}.`,
    };
  },
};
