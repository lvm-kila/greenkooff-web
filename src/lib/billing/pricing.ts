const IVA_RATE = 0.19;

export const calcMonthlyNet = (monthlyPriceCLP: number) => Math.round(monthlyPriceCLP / (1 + IVA_RATE));
export const calcMonthlyIva = (monthlyPriceCLP: number) => monthlyPriceCLP - calcMonthlyNet(monthlyPriceCLP);
export const calcMonthlyTotal = (monthlyPriceCLP: number) => monthlyPriceCLP;

export const formatClp = (amount: number) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(amount);
