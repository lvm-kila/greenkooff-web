"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import ContractSummary from "../../../components/subscription/ContractSummary";
import { useAuth } from "../../../hooks/useAuth";
import { dataRepository } from "../../../lib/data/provider";
import type { SubscriptionPlan } from "../../../lib/domain/types";

export default function ContractPage({ params }: { params: { slug: string } }) {
  const { session, loading } = useAuth();
  const router = useRouter();
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    dataRepository.getPlanBySlug(params.slug).then(setPlan);
  }, [params.slug]);

  useEffect(() => {
    if (!loading && !session) {
      router.replace(`/auth/login?next=${encodeURIComponent(`/contratar/${params.slug}`)}`);
    }
  }, [loading, params.slug, router, session]);

  const canSubmit = useMemo(() => Boolean(session && plan && acceptedTerms), [acceptedTerms, plan, session]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!session || !plan) return;
    setError("");
    try {
      await dataRepository.createContractDraft({ userId: session.user.id, planSlug: plan.slug, acceptedTerms });
      router.push(`/suscripcion/exito?plan=${plan.slug}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo guardar la contratación");
    }
  };

  if (!session) return null;
  if (!plan) return <main className="section-shell"><div className="mx-auto max-w-4xl px-4">Plan no encontrado.</div></main>;

  return (
    <main className="section-shell">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 md:px-8">
        <section className="card-premium">
          <h1 className="text-3xl font-semibold text-slate-900">Confirmar contratación</h1>
          <p className="mt-2 text-sm text-slate-600">Hola {session.profile.fullName}, estás a un paso de iniciar tu suscripción mensual.</p>

          <form className="mt-5 space-y-4" onSubmit={onSubmit}>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <p><span className="font-semibold">Perfil:</span> {session.profile.fullName}</p>
              <p><span className="font-semibold">Email:</span> {session.profile.email}</p>
            </div>
            <label className="flex items-start gap-2 text-sm text-slate-700">
              <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} className="mt-1" />
              Acepto términos de contratación, facturación mensual y política de renovación.
            </label>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <button className="btn-primary w-full" disabled={!canSubmit} type="submit">Confirmar intención de contratar</button>
            <Link href={`/planes/${plan.slug}`} className="btn-secondary w-full">Volver al detalle del plan</Link>
          </form>
        </section>
        <ContractSummary plan={plan} />
      </div>
    </main>
  );
}
