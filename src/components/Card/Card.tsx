import * as React from 'react';
import styles from './Card.module.css';

type CardProps = {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, children, ...rest }) => {
  return (
    <div className={`${styles.card} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export { Card };
