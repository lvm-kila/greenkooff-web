"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SubscriptionSuccessPage() {
  const [plan, setPlan] = useState<string | null>(null);

  useEffect(() => {
    setPlan(new URLSearchParams(window.location.search).get("plan"));
  }, []);

  return (
    <main className="section-shell">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <article className="card-premium">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Suscripción registrada (mock)</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Tu solicitud quedó en estado pendiente de método de pago</h1>
          <p className="mt-3 text-slate-600">Plan seleccionado: {plan ?? "N/A"}. El próximo paso será enrolar tarjeta con Oneclick (futuro).</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/mi-cuenta/suscripcion">Ir a mi suscripción</Link>
            <Link className="btn-secondary" href="/mi-cuenta/pagos">Ver estado de pagos</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
