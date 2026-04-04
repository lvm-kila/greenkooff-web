import type { AuthUser, UserProfile } from "../domain/types";

export type AuthSession = {
  user: AuthUser;
  profile: UserProfile;
};

export type LoginInput = { email: string; password: string };
export type RegisterInput = { fullName: string; email: string; password: string; company?: string };

export interface AuthProvider {
  getCurrentSession(): Promise<AuthSession | null>;
  login(input: LoginInput): Promise<AuthSession>;
  register(input: RegisterInput): Promise<AuthSession>;
  logout(): Promise<void>;
  forgotPassword(email: string): Promise<{ ok: true; message: string }>;
}
