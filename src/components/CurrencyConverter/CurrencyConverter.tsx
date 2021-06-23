import * as React from 'react';
import { useExchangeRatesApi } from '../../api/ExchangeRatesApi/useExchangeRatesApi';
import { ConversionRatesInfo } from './ConversionRatesInfo';
import { CurrencyRow } from './CurrencyRow';
import { ErrorMessage } from './ErrorMessage';
import { Spinner } from '../Spinner';
import styles from './CurrencyConverter.module.css';

const CurrencyConverter: React.FC = () => {
  const exchangeRatesApi = useExchangeRatesApi();
  const [symbols, setSymbols] = React.useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = React.useState<string>('');
  const [toCurrency, setToCurrency] = React.useState<string>('');
  const [isEdittingUsingFromInput, setIsEdittingUsingFromInput] = React.useState<boolean>(true);
  const [amount, setAmount] = React.useState<number>(1);
  const [rates, setRates] = React.useState<Record<string, number>>({});
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    async function fetchInitialData() {
      const data = await exchangeRatesApi.fetchLatestRates();

      const symbols = Object.keys(data.rates);

      setSymbols(symbols);
      setFromCurrency(data.base);
      setToCurrency(symbols[0]);
      setRates(data.rates);
    }
    fetchInitialData();
  }, [exchangeRatesApi]);

  const updateRates = React.useCallback(
    async (baseCurrency, toCurrency) => {
      const data = await exchangeRatesApi.fetchLatestRates(baseCurrency, [toCurrency]);
      setRates(data.rates);
    },
    [exchangeRatesApi],
  );

  const handleOnChangeFromAmount = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsEdittingUsingFromInput(true);
      setAmount(parseFloat(event.target.value));
    },
    [],
  );

  const handleOnChangeToAmount = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEdittingUsingFromInput(false);
    setAmount(parseFloat(event.target.value));
  }, []);

  const handleOnSelectFromCurrency = React.useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      try {
        await updateRates(event.target.value, toCurrency);
        setFromCurrency(event.target.value);
        setError('');
      } catch (error) {
        setFromCurrency(fromCurrency);
        setError(error.message);
      }
    },
    [updateRates, fromCurrency, toCurrency],
  );

  const handleOnSelectToCurrency = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setToCurrency(event.target.value);
    },
    [],
  );

  const { fromValue, toValue, currentRate } = React.useMemo(() => {
    const currentRate = rates[toCurrency];

    if (isEdittingUsingFromInput) {
      return {
        toValue: (amount * currentRate).toFixed(2),
        fromValue: amount,
        currentRate,
      };
    }
    return {
      fromValue: (amount / currentRate).toFixed(2),
      toValue: amount,
      currentRate,
    };
  }, [rates, toCurrency, isEdittingUsingFromInput, amount]);

  const isLoading = !fromCurrency || !toCurrency || !rates;
  if (isLoading) {
    return <Spinner className={styles.loader} />;
  }

  return (
    <>
      <h3 className={styles.title}>Currency Converter</h3>

      <CurrencyRow
        inputValue={fromValue}
        currencyValue={fromCurrency}
        currencySymbols={symbols}
        onChangeInputValue={handleOnChangeFromAmount}
        onChangeCurrency={handleOnSelectFromCurrency}
      />

      <CurrencyRow
        inputValue={toValue}
        currencyValue={toCurrency}
        currencySymbols={symbols}
        onChangeInputValue={handleOnChangeToAmount}
        onChangeCurrency={handleOnSelectToCurrency}
      />

      <ConversionRatesInfo fromCurrency={fromCurrency} toCurrency={toCurrency} rate={currentRate} />

      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export { CurrencyConverter };
