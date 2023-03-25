import React from 'react';
import { Input } from 'antd';

interface InputFieldProps {
  placeholder: string;
  className?: string;
  [others: string]: any;
}

const InputField = ({ placeholder, className, ...others }: InputFieldProps) => {
  return <Input className={`h-12 w-80 shadow-lg px-3 border-white hover:border-tfn-green focus:border-tfn-green ${className || ''} `} placeholder={placeholder} {...others} />;
};

export default InputField;
