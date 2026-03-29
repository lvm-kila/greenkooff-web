import { NAV_LINKS, WHATSAPP_URL } from "../content/siteContent";
import GvcLogo from "./GvcLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#inicio" className="transition hover:opacity-90" aria-label="Ir al inicio">
          <GvcLogo size="sm" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a className="text-sm font-medium text-slate-600 transition hover:text-blue-700" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2.5 text-xs md:text-sm">
          Agendar diagnóstico
        </a>
      </nav>
    </header>
  );
}
