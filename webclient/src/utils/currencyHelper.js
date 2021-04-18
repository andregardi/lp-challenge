export const currencyFormater = (value) =>
  Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2
  }).format(value);
