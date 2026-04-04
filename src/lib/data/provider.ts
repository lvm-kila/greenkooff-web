import runtimeConfig from "../config/runtime";
import { dynamodbDataRepository } from "./providers/dynamodb";
import { mockDataRepository } from "./providers/mock";
import type { DataRepository } from "./types";

const providers: Record<string, DataRepository> = {
  mock: mockDataRepository,
  dynamodb: dynamodbDataRepository,
};

export const dataRepository = providers[runtimeConfig.dataProvider] ?? mockDataRepository;
