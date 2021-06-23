import * as React from 'react';
import { CurrencySymbols } from 'src/api/ICurrencyConverterApi';
import { useCurrencyConverterApi } from '../api/useCurrencyConverterApi';

export enum DataStatus {
  Fetching,
  HasResults,
  Error,
}

const useCurrencySymbols = () => {
  const currencyApi = useCurrencyConverterApi();
  const [status, setStatus] = React.useState<DataStatus>(DataStatus.Fetching);
  const [data, setData] = React.useState<CurrencySymbols>({});
  const [error, setError] = React.useState<string>('');

  const fetchCurrencySymbols = React.useCallback(
    async () => {
      setStatus(DataStatus.Fetching);

      try {
        const symbols = await currencyApi.fetchCurrencySymbols();
        setError('');
        setStatus(DataStatus.HasResults);
        setData(symbols);
      } catch (error) {
        setError(error.message);
        setStatus(DataStatus.Error);
        setData({});
      }
    },
    [currencyApi],
  );

  React.useEffect(() => {
    fetchCurrencySymbols();
  }, [fetchCurrencySymbols]);

  return { status, data, error };
};

export { useCurrencySymbols };
