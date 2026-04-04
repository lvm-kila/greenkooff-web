import { dataRepository } from "../../data/provider";
import type { BillingProvider } from "../types";

export const mockBillingProvider: BillingProvider = {
  async enrollPaymentMethod({ userId, subscriptionId }) {
    const now = new Date().toISOString();
    const subscription = await dataRepository.getSubscriptionByUserId(userId);
    if (!subscription || subscription.id !== subscriptionId) {
      throw new Error("Suscripción no encontrada.");
    }

    const updatedSubscription = {
      ...subscription,
      status: "pending_activation" as const,
      nextBillingDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
      updatedAt: now,
    };

    const paymentMethod = {
      id: `pm_${crypto.randomUUID()}`,
      userId,
      provider: "mock" as const,
      billingUsername: `mock_user_${userId.slice(-4)}`,
      tbkUser: `tbk_${crypto.randomUUID().slice(0, 8)}`,
      status: "enrolled" as const,
      last4: "4242",
      cardBrand: "VISA",
      createdAt: now,
      updatedAt: now,
    };

    await dataRepository.saveSubscription(updatedSubscription);
    await dataRepository.savePaymentMethod(paymentMethod);
    await dataRepository.saveBillingEvent({
      id: `bill_${crypto.randomUUID()}`,
      userId,
      subscriptionId,
      amountCLP: 0,
      status: "pending",
      description: "Método de pago inscrito en modo mock. Cobro mensual pendiente de activación.",
      createdAt: now,
    });

    return { paymentMethod, subscription: updatedSubscription };
  },
};
