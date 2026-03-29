import { BENEFITS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Benefits() {
  return (
    <section className="section-shell section-alt relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1fr_1.2fr] md:gap-12 md:px-8">
        <Reveal>
          <div className="md:pr-4">
            <SectionTitle
              eyebrow="Diferenciadores"
              title="Ejecución premium orientada a performance"
              subtitle="No solo diseñamos campañas: construimos un sistema comercial que conecta marketing, ventas y operación digital."
            />
            <div className="mt-6 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_24px_50px_-40px_rgba(11,31,71,0.6)] backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3b72]">Por qué GVC opera distinto</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Diseñamos decisiones con criterio comercial: priorizamos lo que impacta revenue, simplificamos la operación y
                mantenemos visibilidad ejecutiva en cada etapa.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 90}>
              <article className="benefit-card group h-full rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_26px_50px_-42px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-1 hover:border-[#1a3b72]/20 hover:shadow-[0_35px_60px_-42px_rgba(19,53,111,0.45)]">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1a3b72]/15 bg-blue-50 text-[#1a3b72] transition duration-300 group-hover:border-[#1a3b72]/35 group-hover:bg-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-800">{benefit}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
