export type SubscriptionStatus =
  | "incomplete"
  | "pending_payment_method"
  | "pending_activation"
  | "active"
  | "past_due"
  | "canceled";

export type BillingEventStatus = "pending" | "paid" | "failed" | "voided";

export type UserProfile = {
  id: string;
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  createdAt: string;
};

export type AuthUser = {
  id: string;
  email: string;
  fullName: string;
};

export type SubscriptionPlan = {
  slug: string;
  name: string;
  description: string;
  monthlyPriceCLP: number;
  billingInterval: "monthly";
  highlighted?: boolean;
};

export type ContractDraft = {
  id: string;
  userId: string;
  planSlug: string;
  acceptedTerms: boolean;
  status: "draft" | "submitted";
  createdAt: string;
};

export type Subscription = {
  id: string;
  userId: string;
  planSlug: string;
  status: SubscriptionStatus;
  contractDraftId?: string;
  currentPeriodStart?: string;
  currentPeriodEnd?: string;
  nextBillingDate?: string;
  createdAt: string;
  updatedAt: string;
};

export type PaymentMethod = {
  id: string;
  userId: string;
  provider: "mock" | "oneclick";
  billingUsername?: string;
  tbkUser?: string;
  status: "not_enrolled" | "pending_enrollment" | "enrolled";
  last4?: string;
  cardBrand?: string;
  createdAt: string;
  updatedAt: string;
};

export type BillingEvent = {
  id: string;
  userId: string;
  subscriptionId: string;
  amountCLP: number;
  status: BillingEventStatus;
  description: string;
  createdAt: string;
};
