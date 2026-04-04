"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { authProvider } from "../lib/auth/provider";
import type { AuthSession, LoginInput, RegisterInput } from "../lib/auth/types";

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

  const refresh = useCallback(async () => {
    setLoading(true);
    const currentSession = await authProvider.getCurrentSession();
    setSession(currentSession);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo<AuthContextType>(
    () => ({
      session,
      loading,
      refresh,
      login: async (input) => {
        const nextSession = await authProvider.login(input);
        setSession(nextSession);
      },
      register: async (input) => {
        const nextSession = await authProvider.register(input);
        setSession(nextSession);
      },
      logout: async () => {
        await authProvider.logout();
        setSession(null);
      },
      forgotPassword: async (email) => {
        const result = await authProvider.forgotPassword(email);
        return result.message;
      },
    }),
    [loading, refresh, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
