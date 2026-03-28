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
          title="Planes pensados para cada etapa de crecimiento"
          subtitle="Estructura flexible, foco comercial y una progresión clara para escalar tu operación digital."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.slug} delay={index * 100}>
              <article className={`card-premium h-full ${plan.highlighted ? "border-orange-200 ring-1 ring-orange-300" : ""}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                  {plan.badge ? (
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${plan.highlighted ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-slate-600">{plan.subtitle}</p>
                <p className="mt-5 text-4xl font-semibold tracking-tight text-blue-800">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-500">{plan.audience}</p>

                <ul className="mt-5 space-y-2.5">
                  {plan.includes.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link className="btn-primary" href={`/planes/${plan.slug}`}>
                    Ver detalle
                  </Link>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary">
                    Hablar por WhatsApp
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
