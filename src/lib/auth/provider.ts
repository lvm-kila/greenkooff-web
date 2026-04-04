import runtimeConfig from "../config/runtime";
import type { AuthProvider } from "./types";
import { cognitoAuthProvider } from "./providers/cognito";
import { mockAuthProvider } from "./providers/mock";

const providers: Record<string, AuthProvider> = {
  mock: mockAuthProvider,
  cognito: cognitoAuthProvider,
};

export const authProvider = providers[runtimeConfig.authProvider] ?? mockAuthProvider;
