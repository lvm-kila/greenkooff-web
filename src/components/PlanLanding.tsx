import Link from "next/link";
import { BRAND, PLAN_FAQS, Plan, WHATSAPP_URL } from "../content/siteContent";
import GvcLogo from "./GvcLogo";

type PlanLandingProps = {
  plan: Plan;
};

export default function PlanLanding({ plan }: PlanLandingProps) {
  return (
    <main className="bg-white text-slate-900">
      <section className="section-shell pb-12">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-sm font-medium text-blue-700 hover:underline">
              ← Volver al inicio
            </Link>
            <GvcLogo size="sm" />
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
            <div className="grid gap-6 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100">{plan.name}</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight">{plan.subtitle}</h1>
                <p className="mt-4 max-w-2xl text-blue-100">{plan.audience}</p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-blue-50">{plan.valuePillar}</span>
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-blue-50">{plan.deliveryModel}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-[2px]">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-100">Inversión mensual</p>
                <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-blue-100">CLP + IVA</p>
                <p className="mt-4 text-sm text-blue-100">Objetivo principal: {plan.objective}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/contratar/${plan.slug}`} className="btn-primary">
                    Contratar plan
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 md:px-8">
          <article className="card-premium">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Beneficios esperados</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Qué cambia en tu operación con este plan</h2>
            <ul className="mt-5 space-y-3">
              {plan.expectedBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-premium bg-gradient-to-b from-white to-blue-50/40">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Framing estratégico</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Cómo se ejecuta este servicio</h2>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Pilar de valor</p>
                <p className="mt-1 text-sm font-medium text-slate-800">{plan.valuePillar}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Modelo de entrega</p>
                <p className="mt-1 text-sm font-medium text-slate-800">{plan.deliveryModel}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Cliente objetivo</p>
                <p className="mt-1 text-sm font-medium text-slate-800">{plan.audience}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <article className="card-premium">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Qué incluye</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Entregables y cobertura del plan</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50/80 p-3 text-slate-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-16" id="contratar">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <article className="card-premium bg-gradient-to-b from-white to-slate-50/90">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Preguntas frecuentes del plan</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Resolvemos dudas antes de iniciar</h2>
            <div className="mt-5 space-y-3">
              {PLAN_FAQS[plan.slug].map((faq) => (
                <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-4">
                  <summary className="cursor-pointer font-medium text-slate-900">{faq.question}</summary>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Siguiente paso: iniciar contratación protegida</h3>
              <p className="mt-2 text-sm text-slate-600">
Inicia sesión, confirma tu plan y deja tu suscripción en estado pendiente de método de pago.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/contratar/${plan.slug}`} className="btn-primary">
                  Contratar este plan
                </Link>
                <Link href="/" className="btn-secondary">
                  Ver comparativa general
                </Link>
              </div>
            </div>
          </article>
          <p className="mt-8 text-center text-xs text-slate-500">© 2026 {BRAND.name}</p>
        </div>
      </section>
    </main>
  );
}
