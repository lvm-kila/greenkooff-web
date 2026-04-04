import Link from "next/link";
import { PLANS, WHATSAPP_URL } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Plans() {
  return (
    <section id="planes" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Planes"
          title="Arquitecturas de crecimiento con estándar consultivo"
          subtitle="Cada propuesta combina ejecución táctica, criterio estratégico y una cadencia de trabajo diseñada para sostener decisiones de negocio."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.slug} delay={index * 100}>
              <article
                className={`relative h-full overflow-hidden rounded-[30px] border bg-white/95 p-6 shadow-[0_30px_80px_-42px_rgba(11,31,71,0.48)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_90px_-40px_rgba(19,53,111,0.4)] ${
                  plan.highlighted
                    ? "border-orange-300/80 ring-1 ring-orange-200"
                    : "border-slate-200/80"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 ${
                    plan.highlighted ? "bg-gradient-to-r from-orange-500 via-amber-500 to-blue-700" : "bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200"
                  }`}
                />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{plan.valuePillar}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{plan.name}</h3>
                  </div>
                  {plan.badge ? (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        plan.highlighted ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 text-sm text-slate-600">{plan.subtitle}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.13em] text-slate-500">{plan.deliveryModel}</p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Inversión mensual</p>
                  <div className="mt-2 flex items-end gap-2">
                    <p className="text-4xl font-semibold tracking-tight text-blue-800">{plan.price}</p>
                    <p className="pb-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">CLP + IVA</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{plan.audience}</p>
                </div>

                <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Resultado esperado</p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.expectedBenefits.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Qué recibe tu equipo</p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.includes.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link className="btn-primary" href={`/planes/${plan.slug}`}>
                    Ver detalle
                  </Link>
                  <Link className="btn-secondary" href={`/contratar/${plan.slug}`}>
                    Contratar plan
                  </Link>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary">
                    Hablar con consultor
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
