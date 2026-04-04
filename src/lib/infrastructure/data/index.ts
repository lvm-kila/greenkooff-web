import runtimeConfig from "../../config/runtime";
import { dynamodbDataRepository } from "../../data/providers/dynamodb";
import { mockDataRepository } from "../../data/providers/mock";
import type { SubscriptionsAdapter } from "../../application/subscriptions/contracts";

const adapters: Record<string, SubscriptionsAdapter> = {
  mock: mockDataRepository,
  dynamodb: dynamodbDataRepository,
};

export const subscriptionsAdapter: SubscriptionsAdapter = adapters[runtimeConfig.dataProvider] ?? mockDataRepository;
