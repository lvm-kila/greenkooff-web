import PlanLanding from "../../../components/PlanLanding";
import { PLANS } from "../../../content/siteContent";

export default function EmprendedorPage() {
  return <PlanLanding plan={PLANS.find((plan) => plan.slug === "emprendedor")!} />;
}
