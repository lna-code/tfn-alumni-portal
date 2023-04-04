import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Button as AntButton } from 'antd';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  [others: string]: unknown;
};

const Button = ({ children, variant = 'primary', size = 'medium', onClick, className, ...rest }: ButtonProps) => {
  const buttonClasses = classNames(
    'rounded',
    'hover:shadow-2xl hover:scale-105',
    'active:scale-95 transition-all duration-150',
    {
      'bg-tfn-green hover:bg-white text-white hover:text-tfn-green hover:border-tfn-green focus:border-tfn-green': variant === 'primary',
      'bg-white hover:bg-tfn-green text-tfn-green hover:text-white border-tfn-green': variant === 'secondary',
      'text-xs font-bold  px-6 h-10': size === 'small',
      'text-sm font-bold px-8 h-12': size === 'medium',
      'text-lg font-bold px-10 h-14': size === 'large'
    },
    className
  );

  return (
    <AntButton className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </AntButton>
  );
};

export default Button;
