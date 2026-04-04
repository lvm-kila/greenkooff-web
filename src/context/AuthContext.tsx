"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type { AuthSession, LoginInput, RegisterInput } from "../lib/auth/types";
import { getRuntimeServices } from "../lib/runtime/services";

type AuthContextType = {
  session: AuthSession | null;
  loading: boolean;
  login: (input: LoginInput) => Promise<void>;
  register: (input: RegisterInput) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<string>;
  refresh: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);
  const authService = getRuntimeServices().auth;

  const refresh = useCallback(async () => {
    setLoading(true);
    const currentSession = await authService.getCurrentSession();
    setSession(currentSession);
    setLoading(false);
  }, [authService]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo<AuthContextType>(
    () => ({
      session,
      loading,
      refresh,
      login: async (input) => {
        const nextSession = await authService.login(input);
        setSession(nextSession);
      },
      register: async (input) => {
        const nextSession = await authService.register(input);
        setSession(nextSession);
      },
      logout: async () => {
        await authService.logout();
        setSession(null);
      },
      forgotPassword: async (email) => authService.recoverAccess(email),
    }),
    [authService, loading, refresh, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
