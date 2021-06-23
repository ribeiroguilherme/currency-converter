export interface ICurrencyConveterApi {
  fetchCurrencySymbols(): Promise<CurrencySymbols>;
}

export type CurrencySymbolsDto = {
  success: boolean;
  symbols: CurrencySymbols;
}

export type CurrencySymbols = Record<string, string>;
