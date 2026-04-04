import type { AuthProvider, LoginInput, RegisterInput } from "../types";

const notImplemented = (): never => {
  throw new Error("Cognito provider no implementado aún. Configura NEXT_PUBLIC_AUTH_PROVIDER=mock.");
};

export const cognitoAuthProvider: AuthProvider = {
  async getCurrentSession() {
    return null;
  },
  async login(_input: LoginInput) {
    return notImplemented();
  },
  async register(_input: RegisterInput) {
    return notImplemented();
  },
  async logout() {
    return;
  },
  async forgotPassword(_email: string) {
    return notImplemented();
  },
};
