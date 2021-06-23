import * as React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ name, className, ...rest }) => {
  return (
    <input className={`${styles.input} ${className}`} name={name} {...rest} />
  );
};

export { Input };
