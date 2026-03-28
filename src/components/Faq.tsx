import { FAQS, WHATSAPP_URL } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Faq() {
  return (
    <section id="faq" className="section-shell section-alt">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1.3fr_0.7fr] md:px-8">
        <div>
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas clave antes de iniciar"
            subtitle="Respuestas claras sobre tiempos, pagos, soporte y alcance para decidir con seguridad."
          />

          <div className="mt-8 space-y-4">
            {FAQS.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 60}>
                <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-900">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <aside className="card-premium h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">¿Aún con dudas?</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">Conversemos tu caso</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Te orientamos sobre el plan correcto según tu etapa, equipo y objetivos de crecimiento.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary mt-6 w-full">
              Hablar con asesor
            </a>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
