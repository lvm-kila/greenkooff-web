import { COMPARISON_HEADERS, COMPARISON_ROWS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function ComparisonTable() {
  return (
    <section id="comparativa" className="section-shell section-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Comparativa"
          title="Una decisión estratégica, explicada con claridad"
          subtitle="Compara profundidad de servicio, nivel de automatización y capacidad de escalamiento sin fricción visual."
        />

        <Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {COMPARISON_ROWS.map((row, idx) => (
              <article key={row.label} className={`card-premium h-full p-0 ${idx === 1 ? "border-orange-200" : ""}`}>
                <div className={`rounded-t-[26px] px-5 py-4 ${idx === 1 ? "bg-orange-50" : "bg-slate-50"}`}>
                  <p className="text-base font-semibold text-slate-900">{row.label}</p>
                </div>
                <div className="space-y-2 p-5">
                  {COMPARISON_HEADERS.map((header, headerIndex) => (
                    <div key={`${row.label}-${header}`} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
                      <span className="text-slate-600">{header}</span>
                      <span className={`font-semibold ${row.values[headerIndex] === "Sí" ? "text-blue-700" : "text-slate-800"}`}>
                        {row.values[headerIndex] === "Sí" ? "✓ Incluido" : row.values[headerIndex]}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
