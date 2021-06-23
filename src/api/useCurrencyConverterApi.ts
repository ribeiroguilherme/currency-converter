import * as React from 'react';
import CurrencyConverterApi from './CurrencyConverterApi';
import { ICurrencyConveterApi } from './ICurrencyConverterApi';

const useCurrencyConverterApi = () => {
  const [api] = React.useState<ICurrencyConveterApi>(new CurrencyConverterApi());
  return api;
}

export { useCurrencyConverterApi };
