import { FAQS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Faq() {
  return (
    <section id="faq" className="section-shell">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Preguntas comerciales frecuentes"
          subtitle="Resolvemos dudas clave sobre tiempos, soporte, pagos y resultados para avanzar con confianza."
          centered
        />

        <div className="mt-10 space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60}>
              <details className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
