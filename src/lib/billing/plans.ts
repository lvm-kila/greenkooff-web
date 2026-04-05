import type { SubscriptionPlan } from "../domain/types";

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    slug: "emprendedor",
    name: "Plan Emprendedor",
    description: "Presencia digital y generación de clientes",
    monthlyPriceCLP: 249990,
    billingInterval: "monthly",
  },
  {
    slug: "pyme-crecimiento",
    name: "Plan Pyme Crecimiento",
    description: "Aumentar ventas y clientes",
    monthlyPriceCLP: 449990,
    billingInterval: "monthly",
    highlighted: true,
  },
  {
    slug: "premium",
    name: "Plan Empresa / Premium",
    description: "Escalar ventas y automatizar marketing",
    monthlyPriceCLP: 649990,
    billingInterval: "monthly",
  },
];

export const getPlanBySlug = (slug: string) => SUBSCRIPTION_PLANS.find((plan) => plan.slug === slug);
