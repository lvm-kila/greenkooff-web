import { PROCESS_STEPS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Process() {
  return (
    <section id="proceso" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Cómo trabajamos"
          title="Un proceso claro para escalar sin improvisar"
          subtitle="Desde diagnóstico hasta optimización continua, cada etapa está diseñada para acelerar resultados."
        />

        <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <article className="card-premium relative h-full">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">{step.icon}</span>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
