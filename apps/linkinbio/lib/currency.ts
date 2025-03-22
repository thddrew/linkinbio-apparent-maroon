export const convertDollarsToCents = (dollars: string | number) => {
  return Math.round(Number(dollars) * 100);
};

export const displayLocalePrice = (cents: number, currency = "USD") => {
  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  }).format(cents);

  return `${amount} ${currency}`;
};
