import React from 'react';
import { Input } from 'antd';

interface InputFieldProps {
  placeholder: string;
  className?: string;
  [others: string]: unknown;
}

const InputField = ({ placeholder, className, ...others }: InputFieldProps) => {
  return <Input className={`h-12 md:w-80 w-full shadow-lg px-3 border-white hover:border-tfn-green focus:outline-tfn-light-green ${className || ''} `} placeholder={placeholder} {...others} />;
};

export default InputField;
