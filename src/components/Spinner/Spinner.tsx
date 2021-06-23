import React from 'react';
import styles from './Spinner.module.css';

type SpinnerProps = {
  color?: string;
  size?: 'medium';
  className?: string;
};

enum SpinnerSizes {
  medium = '32',
}

const Spinner: React.FC<SpinnerProps> = ({
  color = '#0abf53',
  size = 'medium',
  className = '',
}) => {
  return (
    <div className={`${styles.spinner} ${className}`}>
      <svg
        width={SpinnerSizes[size]}
        height={SpinnerSizes[size]}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9163 8C15.9163 8.61701 15.4162 9.1172 14.7991 9.1172C14.1821 9.1172 13.6819 8.61701 13.6819 8C13.6819 4.86177 11.1379 2.31774 7.99967 2.31774C4.86145 2.31774 2.31741 4.86177 2.31741 8C2.31741 11.1382 4.86145 13.6823 7.99967 13.6823C8.61669 13.6823 9.11688 14.1825 9.11688 14.7995C9.11688 15.4165 8.61669 15.9167 7.99967 15.9167C3.62742 15.9167 0.0830078 12.3723 0.0830078 8C0.0830078 3.62775 3.62742 0.0833333 7.99967 0.0833333C12.3719 0.0833333 15.9163 3.62775 15.9163 8Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export { Spinner };
