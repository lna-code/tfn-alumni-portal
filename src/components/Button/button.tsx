import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Button as AntButton } from 'antd';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

const Button = ({ children, variant = 'primary', size = 'medium', onClick }: ButtonProps) => {
  const buttonClasses = classNames('rounded-', {
    'bg-tfn-green hover:bg-white text-white hover:text-tfn-green hover:border-tfn-green focus:border-tfn-green': variant === 'primary',
    'bg-white hover:bg-tfn-green text-tfn-green hover:text-white border-tfn-green': variant === 'secondary',
    'text-xs font-bold  px-2 py-1': size === 'small',
    'text-sm font-bold px-4 py-2': size === 'medium',
    'text-lg font-bold px-6 py-3': size === 'large'
  });

  return (
    <AntButton className={buttonClasses} onClick={onClick}>
      {children}
    </AntButton>
  );
};

export default Button;
