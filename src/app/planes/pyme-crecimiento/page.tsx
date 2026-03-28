import PlanLanding from "../../../components/PlanLanding";
import { PLANS } from "../../../content/siteContent";

export default function PymeCrecimientoPage() {
  return <PlanLanding plan={PLANS.find((plan) => plan.slug === "pyme-crecimiento")!} />;
}
