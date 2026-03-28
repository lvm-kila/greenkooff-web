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
          <div className="mt-6 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700 p-8 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-100">{plan.name}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{plan.subtitle}</h1>
            <p className="mt-4 max-w-2xl text-blue-100">{plan.audience}</p>
            <p className="mt-6 text-3xl font-semibold">{plan.price}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contratar" className="btn-primary">
                Contratar plan
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 md:px-8">
          <article className="card-premium">
            <h2 className="text-2xl font-semibold text-slate-900">¿A quién va dirigido?</h2>
            <p className="mt-3 text-slate-600">{plan.audience}</p>
            <p className="mt-4 text-sm font-semibold text-blue-700">Objetivo principal: {plan.objective}</p>
          </article>

          <article className="card-premium">
            <h2 className="text-2xl font-semibold text-slate-900">Beneficios esperados</h2>
            <ul className="mt-4 space-y-2">
              {plan.expectedBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-slate-600">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <article className="card-premium">
            <h2 className="text-2xl font-semibold text-slate-900">¿Qué incluye este plan?</h2>
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
          <article className="card-premium">
            <h2 className="text-2xl font-semibold text-slate-900">Preguntas frecuentes del plan</h2>
            <div className="mt-5 space-y-3">
              {PLAN_FAQS[plan.slug].map((faq) => (
                <details key={faq.question} className="rounded-xl border border-slate-200 p-4">
                  <summary className="cursor-pointer font-medium text-slate-900">{faq.question}</summary>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary">
                Contratar
              </a>
              <Link href="/" className="btn-secondary">
                Ver comparativa general
              </Link>
            </div>
          </article>
          <p className="mt-8 text-center text-xs text-slate-500">© 2026 {BRAND.name}</p>
        </div>
      </section>
    </main>
  );
}
