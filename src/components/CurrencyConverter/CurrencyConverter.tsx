import * as React from 'react';
import { useCurrencyConverterApi } from '../../api/useCurrencyConverterApi';
import { ConversionRatesInfo } from './ConversionRatesInfo';
import { CurrencyRow } from './CurrencyRow';

import styles from './CurrencyConverter.module.css';

const CurrencyConverter: React.FC = () => {
  const currencyApi = useCurrencyConverterApi();
  const [symbols, setSymbols] = React.useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = React.useState<string>('');
  const [toCurrency, setToCurrency] = React.useState<string>('');
  const [isEdittingUsingFromInput, setIsEdittingUsingFromInput] = React.useState<boolean>(true);
  const [amount, setAmount] = React.useState<number>(1);
  const [rates, setRates] = React.useState<Record<string, number>>({});

  React.useEffect(() => {
    async function fetchData() {
      const data = await currencyApi.fetchLatestRates();

      const symbols = Object.keys(data.rates);

      setSymbols(symbols);
      setFromCurrency(data.base);
      setToCurrency(symbols[0]);
      setRates(data.rates);
    }
    fetchData();
  }, [currencyApi]);

  // const updateRates = React.useCallback(async (baseCurrency, toCurrency) => {
  //   const data = await currencyApi.fetchLatestRates(fromCurrency, [toCurrency]);
  //   setRate(data.rates[toCurrency]);
  // }, [currencyApi, fromCurrency, toCurrency]);

  React.useEffect(() => {
    async function fetchData() {
      const data = await currencyApi.fetchLatestRates(fromCurrency, [toCurrency]);
      setRates(data.rates);
    }

    if (fromCurrency && toCurrency) {
      fetchData();
    }
  }, [currencyApi, fromCurrency, toCurrency]);

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
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFromCurrency(event.target.value);
    },
    [],
  );

  const handleOnSelectToCurrency = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setToCurrency(event.target.value);
    },
    [],
  );

  let fromValue, toValue;
  const currentRate = rates[toCurrency];

  if (isEdittingUsingFromInput) {
    toValue = (amount * currentRate).toFixed(2);
    fromValue = amount;
  } else {
    fromValue = (amount / currentRate).toFixed(2);
    toValue = amount;
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
    </>
  );
};

export { CurrencyConverter };
