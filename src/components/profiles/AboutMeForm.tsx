import React from 'react';
import InputField from '../forms/Input/InputField';
import Button from '../Button/button';

const AboutMeForm = () => {
  return (
    <div>
      <form className='grid grid-cols-12 md:gap-x-10 gap-y-8 w-full pt-10 lg:px-4 text-base'>
        <div className='md:col-span-6 col-span-12'>
          <div className='flex flex-col gap-y-3'>
            <div>
              <p>Your bio</p>
              <p className='font-normal text-sm'>Write a short introduction</p>
            </div>
            <div>
              <textarea placeholder='Add a short bio...' className='lg:!w-96 !w-full h-[140px] shadow-lg px-3 border-white hover:border-tfn-green focus:border-tfn-green' />
            </div>
          </div>
          <p className='sm:ml-44 lg:ml-60 text-[#717971] text-sm'>400 characters left</p>
        </div>
        <div className='md:col-span-6 col-span-12'>
          <p>Interest:</p>
          <InputField className='lg:!w-96 !w-full' placeholder={''} />

          <div className='mt-6'>
            <p>Goals:</p>
            <InputField placeholder={''} className='lg:!w-96 !w-full' />
          </div>
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

export default AboutMeForm;
