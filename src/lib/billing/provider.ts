import runtimeConfig from "../config/runtime";
import type { BillingProvider } from "./types";
import { mockBillingProvider } from "./providers/mock";
import { oneclickBillingProvider } from "./providers/oneclick";

const providers: Record<string, BillingProvider> = {
  mock: mockBillingProvider,
  oneclick: oneclickBillingProvider,
};

export const billingProvider = providers[runtimeConfig.paymentsProvider] ?? mockBillingProvider;
