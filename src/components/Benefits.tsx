import { BENEFITS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Benefits() {
  return (
    <section className="section-shell section-alt">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1fr_1.15fr] md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Diferenciadores"
            title="Ejecución premium orientada a performance"
            subtitle="No solo diseñamos campañas: construimos un sistema comercial que conecta marketing, ventas y operación digital."
          />
        </Reveal>
        <div className="grid gap-4">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 90}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="font-medium text-slate-800">{benefit}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
