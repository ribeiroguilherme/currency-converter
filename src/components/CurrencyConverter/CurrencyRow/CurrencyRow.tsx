import * as React from 'react';
import { Select } from '../../Select';
import { Input } from '../../Input';
import styles from './CurrencyRow.module.css';

type CurrencyRowProps = {
  inputValue: number | string;
  currencyValue: string;
  currencySymbols: string[];
  onChangeInputValue(event: React.ChangeEvent<HTMLInputElement>): void;
  onChangeCurrency(event: React.ChangeEvent<HTMLSelectElement>): void;
};

function mapToSelectOption(symbol: string) {
  return { value: symbol, label: symbol };
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({
  inputValue,
  currencyValue,
  currencySymbols,
  onChangeInputValue,
  onChangeCurrency,
}) => {

  const selectorOptions = React.useMemo(() => {
    return currencySymbols.map(mapToSelectOption) || [];
  }, [currencySymbols]);

  return (
    <div className={styles.row}>
      <Input
        className={styles.input}
        aria-label="Currency Amount Field"
        name="currenyAmountField"
        type="number"
        value={inputValue}
        onChange={onChangeInputValue}
      />
      <Select
        className={styles.input}
        aria-label="Currency Type"
        value={currencyValue}
        onChange={onChangeCurrency}
        options={selectorOptions}
      />
    </div>
  );
};

export { CurrencyRow };
