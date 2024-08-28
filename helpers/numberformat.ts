import { T } from "@/utils/types";

export function formatCompactNumber(number:T) {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(number);
}

export function formatLocaleString(number:T) {
    return number.toLocaleString('en-US');
}
  