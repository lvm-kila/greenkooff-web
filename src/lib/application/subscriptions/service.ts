import type { ContractDraft, Subscription } from "../../domain/types";
import type { ContractDraftInput, ContractOverview, SubscriptionsAdapter } from "./contracts";

export class SubscriptionsApplicationService {
  constructor(private readonly subscriptionsAdapter: SubscriptionsAdapter) {}

  resolvePlanForContract(slug: string) {
    return this.subscriptionsAdapter.getPlanBySlug(slug);
  }

  createContractDraft(input: ContractDraftInput): Promise<ContractDraft> {
    return this.subscriptionsAdapter.createContractDraft(input);
  }

  createPendingSubscription(input: ContractDraftInput): Promise<ContractDraft> {
    return this.createContractDraft(input);
  }

  async getContractOverview(userId: string): Promise<ContractOverview> {
    const snapshot = await this.subscriptionsAdapter.getAccountSnapshot(userId);
    const plan = snapshot.subscription ? await this.subscriptionsAdapter.getPlanBySlug(snapshot.subscription.planSlug) : null;
    return { plan, snapshot };
  }

  getAccountSnapshot(userId: string) {
    return this.subscriptionsAdapter.getAccountSnapshot(userId);
  }

  getSubscriptionByUserId(userId: string): Promise<Subscription | null> {
    return this.subscriptionsAdapter.getSubscriptionByUserId(userId);
  }
}
