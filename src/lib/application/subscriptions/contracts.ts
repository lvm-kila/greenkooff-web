import type { AccountSnapshot, DataRepository } from "../../data/types";
import type { SubscriptionPlan } from "../../domain/types";

export interface SubscriptionsAdapter
  extends Pick<
    DataRepository,
    | "getPlans"
    | "getPlanBySlug"
    | "createContractDraft"
    | "getAccountSnapshot"
    | "getSubscriptionByUserId"
    | "saveSubscription"
    | "savePaymentMethod"
    | "saveBillingEvent"
  > {}

export type ContractDraftInput = {
  userId: string;
  planSlug: string;
  acceptedTerms: boolean;
};

export type ContractOverview = {
  plan: SubscriptionPlan | null;
  snapshot: AccountSnapshot;
};
