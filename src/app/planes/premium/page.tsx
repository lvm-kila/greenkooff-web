import PlanLanding from "../../../components/PlanLanding";
import { PLANS } from "../../../content/siteContent";

export default function PremiumPage() {
  return <PlanLanding plan={PLANS.find((plan) => plan.slug === "premium")!} />;
}
