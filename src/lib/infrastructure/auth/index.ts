import runtimeConfig from "../../config/runtime";
import { cognitoAuthProvider } from "../../auth/providers/cognito";
import { mockAuthProvider } from "../../auth/providers/mock";
import type { AuthAdapter } from "../../application/auth/contracts";

const adapters: Record<string, AuthAdapter> = {
  mock: mockAuthProvider,
  cognito: cognitoAuthProvider,
};

export const authAdapter: AuthAdapter = adapters[runtimeConfig.authProvider] ?? mockAuthProvider;
