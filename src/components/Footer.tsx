import { BRAND, NAV_LINKS, WHATSAPP_URL } from "../content/siteContent";
import GvcLogo from "./GvcLogo";

export default function Footer() {
  return (
    <footer className="footer-premium border-t border-[#d8e0ea] py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8">
        <div>
          <GvcLogo size="md" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300/90">
            Consultoría y ejecución premium en marketing, automatización y tecnología para empresas con objetivos de
            crecimiento exigentes.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Navegación</p>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300/85">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="inline-flex items-center gap-2 transition duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200" href={link.href}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b8833b]" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_22px_40px_-28px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Contacto</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center rounded-lg border border-[#b8833b]/35 bg-[#b8833b]/12 px-4 py-2 text-sm font-semibold text-[#f2d5ab] transition duration-300 hover:-translate-y-0.5 hover:border-[#b8833b]/55 hover:bg-[#b8833b]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2d5ab]"
          >
            Hablar por WhatsApp
          </a>
          <p className="mt-3 text-sm text-slate-300/90">{BRAND.email}</p>
          <p className="mt-2 text-sm text-slate-400">{BRAND.location}</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-slate-400 md:px-8">
        © 2026 {BRAND.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
