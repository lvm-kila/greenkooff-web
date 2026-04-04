import { SUBSCRIPTION_PLANS, getPlanBySlug } from "../../billing/plans";
import type { BillingEvent, ContractDraft, PaymentMethod, Subscription } from "../../domain/types";
import type { AccountSnapshot, DataRepository } from "../types";

const DB_KEY = "gvc_mock_data";

type MockDb = {
  drafts: ContractDraft[];
  subscriptions: Subscription[];
  paymentMethods: PaymentMethod[];
  billingEvents: BillingEvent[];
};

const isBrowser = typeof window !== "undefined";

const defaultDb: MockDb = { drafts: [], subscriptions: [], paymentMethods: [], billingEvents: [] };

const readDb = (): MockDb => {
  if (!isBrowser) return defaultDb;
  const raw = window.localStorage.getItem(DB_KEY);
  if (!raw) {
    window.localStorage.setItem(DB_KEY, JSON.stringify(defaultDb));
    return defaultDb;
  }
  return JSON.parse(raw) as MockDb;
};

const writeDb = (db: MockDb) => {
  if (!isBrowser) return;
  window.localStorage.setItem(DB_KEY, JSON.stringify(db));
};

export const mockDataRepository: DataRepository = {
  async getPlans() {
    return SUBSCRIPTION_PLANS;
  },
  async getPlanBySlug(slug: string) {
    return getPlanBySlug(slug) ?? null;
  },
  async createContractDraft({ userId, planSlug, acceptedTerms }) {
    const db = readDb();
    db.subscriptions = db.subscriptions.filter((sub) => sub.userId !== userId);

    const draft: ContractDraft = {
      id: `draft_${crypto.randomUUID()}`,
      userId,
      planSlug,
      acceptedTerms,
      status: "submitted",
      createdAt: new Date().toISOString(),
    };
    db.drafts.unshift(draft);

    const now = new Date().toISOString();
    const subscription: Subscription = {
      id: `sub_${crypto.randomUUID()}`,
      userId,
      planSlug,
      status: "pending_payment_method",
      contractDraftId: draft.id,
      createdAt: now,
      updatedAt: now,
    };
    db.subscriptions.unshift(subscription);
    writeDb(db);
    return draft;
  },
  async getAccountSnapshot(userId) {
    const db = readDb();
    const subscription = db.subscriptions.find((item) => item.userId === userId) ?? null;
    const paymentMethod = db.paymentMethods.find((item) => item.userId === userId) ?? null;

    return {
      subscription,
      paymentMethod,
      billingEvents: db.billingEvents.filter((item) => item.userId === userId),
      contractDrafts: db.drafts.filter((item) => item.userId === userId),
    } satisfies AccountSnapshot;
  },
  async getSubscriptionByUserId(userId) {
    return readDb().subscriptions.find((item) => item.userId === userId) ?? null;
  },
  async saveSubscription(subscription) {
    const db = readDb();
    db.subscriptions = db.subscriptions.filter((item) => item.id !== subscription.id);
    db.subscriptions.unshift(subscription);
    writeDb(db);
  },
  async savePaymentMethod(paymentMethod) {
    const db = readDb();
    db.paymentMethods = db.paymentMethods.filter((item) => item.id !== paymentMethod.id && item.userId !== paymentMethod.userId);
    db.paymentMethods.unshift(paymentMethod);
    writeDb(db);
  },
  async saveBillingEvent(event) {
    const db = readDb();
    db.billingEvents.unshift(event);
    writeDb(db);
  },
};
