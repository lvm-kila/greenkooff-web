import { calcMonthlyIva, calcMonthlyNet, calcMonthlyTotal, formatClp } from "../../lib/billing/pricing";
import type { SubscriptionPlan } from "../../lib/domain/types";

export default function ContractSummary({ plan }: { plan: SubscriptionPlan }) {
  const net = calcMonthlyNet(plan.monthlyPriceCLP);
  const iva = calcMonthlyIva(plan.monthlyPriceCLP);
  const total = calcMonthlyTotal(plan.monthlyPriceCLP);

  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
      <h2 className="text-xl font-semibold text-slate-900">Resumen de contratación</h2>
      <p className="mt-2 text-sm text-slate-600">{plan.name}</p>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between gap-4"><dt>Cobro mensual</dt><dd>{formatClp(plan.monthlyPriceCLP)}</dd></div>
        <div className="flex justify-between gap-4"><dt>Subtotal neto</dt><dd>{formatClp(net)}</dd></div>
        <div className="flex justify-between gap-4"><dt>IVA (19%)</dt><dd>{formatClp(iva)}</dd></div>
        <div className="flex justify-between gap-4 border-t border-slate-200 pt-2 font-semibold text-slate-900"><dt>Total mensual</dt><dd>{formatClp(total)}</dd></div>
      </dl>
      <p className="mt-4 text-xs text-slate-500">La suscripción quedará pendiente de inscripción de método de pago para activación.</p>
    </article>
  );
}
