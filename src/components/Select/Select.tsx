import * as React from 'react';
import styles from './Select.module.css';

export type Option = { value: string | number; label: string };

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  className,
  onChange,
  ...rest
}) => {
  return (
    <select
      className={`${styles.select} ${className}`}
      name={name}
      onChange={onChange}
      {...rest}
    >
      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};

export { Select };
