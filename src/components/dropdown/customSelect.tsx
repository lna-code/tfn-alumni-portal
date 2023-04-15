import { Select } from 'antd';
import React from 'react';

interface Props {
  options: { label: string; value: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CustomSelect: React.FC<Props> = ({ options, placeholder, value, onChange }) => {
  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Select placeholder={placeholder} value={value} onChange={handleOnChange} className='w-full'>
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default CustomSelect;