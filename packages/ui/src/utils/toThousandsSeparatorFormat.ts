import isNil from "./isNil";

/**
 * Convert a number to a string with a thousands separator and a fixed number of decimal places.
 * @param value - The number to convert.
 * @param maxFractionDigits - The maximum number of decimal places.
 *
 * @example
 * toThousandsSeparatorFormat(1234567.89, 2); // '1,234,567.89'
 *
 * */
export const toThousandsSeparatorFormat = (value = "") => {
  if (isNil(value) || value === "") return "";

  if (value.toString().replaceAll(" ", "") === "-") return "-";

  const [integer, decimal] = value.toString().replaceAll(/^0-9./g, "").split(".");

  let formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(Number(integer));

  if (decimal !== undefined) {
    formattedValue = `${formattedValue}.${decimal}`;
  }

  return formattedValue.replace("$", "");
};
