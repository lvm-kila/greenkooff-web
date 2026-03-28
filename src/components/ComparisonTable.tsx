import { COMPARISON_HEADERS, COMPARISON_ROWS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function ComparisonTable() {
  return (
    <section id="comparativa" className="section-shell bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Comparativa"
          title="Compara planes de forma rápida"
          subtitle="Visualiza qué incluye cada plan y elige el nivel de acompañamiento más alineado a tus objetivos."
        />

        <Reveal>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-blue-100 bg-white shadow-sm">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-blue-800">Plan</th>
                  {COMPARISON_HEADERS.map((header) => (
                    <th key={header} className="px-4 py-3 text-left font-semibold text-blue-800">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.label}</td>
                    {row.values.map((value) => (
                      <td key={`${row.label}-${value}`} className="px-4 py-3 text-slate-700">
                        {value}
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
