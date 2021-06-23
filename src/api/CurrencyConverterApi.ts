import { ICurrencyConveterApi,  CurrencySymbols } from './ICurrencyConverterApi';

class CurrencyConverterApi implements ICurrencyConveterApi {

  private readonly baseUrl = 'http://api.exchangeratesapi.io/v1/';

  public async fetchCurrencySymbols() {

    try {
      const response = await fetch(`${this.baseUrl}/symbols?access_key=${process.env.REACT_APP_ACCESS_KEY_EXCHANGE_RATES}`);
      const symbols = await response.json();
      return symbols;
    } catch (error) {
      console.error(error);
    }

  }

}

export default CurrencyConverterApi;
