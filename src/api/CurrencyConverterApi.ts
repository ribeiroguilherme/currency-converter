import { ICurrencyConveterApi, LatestRatesDto, ApiError } from './ICurrencyConverterApi';
import QueryStringBuilder from './QueryStringBuilder';

class CurrencyConverterApi implements ICurrencyConveterApi {

  private readonly baseUrl = 'http://api.exchangeratesapi.io/v1/';

  public async fetchLatestRates(base?: string, symbols?: string[]): Promise<LatestRatesDto> {

    const query = QueryStringBuilder.build({
      base,
      symbols,
      'access_key': process.env.REACT_APP_ACCESS_KEY_EXCHANGE_RATES,
    })

    try {
      const response = await fetch(`${this.baseUrl}latest?${query}`);

      if (!response.ok) {
        const { error }: ApiError = await response.json();
        throw Error(error.message);
      }

      const data: LatestRatesDto = await response.json();
      return data;
    } catch (error) {
      console.error(`CurrencyConverterApi#fetchCurrencySymbols: ${error.message}`);
      throw error;
    }
  }


}

export default CurrencyConverterApi;
