import type { BillingEvent, ContractDraft, PaymentMethod, Subscription, SubscriptionPlan } from "../domain/types";

export type AccountSnapshot = {
  subscription: Subscription | null;
  paymentMethod: PaymentMethod | null;
  billingEvents: BillingEvent[];
  contractDrafts: ContractDraft[];
};

export interface DataRepository {
  getPlans(): Promise<SubscriptionPlan[]>;
  getPlanBySlug(slug: string): Promise<SubscriptionPlan | null>;
  createContractDraft(input: { userId: string; planSlug: string; acceptedTerms: boolean }): Promise<ContractDraft>;
  getAccountSnapshot(userId: string): Promise<AccountSnapshot>;
  getSubscriptionByUserId(userId: string): Promise<Subscription | null>;
  saveSubscription(subscription: Subscription): Promise<void>;
  savePaymentMethod(paymentMethod: PaymentMethod): Promise<void>;
  saveBillingEvent(event: BillingEvent): Promise<void>;
}
