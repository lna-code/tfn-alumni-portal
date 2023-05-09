import { Form, Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../Button/button';
import InputField from '../forms/Input/InputField';

interface Props {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  onSave?: () => void;
}

const DropdownMenu: React.FC<Props> = ({ label = 'Personal Information', placeholder, defaultValue, className, onSave }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDropdownToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={classNames('relative', className)}>
      <button className='flex justify-between items-center w-full p-4 font-bold text-gray-800 bg-white border border-gray-300 rounded shadow-md hover:bg-gray-50 focus:outline-none' onClick={handleDropdownToggle}>
        <span>{label}</span>
        <CaretDownOutlined className='ml-2' />
      </button>
      {isExpanded && (
        <div className='absolute top-full left-0 z-10 w-full p-4 mt-2 bg-white border border-gray-300 rounded shadow-md'>
          <Form className='p-4'>
            <Form.Item label='Username'>
              <InputField placeholder={placeholder || 'Enter your username'} defaultValue={defaultValue} />
            </Form.Item>
            <Form.Item label='Email'>
              <InputField placeholder={placeholder || 'Enter your email'} defaultValue={defaultValue} />
            </Form.Item>
            <Form.Item label='Phone Number'>
              <InputField placeholder={placeholder || 'Enter your phone number'} defaultValue={defaultValue} />
            </Form.Item>
            <Form.Item label='Gender'>
              <Select className='border-none'>
                <Select.Option value='male'>Male</Select.Option>
                <Select.Option value='female'>Female</Select.Option>
                <Select.Option value='other'>Other</Select.Option>
              </Select>
            </Form.Item>
            <Button type='primary' onClick={onSave}>
              Save
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
