import { BRAND, WHATSAPP_URL } from "../content/siteContent";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700 p-8 text-white md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Siguiente paso</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Convierte tu operación digital en una máquina de crecimiento.</h2>
            <p className="mt-4 max-w-2xl text-blue-100">
              Agenda una sesión estratégica y definimos un plan accionable para ventas, automatización y presencia digital.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#planes" className="btn-primary">
                Explorar planes
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <form className="card-premium" aria-label="Formulario de contacto comercial">
            <h3 className="text-xl font-semibold text-slate-900">Solicita una asesoría</h3>
            <p className="mt-2 text-sm text-slate-600">Formulario listo para integración con CRM o backend existente.</p>
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
              <li>✉️ Correo: {BRAND.email} (placeholder editable).</li>
              <li>🗓️ Reuniones online para todo Chile.</li>
              <li>💳 Pago mensual con tarjeta o transferencia.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
