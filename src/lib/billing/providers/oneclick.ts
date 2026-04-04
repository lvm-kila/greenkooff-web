import type { BillingProvider } from "../types";

export const oneclickBillingProvider: BillingProvider = {
  async enrollPaymentMethod() {
    throw new Error("Oneclick provider no implementado aún. Usa NEXT_PUBLIC_PAYMENTS_PROVIDER=mock.");
  },
};
