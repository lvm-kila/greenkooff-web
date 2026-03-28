import { SERVICES } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="servicios" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Servicios"
          title="Soluciones integrales para vender más"
          subtitle="Unificamos estrategia, diseño y ejecución para construir una operación digital sólida en cada etapa de tu empresa."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article className="card-premium h-full">
                <p className="text-2xl" aria-hidden>
                  {service.icon}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
