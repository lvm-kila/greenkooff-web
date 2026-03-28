import { BENEFITS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Benefits() {
  return (
    <section className="section-shell bg-blue-50/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1fr_1.2fr] md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Diferenciadores"
            title="Resultados comerciales con enfoque premium"
            subtitle="Trabajamos con metodología clara, ejecución rigurosa y comunicación constante para que tu inversión se traduzca en crecimiento."
          />
        </Reveal>
        <div className="grid gap-4">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 90}>
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="font-medium text-slate-800">{benefit}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
