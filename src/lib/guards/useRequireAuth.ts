"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ensureAuthenticatedAccess } from "../application/guards";
import { useAuth } from "../../hooks/useAuth";

export const useRequireAuth = (nextUrl: string) => {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const result = ensureAuthenticatedAccess(session, nextUrl);
    if (result.kind === "redirect") {
      router.replace(result.redirectTo);
    }
  }, [loading, nextUrl, router, session]);

  return { session, loading };
};
