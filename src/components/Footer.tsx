import { BRAND, NAV_LINKS, WHATSAPP_URL } from "../content/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-2xl font-bold text-blue-800">{BRAND.name}</p>
          <p className="mt-2 text-sm text-slate-600">Soluciones digitales premium para emprendedores, pymes y empresas en Chile.</p>
        </div>

        <div>
          <p className="font-semibold text-slate-900">Navegación</p>
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
          <p className="font-semibold text-slate-900">Contacto</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-blue-700 hover:underline">
            Hablar por WhatsApp
          </a>
          <p className="mt-2 text-sm text-slate-600">contacto@impulsa360.cl (placeholder)</p>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-4 text-xs text-slate-500 md:px-8">© 2026 {BRAND.name}. Todos los derechos reservados.</p>
    </footer>
  );
}
