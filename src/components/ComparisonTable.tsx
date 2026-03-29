import { COMPARISON_HEADERS, COMPARISON_ROWS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function ComparisonTable() {
  return (
    <section id="comparativa" className="section-shell section-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Comparativa"
          title="Diferencias de servicio explicadas para decidir con criterio"
          subtitle="Una vista clara del nivel de ejecución, automatización y seguimiento que recibe tu equipo en cada etapa."
        />

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/95 shadow-[0_30px_80px_-42px_rgba(11,31,71,0.42)]">
            <div className="overflow-x-auto">
              <table className="min-w-[860px] w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/90">
                    <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Atributo</th>
                    {COMPARISON_ROWS.map((plan) => (
                      <th
                        key={plan.label}
                        className={`px-6 py-5 text-left align-top ${plan.highlighted ? "bg-orange-50/80" : ""}`}
                      >
                        <p className="text-sm font-semibold text-slate-900">{plan.label}</p>
                        <p className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${plan.highlighted ? "bg-orange-100 text-orange-700" : "bg-slate-100 text-slate-600"}`}>
                          {plan.badge}
                        </p>
                        <p className="mt-2 text-xs font-medium text-slate-500">{plan.positioning}</p>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {COMPARISON_HEADERS.map((header, index) => (
                    <tr key={header} className="border-t border-slate-200/80">
                      <td className="px-6 py-4 text-sm font-medium text-slate-700">{header}</td>
                      {COMPARISON_ROWS.map((row) => {
                        const value = row.values[index];
                        const isYes = value === "Sí";

                        return (
                          <td key={`${row.label}-${header}`} className={`px-6 py-4 text-sm ${row.highlighted ? "bg-orange-50/30" : ""}`}>
                            <span className={`inline-flex items-center rounded-lg px-2.5 py-1 ${isYes ? "bg-blue-100 text-blue-800" : "text-slate-800"}`}>
                              {isYes ? "✓ Incluido" : value}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
