export interface IExchangeRatesApi {
  fetchLatestRates(base?: string, symbols?: string[]): Promise<LatestRatesDto>;
}

export type LatestRatesDto = {
  base: string;
  rates: Record<string, number>;
}

export type ApiError = {
  error: {
    code: string;
    message: string;
  }
}
