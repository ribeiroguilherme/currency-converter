export interface ICurrencyConveterApi {
  fetchLatestRates(base?: string, symbols?: string[]): Promise<LatestRatesDto>;
}

export type ApiError = {
  error: {
    code: string;
    message: string;
  }
}

export type LatestRatesDto = {
  base: string;
  rates: Record<string, number>;
}

