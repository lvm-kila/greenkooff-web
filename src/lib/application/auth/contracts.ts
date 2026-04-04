import type { AuthSession, LoginInput, RegisterInput } from "../../auth/types";

export interface AuthAdapter {
  getCurrentSession(): Promise<AuthSession | null>;
  login(input: LoginInput): Promise<AuthSession>;
  register(input: RegisterInput): Promise<AuthSession>;
  logout(): Promise<void>;
  forgotPassword(email: string): Promise<{ ok: true; message: string }>;
}
