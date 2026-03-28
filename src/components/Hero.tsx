import { STATS, TRUST_BADGES, WHATSAPP_URL } from "../content/siteContent";
import GvcLogo from "./GvcLogo";
import Reveal from "./Reveal";

const leads = [
  { company: "Clínica Norte", source: "Meta Ads", status: "Calificado" },
  { company: "Inmobiliaria Vértice", source: "Landing + CRM", status: "Reunión" },
  { company: "Estudio Atlas", source: "Google Ads", status: "Seguimiento" },
];

export default function Hero() {
  return (
    <section id="inicio" className="hero-grid relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <Reveal>
          <GvcLogo size="lg" withTagline />
          <h1 className="mt-7 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
            Marketing y automatización para empresas que quieren crecer en serio.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
            Diseñamos sistemas comerciales que integran adquisición, presencia digital y tecnología para escalar ventas
            de forma predecible.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#planes" className="btn-primary">
              Ver planes
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary">
              Solicitar diagnóstico
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {TRUST_BADGES.map((badge) => (
              <span key={badge} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-[28px] border border-blue-100 bg-white/95 p-5 shadow-[0_40px_80px_-36px_rgba(37,99,235,0.35)] md:p-6">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 p-5 text-white">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Panel de rendimiento</p>
                <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold">Live</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {STATS.map((stat) => (
                  <article key={stat.label} className="rounded-xl border border-white/25 bg-white/10 p-3 backdrop-blur">
                    <p className="text-xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-[11px] leading-5 text-blue-100">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">Flujo comercial automatizado</p>
                <span className="text-xs font-medium text-slate-500">Últimos 7 días</span>
              </div>
              <div className="space-y-2">
                {leads.map((lead) => (
                  <div key={lead.company} className="grid grid-cols-[1.2fr_1fr_auto] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs">
                    <span className="font-medium text-slate-700">{lead.company}</span>
                    <span className="text-slate-500">{lead.source}</span>
                    <span className="rounded-full bg-blue-100 px-2 py-1 font-semibold text-blue-700">{lead.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">ROAS Promedio</p>
              <p className="text-xl font-bold text-blue-700">4.8x</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
