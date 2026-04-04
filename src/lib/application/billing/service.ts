import type { EnrollPaymentMethodInput } from "../../billing/types";
import type { BillingAdapter } from "./contracts";

export class BillingApplicationService {
  constructor(private readonly billingAdapter: BillingAdapter) {}

  continueToPaymentEnrollment(input: EnrollPaymentMethodInput) {
    return this.billingAdapter.enrollPaymentMethod(input);
  }
}
