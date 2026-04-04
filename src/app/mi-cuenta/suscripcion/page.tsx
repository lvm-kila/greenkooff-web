"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AccountShell from "../../../components/account/AccountShell";
import { useRequireAuth } from "../../../lib/guards/useRequireAuth";
import { useRuntimeServices } from "../../../hooks/useRuntimeServices";
import type { ContractOverview } from "../../../lib/application/subscriptions/contracts";

export default function AccountSubscriptionPage() {
  const { session } = useRequireAuth("/mi-cuenta/suscripcion");
  const { subscriptions } = useRuntimeServices();
  const [overview, setOverview] = useState<ContractOverview | null>(null);

  useEffect(() => {
    if (session) subscriptions.getContractOverview(session.user.id).then(setOverview);
  }, [session, subscriptions]);

  if (!session) return null;

  return (
    <AccountShell title="Mi suscripción">
      <article className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">{overview?.plan?.name ?? "Aún no tienes plan contratado"}</h2>
        <p className="mt-2 text-sm text-slate-600">Estado: {overview?.snapshot.subscription?.status ?? "incomplete"}</p>
        <p className="mt-2 text-sm text-slate-600">Siguiente paso: {overview?.snapshot.paymentMethod ? "Validación final de activación" : "Inscribir método de pago"}</p>
        {!overview?.snapshot.subscription ? <Link href="/#planes" className="btn-primary mt-4">Elegir plan</Link> : null}
      </article>
    </AccountShell>
  );
}
