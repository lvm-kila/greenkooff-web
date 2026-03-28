import { TESTIMONIALS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Resultados"
          title="Empresas que ya escalaron con GVC"
          subtitle="Casos reales para mostrar impacto en captación, respuesta y conversión comercial."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.company} delay={index * 80}>
              <figure className="card-premium h-full">
                <blockquote className="text-slate-700">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-5 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{testimonial.company}</p>
                  <p className="text-sm text-slate-600">{testimonial.person}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
