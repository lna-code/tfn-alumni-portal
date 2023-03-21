import React from 'react';
import { Input } from 'antd';

interface InputFieldProps {
  placeholder: string;
  className?: string;
  [others: string]: unknown;
}

const InputField = ({ placeholder, className, ...rest }: InputFieldProps) => {
  return <Input className={`h-12 w-80 hover:border-tfn-green focus:border-tfn-green ${className || ''}`} placeholder={placeholder} {...rest} />;
};

export default InputField;
