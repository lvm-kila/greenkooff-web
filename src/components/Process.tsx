import { PROCESS_STEPS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Process() {
  return (
    <section id="proceso" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Cómo trabajamos"
          title="Proceso claro para maximizar resultados"
          subtitle="Combinamos diagnóstico comercial, implementación ágil y optimización continua para sostener crecimiento."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <article className="card-premium h-full">
                <p className="text-sm font-semibold text-blue-700">Paso {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
