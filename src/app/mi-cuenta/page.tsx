"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AccountShell from "../../components/account/AccountShell";
import { useAuth } from "../../hooks/useAuth";
import { dataRepository } from "../../lib/data/provider";
import type { AccountSnapshot } from "../../lib/data/types";

export default function AccountPage() {
  const { session, loading } = useAuth();
  const router = useRouter();
  const [snapshot, setSnapshot] = useState<AccountSnapshot | null>(null);

  useEffect(() => {
    if (!loading && !session) router.replace("/auth/login?next=/mi-cuenta");
    if (session) dataRepository.getAccountSnapshot(session.user.id).then(setSnapshot);
  }, [loading, router, session]);

  if (!session) return null;

  return (
    <AccountShell title="Mi cuenta">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Bienvenido</p>
          <h2 className="text-xl font-semibold text-slate-900">{session.profile.fullName}</h2>
          <p className="text-sm text-slate-600">{session.profile.email}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Estado de suscripción</p>
          <h2 className="text-xl font-semibold text-slate-900">{snapshot?.subscription?.status ?? "Sin contratación"}</h2>
          <div className="mt-3">
            <Link href="/mi-cuenta/suscripcion" className="text-blue-700 hover:underline">Ver detalle →</Link>
          </div>
        </article>
      </div>
    </AccountShell>
  );
}
