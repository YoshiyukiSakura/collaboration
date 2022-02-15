import moment from "moment";
import BigNumber from "bignumber.js";

BigNumber.config({ EXPONENTIAL_AT: 36 });

export function addressEllipsis(address, start = 4, end = 4) {
  if (!address) return;
  if (address.length <= start + end) return address;
  if (!address.slice) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
}

export function timeDuration(time) {
  if (!time) {
    return "Unknown time";
  }
  moment.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few secs",
      ss: "%d secs",
      m: "1 min",
      mm: "%d mins",
      h: "1 hour",
      hh: "%d hours",
      d: "1 day",
      dd: "%d days",
      M: "1 month",
      MM: "%d months",
      y: "1 year",
      yy: "%d years",
    },
  });
  const now = moment();
  if (!now.isAfter(time)) {
    //todo 讨论当客户端时间不准时应当如何处理
    return moment(time).fromNow();
  }
  let ss = now.diff(time, "seconds");
  let ii = now.diff(time, "minutes");
  let hh = now.diff(time, "hours");
  let dd = now.diff(time, "days");
  let mm = now.diff(time, "months");
  let yy = now.diff(time, "years");
  if (yy) {
    mm %= 12;
    if (mm) {
      return `${yy} year${yy > 1 ? "s" : ""} ${mm} mon${mm > 1 ? "s" : ""} ago`;
    }
    return `${yy} year${yy > 1 ? "s" : ""} ago`;
  }
  if (mm) {
    return `${mm} mon${mm > 1 ? "s" : ""} ago`;
  }
  if (dd) {
    hh %= 24;
    if (hh) {
      return `${dd} day${dd > 1 ? "s" : ""} ${hh} hr${hh > 1 ? "s" : ""} ago`;
    }
    return `${dd} day${dd > 1 ? "s" : ""} ago`;
  }
  if (hh) {
    ii %= 60;
    if (ii) {
      return `${hh} hr${hh > 1 ? "s" : ""} ${ii} min${ii > 1 ? "s" : ""} ago`;
    }
    return `${hh} hr${hh > 1 ? "s" : ""} ago`;
  }
  if (ii) {
    ss %= 60;
    if (ss) {
      return `${ii} min${ii > 1 ? "s" : ""} ${ss} sec${ss > 1 ? "s" : ""} ago`;
    }
    return `${ii} min${ii > 1 ? "s" : ""} ago`;
  }
  return `${ss} sec${ss > 1 ? "s" : ""} ago`;
}

export function getPrecision(symbol) {
  switch (symbol) {
    case "KSM":
      return 12;
    case "DOT":
      return 10;
    default:
      return 12;
  }
}

export function toFixedPrecision(value, decimals, fixed = 2, toLocale = true) {
  const result = new BigNumber(value)
    .dividedBy(Math.pow(10, decimals))
    .toFixed(fixed)
    .toString();
  if (toLocale) {
    return bigNumber2Locale(result);
  }
  return result;
}

export function toPrecision(value, decimals) {
  return new BigNumber(value).dividedBy(Math.pow(10, decimals)).toString();
}

export function isEmpty(foo) {
  return typeof foo === "undefined" || foo === null;
}

export function fromSymbolUnit(value, symbol) {
  const precision = getPrecision(symbol);
  return new BigNumber(value).dividedBy(Math.pow(10, precision)).toString();
}

export function toSymbolUnit(value, symbol) {
  const precision = getPrecision(symbol);
  return new BigNumber(value).multipliedBy(Math.pow(10, precision)).toString();
}

export function fromAssetUnit(value, decimals) {
  return new BigNumber(value).dividedBy(Math.pow(10, decimals)).toString();
}

export function bigNumber2Locale(x) {
  let result = "";
  const [Int, Decimals] = x.split(".");
  result += Int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (Decimals) {
    result += `.${Decimals}`;
  }
  return result;
}

export function bigNumber2LocaleWithAbbr(value, decimals) {
  const x = toPrecision(value, decimals);
  const n = new BigNumber(x);
  const fmt = {
    decimalSeparator: ".",
    groupSeparator: ",",
    groupSize: 3,
  };
  let divideBy = new BigNumber("1");
  const bigNumbers = [
    { bigNumber: new BigNumber("1000000000"), abbr: "B" },
    { bigNumber: new BigNumber("1000000000000"), abbr: "T" },
    { bigNumber: new BigNumber("1000000000000000"), abbr: "Q" },
  ];
  bigNumbers.forEach((data) => {
    if (n.isGreaterThan(data.bigNumber)) {
      divideBy = data.bigNumber;
      fmt.suffix = data.abbr;
    }
  });
  BigNumber.config({ FORMAT: fmt });
  return new BigNumber(n.dividedBy(divideBy).toFixed(0)).toFormat();
}

export function encodeURIQuery(q) {
  return Object.keys(q)
    .map((k) => `${k}=${encodeURIComponent(q[k])}`)
    .join("&");
}

export function toApproximatelyFixed(value, fixed = 2) {
  if (!value || isNaN(value)) return value;
  const nValue = Number(value);
  if (nValue === 0) return "0";
  const fixedValue = nValue.toFixed(fixed);
  if (Number(fixedValue) === nValue) return "" + fixedValue;
  return "≈ " + fixedValue;
}

export function matchMdLink(t) {
  const expression =
    /(?<!\]\()((?:https?|ftp):\/\/[^\s\]\)]*)(?:[\s\]\)](?!\()|$)/gi;
  return t.replace(expression, "[$1]($1) ");
}

export function abbreviateBigNumber(x, fixed = 2) {
  const n = new BigNumber(x);
  const fmt = {
    decimalSeparator: ".",
    groupSeparator: ",",
    groupSize: 3,
  };
  let divideBy = new BigNumber("1");
  const bigNumbers = [
    { bigNumber: new BigNumber("1000"), abbr: "K" },
    { bigNumber: new BigNumber("1000000"), abbr: "M" },
    { bigNumber: new BigNumber("1000000000"), abbr: "B" },
    { bigNumber: new BigNumber("1000000000000"), abbr: "T" },
    { bigNumber: new BigNumber("1000000000000000"), abbr: "Q" },
  ];
  bigNumbers.forEach((data) => {
    if (n.isGreaterThan(data.bigNumber)) {
      divideBy = data.bigNumber;
      fmt.suffix = data.abbr;
    }
  });
  BigNumber.config({ FORMAT: fmt });
  return new BigNumber(n.dividedBy(divideBy).toFixed(fixed)).toFormat();
}
