import { BRAND, NAV_LINKS, WHATSAPP_URL } from "../content/siteContent";
import GvcLogo from "./GvcLogo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
        <div>
          <GvcLogo size="md" />
          <p className="mt-3 max-w-sm text-sm text-slate-600">
            Soluciones premium de marketing, automatización y tecnología para emprendedores, pymes y empresas en Chile.
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

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">Contacto</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-blue-700 hover:underline">
            Hablar por WhatsApp
          </a>
          <p className="mt-2 text-sm text-slate-600">{BRAND.email} (placeholder editable)</p>
          <p className="mt-2 text-sm text-slate-500">{BRAND.location}</p>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl border-t border-slate-200 px-4 pt-6 text-xs text-slate-500 md:px-8">© 2026 {BRAND.name}. Todos los derechos reservados.</p>
    </footer>
  );
}
