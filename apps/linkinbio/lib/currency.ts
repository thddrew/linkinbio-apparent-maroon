export const convertDollarsToCents = (dollars: string | number) => {
  return Math.round(Number(dollars) * 100);
};

export const convertCentsToDollars = (cents: string | number) => {
  return Number(cents) / 100;
};

export const displayLocalePrice = (
  cents: number,
  currency?: string,
  options?: Intl.NumberFormatOptions
) => {
  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
    currencyDisplay: "symbol",
    ...options,
  }).format(convertCentsToDollars(cents));

  return `${amount} ${currency}`;
};
