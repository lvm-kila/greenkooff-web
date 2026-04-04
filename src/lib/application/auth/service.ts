import type { AuthSession, LoginInput, RegisterInput } from "../../auth/types";
import type { AuthAdapter } from "./contracts";

export class AuthApplicationService {
  constructor(private readonly authAdapter: AuthAdapter) {}

  getCurrentSession(): Promise<AuthSession | null> {
    return this.authAdapter.getCurrentSession();
  }

  login(input: LoginInput): Promise<AuthSession> {
    return this.authAdapter.login(input);
  }

  register(input: RegisterInput): Promise<AuthSession> {
    return this.authAdapter.register(input);
  }

  logout(): Promise<void> {
    return this.authAdapter.logout();
  }

  async recoverAccess(email: string): Promise<string> {
    const result = await this.authAdapter.forgotPassword(email);
    return result.message;
  }
}
