import { ICurrencyConveterApi,  CurrencySymbols, CurrencySymbolsDto } from './ICurrencyConverterApi';

class CurrencyConverterApi implements ICurrencyConveterApi {

  private readonly baseUrl = 'http://api.exchangeratesapi.io/v1/';

  public async fetchCurrencySymbols(): Promise<CurrencySymbols> {

    try {
      const response = await fetch(`${this.baseUrl}/symbols?access_key=${process.env.REACT_APP_ACCESS_KEY_EXCHANGE_RATES}`);
      const data: CurrencySymbolsDto = await response.json();
      return data.symbols;
    } catch (error) {
      console.error(`CurrencyConverterApi#fetchCurrencySymbols: ${error.message}`);
      throw error;
    }

  }

}

export default CurrencyConverterApi;
