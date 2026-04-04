import type { BillingEvent, PaymentMethod, Subscription } from "../../domain/types";
import type { DataRepository } from "../types";

const notImplemented = (): never => {
  throw new Error("DynamoDB repository no implementado aún. Usa NEXT_PUBLIC_DATA_PROVIDER=mock.");
};

export const dynamodbDataRepository: DataRepository = {
  async getPlans() {
    return notImplemented();
  },
  async getPlanBySlug(_slug: string) {
    return notImplemented();
  },
  async createContractDraft(_input) {
    return notImplemented();
  },
  async getAccountSnapshot(_userId: string) {
    return notImplemented();
  },
  async getSubscriptionByUserId(_userId: string) {
    return notImplemented();
  },
  async saveSubscription(_subscription: Subscription) {
    return notImplemented();
  },
  async savePaymentMethod(_paymentMethod: PaymentMethod) {
    return notImplemented();
  },
  async saveBillingEvent(_event: BillingEvent) {
    return notImplemented();
  },
};
