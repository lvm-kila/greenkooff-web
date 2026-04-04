import runtimeConfig from "../../config/runtime";
import { mockBillingProvider } from "../../billing/providers/mock";
import { oneclickBillingProvider } from "../../billing/providers/oneclick";
import type { BillingAdapter } from "../../application/billing/contracts";

const adapters: Record<string, BillingAdapter> = {
  mock: mockBillingProvider,
  oneclick: oneclickBillingProvider,
};

export const billingAdapter: BillingAdapter = adapters[runtimeConfig.paymentsProvider] ?? mockBillingProvider;
