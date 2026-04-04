import type { AuthSession } from "../auth/types";

export type AuthGuardResult =
  | { kind: "authorized"; session: AuthSession }
  | { kind: "redirect"; redirectTo: string };
