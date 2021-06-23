import * as React from 'react';
import { Card } from '../components/Card';
import { CurrencyConverter } from '../components/CurrencyConverter';
import styles from './CurrencyConverterPage.module.css';

const CurrencyConverterPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Card className={styles.currencyConverterCard}>
        <CurrencyConverter />
      </Card>
    </div>
  );
};

export { CurrencyConverterPage };
