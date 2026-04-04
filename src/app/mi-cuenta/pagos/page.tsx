"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AccountShell from "../../../components/account/AccountShell";
import { useAuth } from "../../../hooks/useAuth";
import { dataRepository } from "../../../lib/data/provider";
import type { AccountSnapshot } from "../../../lib/data/types";
import { billingProvider } from "../../../lib/billing/provider";

export default function AccountPaymentsPage() {
  const { session, loading } = useAuth();
  const router = useRouter();
  const [snapshot, setSnapshot] = useState<AccountSnapshot | null>(null);
  const [message, setMessage] = useState("");

  const refresh = async (userId: string) => setSnapshot(await dataRepository.getAccountSnapshot(userId));

  useEffect(() => {
    if (!loading && !session) router.replace("/auth/login?next=/mi-cuenta/pagos");
    if (session) refresh(session.user.id);
  }, [loading, router, session]);

  if (!session) return null;

  const enroll = async () => {
    if (!snapshot?.subscription) return;
    const result = await billingProvider.enrollPaymentMethod({ userId: session.user.id, subscriptionId: snapshot.subscription.id });
    setMessage(`Método inscrito (${result.paymentMethod.cardBrand} ****${result.paymentMethod.last4}) en modo mock.`);
    await refresh(session.user.id);
  };

  return (
    <AccountShell title="Pagos y facturación">
      <article className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">Método de pago</h2>
        <p className="mt-2 text-sm text-slate-600">
          {snapshot?.paymentMethod
            ? `${snapshot.paymentMethod.provider} • ${snapshot.paymentMethod.cardBrand} ****${snapshot.paymentMethod.last4}`
            : "Aún no hay método inscrito"}
        </p>
        <button type="button" className="btn-primary mt-4" onClick={enroll} disabled={!snapshot?.subscription || Boolean(snapshot.paymentMethod)}>
          {snapshot?.paymentMethod ? "Método ya inscrito" : "Simular inscripción de tarjeta"}
        </button>
        {message ? <p className="mt-3 text-sm text-slate-600">{message}</p> : null}
      </article>

      <article className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-slate-900">Historial de eventos (mock)</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {(snapshot?.billingEvents ?? []).map((event) => (
            <li key={event.id} className="rounded-lg border border-slate-200 p-3">
              <p className="font-medium">{event.description}</p>
              <p className="text-xs text-slate-500">Estado: {event.status}</p>
            </li>
          ))}
          {snapshot?.billingEvents.length === 0 ? <li className="text-slate-500">Sin eventos todavía.</li> : null}
        </ul>
      </article>
    </AccountShell>
  );
}
