import { STATS, TRUST_BADGES, WHATSAPP_URL } from "../content/siteContent";
import GvcLogo from "./GvcLogo";
import Reveal from "./Reveal";

const leads = [
  { company: "Holding Industrial M8", source: "Meta Ads + Scoring", status: "Reunión agendada" },
  { company: "Clínica Altamar", source: "Landing + CRM", status: "Calificado" },
  { company: "Advisory Nexo", source: "Google Ads", status: "Propuesta enviada" },
];

const automationSteps = ["Captura de lead", "Scoring automático", "Asignación comercial", "Seguimiento multicanal"];

export default function Hero() {
  return (
    <section id="inicio" className="hero-grid relative overflow-hidden py-20 md:py-28">
      <div className="brand-orb absolute -right-24 top-8 h-72 w-72 rounded-full" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-32 h-56 w-56 rounded-full border border-[#1a3b72]/20 bg-white/40 blur-2xl" aria-hidden />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <Reveal>
          <GvcLogo size="lg" withTagline />
          <p className="mt-8 inline-flex rounded-full border border-[#1a3b72]/15 bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
            Consultoría de crecimiento y operación comercial
          </p>
          <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-slate-900 md:text-6xl">
            Convertimos marketing y automatización en una ventaja comercial real.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            GVC diseña sistemas de adquisición, seguimiento y cierre para empresas que necesitan crecer con control,
            visibilidad y decisiones basadas en datos.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#planes" className="btn-primary">
              Ver arquitectura de planes
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-secondary">
              Solicitar diagnóstico ejecutivo
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {TRUST_BADGES.map((badge) => (
              <span key={badge} className="badge-trust">
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-[32px] border border-[#1a3b72]/12 bg-white/92 p-5 shadow-[0_42px_90px_-42px_rgba(12,32,74,0.65)] backdrop-blur md:p-6">
            <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" aria-hidden />

            <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-[#0d2a5f] via-[#123a7f] to-[#184992] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100/90">Revenue Operations Board</p>
                <span className="rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[11px] font-semibold">Live sync</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {STATS.map((stat) => (
                  <article key={stat.label} className="rounded-xl border border-white/20 bg-white/[0.08] p-3 backdrop-blur-sm">
                    <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                    <p className="mt-1 text-[11px] leading-5 text-blue-100/85">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">Pipeline activo</p>
                  <span className="text-xs font-medium text-slate-500">Últimos 7 días</span>
                </div>
                <div className="space-y-2">
                  {leads.map((lead) => (
                    <div key={lead.company} className="grid grid-cols-[1.2fr_1fr_auto] items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-3 py-2 text-xs shadow-[0_8px_20px_-20px_rgba(15,23,42,0.55)]">
                      <span className="font-medium text-slate-700">{lead.company}</span>
                      <span className="text-slate-500">{lead.source}</span>
                      <span className="rounded-full border border-[#1a3b72]/15 bg-[#1a3b72]/10 px-2 py-1 font-semibold text-[#1a3b72]">{lead.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Automatización</p>
                <ul className="mt-3 space-y-2">
                  {automationSteps.map((step) => (
                    <li key={step} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="h-2 w-2 rounded-full bg-[#b8833b]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-5 -left-4 rounded-2xl border border-slate-200/90 bg-white/92 px-4 py-3 shadow-lg backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">ROAS Promedio</p>
              <p className="text-xl font-bold text-[#1a3b72]">4.8x</p>
            </div>
            <div className="pointer-events-none absolute -right-5 top-24 rounded-2xl border border-amber-200/70 bg-amber-50/92 px-4 py-2 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700">Tasa de avance</p>
              <p className="text-lg font-semibold text-amber-700">+19% mensual</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
