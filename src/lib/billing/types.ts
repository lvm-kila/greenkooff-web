import type { PaymentMethod, Subscription } from "../domain/types";

export type EnrollPaymentMethodInput = {
  userId: string;
  subscriptionId: string;
};

export type EnrollPaymentMethodResult = {
  paymentMethod: PaymentMethod;
  subscription: Subscription;
};

export interface BillingProvider {
  enrollPaymentMethod(input: EnrollPaymentMethodInput): Promise<EnrollPaymentMethodResult>;
}
