import { PROCESS_STEPS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Process() {
  return (
    <section id="proceso" className="section-shell section-process">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Cómo trabajamos"
          title="Un proceso claro para escalar sin improvisar"
          subtitle="Desde diagnóstico hasta optimización continua, cada etapa está diseñada para acelerar resultados."
        />

        <div className="relative mt-12">
          <div className="absolute left-6 top-5 bottom-5 hidden w-px bg-gradient-to-b from-[#1a3b72]/25 via-slate-300 to-transparent md:block lg:left-0 lg:right-0 lg:top-10 lg:mx-auto lg:h-px lg:w-[78%]" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 90}>
                <article className="process-step group relative h-full rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_28px_50px_-42px_rgba(15,23,42,0.45)] transition duration-500 hover:-translate-y-1 hover:border-[#1a3b72]/30 hover:shadow-[0_35px_65px_-42px_rgba(19,53,111,0.45)]">
                  <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-[#1a3b72]/20 bg-blue-50 px-3 text-xs font-semibold tracking-[0.08em] text-[#1a3b72]">
                    {step.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
