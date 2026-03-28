import { BRAND, STATS, TRUST_BADGES, WHATSAPP_URL } from "../content/siteContent";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="hero-grid relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <Reveal>
          <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Agencia digital para Chile
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            {BRAND.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Diseñamos estrategias que combinan marketing, automatización y tecnología para generar más oportunidades
            comerciales de forma sostenible.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#planes" className="btn-primary">
              Ver planes
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary">
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {TRUST_BADGES.map((badge) => (
              <span key={badge} className="rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_24px_70px_-35px_rgba(37,99,235,.55)]">
            <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-blue-100">Panel estratégico</p>
              <h3 className="mt-2 text-2xl font-bold">Crecimiento comercial guiado por datos</h3>
              <p className="mt-3 text-blue-100">Visual placeholder editable para mockup corporativo, dashboard o interfaz SaaS.</p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
