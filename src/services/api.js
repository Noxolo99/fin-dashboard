const ALPHA_VANTAGE_API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

// Get company/asset overview
export async function getAssetOverview(symbol) {
  const url = `${BASE_URL}?function=OVERVIEW&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network error");
  const data = await res.json();
  // If no data, Alpha Vantage returns an empty object
  if (!data.Symbol) return null;
  return data;
}

// Get daily prices
export async function getDailyPrices(symbol) {
  const url = `${BASE_URL}?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${ALPHA_VANTAGE_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network error");
  const data = await res.json();
  if (!data["Time Series (Daily)"]) return null;
  return data["Time Series (Daily)"];
}

// Get currency exchange rate
export async function getExchangeRate(from, to) {
  const url = `${BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${ALPHA_VANTAGE_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network error");
  const data = await res.json();
  if (!data["Realtime Currency Exchange Rate"]) return null;
  return parseFloat(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
}