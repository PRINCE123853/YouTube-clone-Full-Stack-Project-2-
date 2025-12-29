export function abbreviateNumber(value, decimals = 1) {
  if (!value) return "0";

  const suffixes = ["", "K", "M", "B", "T"];
  let i = 0;

  while (value >= 1000 && i < suffixes.length - 1) {
    value /= 1000;
    i++;
  }

  return value.toFixed(decimals) + suffixes[i];
}
