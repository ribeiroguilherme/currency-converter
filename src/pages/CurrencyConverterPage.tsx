import * as React from 'react';
import { useCurrencySymbols, DataStatus } from './useCurrencySymbols';
import { Spinner } from '../components/Spinner';
import { Card } from '../components/Card';
import { CurrencyConverter } from '../components/CurrencyConverter';

import styles from './CurrencyConverterPage.module.css';

const CurrencyConverterPage = () => {
  const { status, data, error} = useCurrencySymbols();

  console.log(status, data, error);

  return (
    <div className={styles.pageContainer}>
      <Card className={styles.currencyConverterCard}>
        { status === DataStatus.Fetching && <Spinner className={styles.loader} />}
        { status === DataStatus.Error && <div>{error}</div> }
        { status === DataStatus.HasResults && <CurrencyConverter symbols={data} />}
      </Card>
    </div>
  );
};

export { CurrencyConverterPage };
