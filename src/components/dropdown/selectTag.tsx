import { Select, Space, SelectProps } from 'antd';
import React from 'react';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i
  });
}

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};

const SelectTag: React.FC = () => {
  return (
    <>
      <Space direction='vertical' style={{ width: '100%' }}>
        <Select
          mode='tags'
          placeholder='Please select'
          onChange={handleChange}
          className='w-full h-14 shadow-lg border-white hover:border-tfn-green focus:border-tfn-green rounded-lg pt-3 pb-3'
          options={[{ value: 'Engineer' }, { value: 'Frontend' }, { value: 'Artist' }, { value: 'Teacher' }]}
        />
      </Space>
    </>
  );
};

export default SelectTag;
