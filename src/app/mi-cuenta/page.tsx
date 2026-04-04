"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AccountShell from "../../components/account/AccountShell";
import { useRequireAuth } from "../../lib/guards/useRequireAuth";
import { useRuntimeServices } from "../../hooks/useRuntimeServices";
import type { AccountSnapshot } from "../../lib/data/types";

export default function AccountPage() {
  const { session } = useRequireAuth("/mi-cuenta");
  const { subscriptions } = useRuntimeServices();
  const [snapshot, setSnapshot] = useState<AccountSnapshot | null>(null);

  useEffect(() => {
    if (session) subscriptions.getAccountSnapshot(session.user.id).then(setSnapshot);
  }, [session, subscriptions]);

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
