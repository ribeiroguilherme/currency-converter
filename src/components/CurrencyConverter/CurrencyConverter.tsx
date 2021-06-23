import * as React from 'react';
import styles from './CurrencyConverter.module.css';

import { Select, Option } from '../Select';
import { Input } from '../Input';
import { CurrencySymbols } from 'src/api/ICurrencyConverterApi';

type CurrencyConverterProps = {
  symbols: CurrencySymbols;
}

function sortByLabel(firstEl: Option, secondEl: Option) {
  if (firstEl.label < secondEl.label) return -1;
  if (firstEl.label > secondEl.label) return 1;
  return 0;
}

function mapToSelectOption([key, value]: [string, string]) {
  return  { value: key, label: value };
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ symbols }) => {

  const selectorOptions = React.useMemo(() => {
    return Object.entries(symbols).map(mapToSelectOption).sort(sortByLabel);
  }, [symbols]);

  return (
    <>
    <h5 className={styles.title}>Currency Converter</h5>

    <div className={styles.currencyRow}>
      <Input
        className={styles.input}
        aria-label="Currency Amount Field"
        name="currenyAmountField"
        type="number"
      />
      <Select
        className={styles.input}
        aria-label="Currency Type"
        name="currencySelector"
        options={selectorOptions}
      />
    </div>
    <div className={styles.currencyRow}>
      <Input
        className={styles.input}
        aria-label="Currency Amount Field"
        name="currenyAmountField"
        type="number"
      />
      <Select
        className={styles.input}
        aria-label="Currency Type"
        name="currencySelector"
        options={selectorOptions}
      />
    </div>
    </>
  )


}

export { CurrencyConverter };
