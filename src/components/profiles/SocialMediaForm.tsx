import React from 'react';
import Button from '../Button/button';
import InputField from '../forms/Input/InputField';

const SocialMediaForm = () => {
  return (
    <div>
      <form className='grid grid-cols-12 md:gap-x-10 gap-y-8 w-full pt-10 lg:px-4 text-base'>
        <div className='md:col-span-6 col-span-12'>
          <p>Linkedln:</p>
          <InputField placeholder='profile url' className='lg:!w-96 !w-full' />
        </div>
        <div className='md:col-span-6 col-span-12'>
          <p>Twitter:</p>
          <InputField placeholder='twitter handle ' className='lg:!w-96 !w-full' />
        </div>
        <div className='md:col-span-6 col-span-12'>
          <p>Instagram:</p>
          <InputField placeholder='Instagram handle' className='lg:!w-96 !w-full' />
        </div>
        <div className='md:col-span-6 col-span-12'>
          <p>Facebook:</p>
          <InputField placeholder='Facebook handle' className='lg:!w-96 !w-full' />
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

export default SocialMediaForm;
