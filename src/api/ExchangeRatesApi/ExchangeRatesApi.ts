import { IExchangeRatesApi, LatestRatesDto, ApiError } from './IExchangeRatesApi';
import QueryStringBuilder from '../utils/QueryStringBuilder';

class ExchangeRatesApi implements IExchangeRatesApi {
  private readonly baseUrl = 'http://api.exchangeratesapi.io/v1/';

  public async fetchLatestRates(base?: string, symbols?: string[]): Promise<LatestRatesDto> {
    const query = QueryStringBuilder.build({
      base,
      symbols,
      access_key: process.env.REACT_APP_ACCESS_KEY_EXCHANGE_RATES,
    });

    const response = await fetch(`${this.baseUrl}latest?${query}`);

    if (!response.ok) {
      const { error }: ApiError = await response.json();
      throw Error(`${error.code}: ${error.message}`);
    }

    const data: LatestRatesDto = await response.json();
    return data;
  }
}

export default ExchangeRatesApi;
