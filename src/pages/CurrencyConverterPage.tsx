import * as React from 'react';
import { useCurrencyConverterApi } from '../api/useCurrencyConverterApi';
import { CurrencySymbols } from '../api/ICurrencyConverterApi';

const CurrencyConverterPage = () => {
  const [symbols, setSymbols] = React.useState<CurrencySymbols>();

  const api = useCurrencyConverterApi();

  React.useEffect(() => {
    async function request() {
      const symbols = await api.fetchCurrencySymbols();
      setSymbols(symbols);
    }
    request();
  }, [api])

  console.log(symbols);

  return <code>{JSON.stringify(symbols)}</code>
}

export { CurrencyConverterPage };
