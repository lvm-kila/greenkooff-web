import { BRAND, NAV_LINKS, WHATSAPP_URL } from "../content/siteContent";
import GvcLogo from "./GvcLogo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8">
        <div>
          <GvcLogo size="md" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
            Consultoría y ejecución premium en marketing, automatización y tecnología para empresas con objetivos de
            crecimiento exigentes.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">Navegación</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-blue-700" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">Contacto</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline">
            Hablar por WhatsApp
          </a>
          <p className="mt-2 text-sm text-slate-600">{BRAND.email}</p>
          <p className="mt-2 text-sm text-slate-500">{BRAND.location}</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-4 pt-6 text-xs text-slate-500 md:px-8">
        © 2026 {BRAND.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
