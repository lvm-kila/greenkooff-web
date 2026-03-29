import { IMPACT_SIGNALS, TESTIMONIALS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Resultados"
          title="Prueba social orientada a decisión ejecutiva"
          subtitle="Casos representativos de organizaciones que profesionalizaron su sistema comercial con una operación más predecible."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={testimonial.company} delay={index * 80}>
                <article className="card-premium h-full">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1">{testimonial.sector}</span>
                    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-blue-700">{testimonial.companyType}</span>
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Desafío</p>
                  <p className="mt-1 text-sm text-slate-700">{testimonial.challenge}</p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Resultado representativo</p>
                  <p className="mt-1 text-sm font-medium text-slate-800">{testimonial.result}</p>

                  <blockquote className="mt-5 border-l-2 border-orange-300 pl-4 text-base leading-7 text-slate-700">“{testimonial.quote}”</blockquote>

                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.company}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <aside className="card-premium h-full bg-gradient-to-b from-white via-blue-50/35 to-slate-50/60">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Señales de impacto</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Ejecución disciplinada con métricas accionables.</h3>
              <p className="mt-3 text-sm text-slate-600">
                Diseñamos una operación comercial que entrega visibilidad ejecutiva y capacidad de ajuste continuo, sin sobredimensionar promesas.
              </p>
              <div className="mt-6 space-y-3">
                {IMPACT_SIGNALS.map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-[0_10px_30px_-24px_rgba(11,31,71,0.55)]">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
