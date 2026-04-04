import type { AuthSession } from "../auth/types";
import type { AuthGuardResult } from "./contracts";

export const ensureAuthenticatedAccess = (session: AuthSession | null, nextUrl: string): AuthGuardResult => {
  if (!session) {
    return {
      kind: "redirect",
      redirectTo: `/auth/login?next=${encodeURIComponent(nextUrl)}`,
    };
  }

  return { kind: "authorized", session };
};
