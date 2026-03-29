import { SERVICES } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function ServiceIcon({ type }: { type: string }) {
  const base = "h-5 w-5 text-[#1a3b72]";
  if (type === "megaphone") {
    return <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11v2a2 2 0 0 0 2 2h2l4 4V5L7 9H5a2 2 0 0 0-2 2Z"/><path d="M15 8a5 5 0 0 1 0 8"/><path d="M17.8 5.2a9 9 0 0 1 0 13.6"/></svg>;
  }
  if (type === "layout") {
    return <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M10 9h11"/></svg>;
  }
  if (type === "spark") {
    return <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m12 2 1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2Z"/><path d="m5 16 .9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16Z"/></svg>;
  }
  return <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01"/></svg>;
}

export default function Services() {
  return (
    <section id="servicios" className="section-shell section-deep">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Servicios"
          title="Arquitectura digital para vender más y operar mejor"
          subtitle="Cuatro frentes coordinados para construir una presencia comercial sólida, escalable y medible."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article className="card-premium service-card group relative h-full overflow-hidden p-0">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent" />
                <div className="relative flex h-full flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Unidad estratégica</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{service.title}</h3>
                    </div>
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#1a3b72]/15 bg-white shadow-[0_12px_24px_-18px_rgba(15,23,42,0.5)] transition duration-500 group-hover:scale-105 group-hover:border-[#1a3b72]/25">
                      <ServiceIcon type={service.icon} />
                    </span>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{service.description}</p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2.5 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8833b]" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
