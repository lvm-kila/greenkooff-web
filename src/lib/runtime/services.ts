import { AuthApplicationService } from "../application/auth/service";
import { BillingApplicationService } from "../application/billing/service";
import { SubscriptionsApplicationService } from "../application/subscriptions/service";
import { authAdapter } from "../infrastructure/auth";
import { billingAdapter } from "../infrastructure/billing";
import { subscriptionsAdapter } from "../infrastructure/data";

export type RuntimeServices = {
  auth: AuthApplicationService;
  subscriptions: SubscriptionsApplicationService;
  billing: BillingApplicationService;
};

let singleton: RuntimeServices | null = null;

export const getRuntimeServices = (): RuntimeServices => {
  if (singleton) return singleton;

  singleton = {
    auth: new AuthApplicationService(authAdapter),
    subscriptions: new SubscriptionsApplicationService(subscriptionsAdapter),
    billing: new BillingApplicationService(billingAdapter),
  };

  return singleton;
};
