"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "../content/siteContent";
import { useAuth } from "../hooks/useAuth";
import GvcLogo from "./GvcLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { session, logout } = useAuth();

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f8fbff]/82 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 py-3 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="rounded-lg transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a3b72]" aria-label="Ir al inicio">
            <GvcLogo size="sm" />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="inline-flex rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/70 hover:text-[#1a3b72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a3b72]"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            {session ? (
              <>
                <Link href="/mi-cuenta" className="btn-secondary px-4 py-2.5 text-xs md:text-sm">Mi cuenta</Link>
                <button onClick={() => logout()} className="btn-secondary px-4 py-2.5 text-xs md:text-sm" type="button">Cerrar sesión</button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="btn-secondary px-4 py-2.5 text-xs md:text-sm">Iniciar sesión</Link>
                <Link href="/auth/register" className="btn-secondary px-4 py-2.5 text-xs md:text-sm">Crear cuenta</Link>
              </>
            )}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2.5 text-xs md:text-sm">
              Agendar diagnóstico
            </a>
          </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/80 bg-white/85 text-slate-700 shadow-sm transition hover:border-[#1a3b72]/40 hover:text-[#1a3b72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a3b72] lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Menú principal</span>
              <span className="relative block h-3.5 w-4">
                <span className={`absolute left-0 top-0 h-[1.5px] w-4 bg-current transition ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[6px] h-[1.5px] w-4 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-3 h-[1.5px] w-4 bg-current transition ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </span>
            </button>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? "max-h-[35rem] pt-4 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-[0_20px_45px_-35px_rgba(11,31,71,0.7)] backdrop-blur">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#1a3b72]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 space-y-2 border-t border-slate-200 pt-3">
              {session ? (
                <>
                  <Link href="/mi-cuenta" onClick={() => setMenuOpen(false)} className="btn-secondary w-full">Mi cuenta</Link>
                  <button type="button" className="btn-secondary w-full" onClick={() => { logout(); setMenuOpen(false); }}>Cerrar sesión</button>
                </>
              ) : (
                <>
                  <Link href="/auth/login" onClick={() => setMenuOpen(false)} className="btn-secondary w-full">Iniciar sesión</Link>
                  <Link href="/auth/register" onClick={() => setMenuOpen(false)} className="btn-secondary w-full">Crear cuenta</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
