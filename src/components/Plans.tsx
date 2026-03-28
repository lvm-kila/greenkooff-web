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
          title="Elige el plan según tu etapa de crecimiento"
          subtitle="Todos los planes consideran acompañamiento estratégico, soporte y enfoque orientado a conversión."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.slug} delay={index * 100}>
              <article className={`card-premium h-full ${plan.highlighted ? "ring-2 ring-orange-500" : ""}`}>
                {plan.highlighted ? (
                  <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    Más elegido
                  </span>
                ) : null}
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{plan.subtitle}</p>
                <p className="mt-4 text-3xl font-bold text-blue-700">{plan.price}</p>
                <p className="mt-3 text-sm text-slate-600">{plan.audience}</p>

                <ul className="mt-4 space-y-2">
                  {plan.includes.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link className="btn-primary" href={`/planes/${plan.slug}`}>
                    Contratar
                  </Link>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary">
                    Hablar por WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-blue-700">Pago mensual con tarjeta</p>
          <p className="mt-2 text-slate-600">
            Puedes pagar tu plan de forma mensual con tarjeta o transferencia, manteniendo control sobre tu inversión y
            escalando cuando lo necesites.
          </p>
        </div>
      </div>
    </section>
  );
}
