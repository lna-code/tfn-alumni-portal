import { Select } from 'antd';
import React from 'react';

interface Props {
  options: { label: string; value: string }[];
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
}

const CustomSelect: React.FC<Props> = ({ options, placeholder, value, className, onChange }) => {
  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Select placeholder={placeholder} value={value} rootClassName='' onChange={handleOnChange} className={`h-12 w-80 shadow-lg px-3 border-white hover:border-tfn-green focus:border-tfn-green ${className || ''}`}>
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
