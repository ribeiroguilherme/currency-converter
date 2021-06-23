export interface ICurrencyConveterApi {
  fetchCurrencySymbols(): Promise<CurrencySymbols>;
}

export type CurrencySymbols = Record<string, string>;
