import { COMPARISON_HEADERS, COMPARISON_ROWS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function ComparisonTable() {
  return (
    <section id="comparativa" className="section-shell section-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Comparativa"
          title="Diferencias claras para decidir con confianza"
          subtitle="Visualiza alcance, automatización y profundidad de soporte en una sola vista."
        />

        <Reveal>
          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold text-slate-800">Plan</th>
                  {COMPARISON_HEADERS.map((header) => (
                    <th key={header} className="px-5 py-4 text-left font-semibold text-slate-800">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="px-5 py-4 font-semibold text-slate-900">{row.label}</td>
                    {row.values.map((value) => (
                      <td key={`${row.label}-${value}`} className="px-5 py-4 text-slate-700">
                        {value === "Sí" ? <span className="font-semibold text-blue-700">✓ {value}</span> : value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
