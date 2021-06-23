import * as React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage: React.FC = ({ children }) =>
  children ? <p className={styles.errorMessage}>{children}</p> : null;

export { ErrorMessage };
