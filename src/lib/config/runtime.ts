const runtimeConfig = {
  authProvider: process.env.NEXT_PUBLIC_AUTH_PROVIDER ?? "mock",
  dataProvider: process.env.NEXT_PUBLIC_DATA_PROVIDER ?? "mock",
  paymentsProvider: process.env.NEXT_PUBLIC_PAYMENTS_PROVIDER ?? "mock",
};

export default runtimeConfig;
