import React from 'react';
import InputField from '../forms/Input/InputField';
import CustomSelect from '../dropdown/customSelect';
import Button from '../Button/button';

const PersonalInfoForm = () => {
  return (
    <div>
      <form className='grid grid-cols-12 md:gap-x-10 gap-y-8 w-full pt-10 lg:px-4 text-base'>
        <div className='md:col-span-6 col-span-12'>
          <p>Full Name:</p>
          <InputField placeholder='Enter Full Name' className='lg:!w-96 !w-full' />
        </div>
        <div className='md:col-span-6 col-span-12'>
          <p>Phone:</p>
          <InputField placeholder='Enter Phone ' className='lg:!w-96 !w-full' />
        </div>
        <div className='md:col-span-6 col-span-12'>
          <p>Email:</p>
          <InputField placeholder='Enter Email' className='lg:!w-96 !w-full' />
        </div>
        <div className='md:col-span-6 col-span-12'>
          <p>Gender:</p>
          <CustomSelect
            value={undefined}
            className='lg:!w-96 !w-full'
            options={[
              { value: 'm', label: 'Male' },
              { value: 'f', label: 'Female' }
            ]}
            placeholder='Please Select'
          />
        </div>
        <div className='col-span-12 flex justify-end pt-8'>
          <Button htmlType='Submit' className='!px-10'>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
