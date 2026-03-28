import { WHATSAPP_URL } from "../content/siteContent";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-800 to-blue-600 p-8 text-white md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-blue-100">CTA final</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">¿Listo para escalar tu operación digital?</h2>
            <p className="mt-4 max-w-2xl text-blue-100">
              Agenda una conversación estratégica, define el plan correcto y comienza a construir un sistema comercial
              más predecible.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#planes" className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                Contratar
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <form className="card-premium" aria-label="Formulario de contacto comercial">
            <h3 className="text-xl font-semibold text-slate-900">Solicita una asesoría</h3>
            <p className="mt-2 text-sm text-slate-600">Formulario preparado para integración con CRM o backend existente.</p>
            <div className="mt-5 space-y-4">
              <input className="input-premium" placeholder="Nombre" name="nombre" />
              <input className="input-premium" type="email" placeholder="Correo corporativo" name="email" />
              <input className="input-premium" placeholder="Empresa" name="empresa" />
              <textarea className="input-premium min-h-28" placeholder="Cuéntanos tu objetivo comercial" name="mensaje" />
              <button type="button" className="btn-primary w-full justify-center">
                Enviar solicitud
              </button>
            </div>
          </form>

          <div className="card-premium">
            <h3 className="text-xl font-semibold text-slate-900">Canales de contacto</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>📲 WhatsApp comercial: respuesta prioritaria en horario laboral.</li>
              <li>✉️ Correo: contacto@impulsa360.cl (placeholder editable).</li>
              <li>🗓️ Reuniones online para todo Chile.</li>
              <li>💳 Pago mensual con tarjeta o transferencia.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
