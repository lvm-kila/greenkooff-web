"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AccountShell from "../../../components/account/AccountShell";
import { useAuth } from "../../../hooks/useAuth";
import { dataRepository } from "../../../lib/data/provider";
import { getPlanBySlug } from "../../../lib/billing/plans";
import type { AccountSnapshot } from "../../../lib/data/types";

export default function AccountSubscriptionPage() {
  const { session, loading } = useAuth();
  const router = useRouter();
  const [snapshot, setSnapshot] = useState<AccountSnapshot | null>(null);

  useEffect(() => {
    if (!loading && !session) router.replace("/auth/login?next=/mi-cuenta/suscripcion");
    if (session) dataRepository.getAccountSnapshot(session.user.id).then(setSnapshot);
  }, [loading, router, session]);

  if (!session) return null;

  const plan = snapshot?.subscription ? getPlanBySlug(snapshot.subscription.planSlug) : null;

  return (
    <AccountShell title="Mi suscripción">
      <article className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">{plan?.name ?? "Aún no tienes plan contratado"}</h2>
        <p className="mt-2 text-sm text-slate-600">Estado: {snapshot?.subscription?.status ?? "incomplete"}</p>
        <p className="mt-2 text-sm text-slate-600">Siguiente paso: {snapshot?.paymentMethod ? "Validación final de activación" : "Inscribir método de pago"}</p>
        {!snapshot?.subscription ? <Link href="/#planes" className="btn-primary mt-4">Elegir plan</Link> : null}
      </article>
    </AccountShell>
  );
}
