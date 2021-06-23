import * as React from 'react';
import ExchangeRatesApi from './ExchangeRatesApi';
import { IExchangeRatesApi } from './IExchangeRatesApi';

const useExchangeRatesApi = () => {
  const [api] = React.useState<IExchangeRatesApi>(new ExchangeRatesApi());
  return api;
}

export { useExchangeRatesApi };
