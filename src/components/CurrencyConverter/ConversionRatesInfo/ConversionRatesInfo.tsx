import * as React from 'react';
import styles from './ConversionRatesInfo.module.css';

type ConversionRatesInfoProps = {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
};

const ConversionRatesInfo: React.FC<ConversionRatesInfoProps> = ({
  fromCurrency,
  toCurrency,
  rate,
}) => {
  if (!fromCurrency || !toCurrency || !rate) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <p>
        1 {fromCurrency} = {rate.toFixed(5)} {toCurrency}
      </p>
      <p>
        1 {toCurrency} = {(1 / rate).toFixed(5)} {fromCurrency}
      </p>
    </div>
  );
};

export { ConversionRatesInfo };
