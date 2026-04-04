import type { BillingProvider } from "../../billing/types";

export interface BillingAdapter extends Pick<BillingProvider, "enrollPaymentMethod"> {}
