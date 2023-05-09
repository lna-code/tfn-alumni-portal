import React from 'react';
import InputField from '../forms/Input/InputField';
import Button from '../Button/button';

const WorkEducationform = () => {
  return (
    <div>
      <form className='grid grid-cols-12 md:gap-x-10 gap-y-8 w-full pt-10 lg:px-4 text-base'>
        <div className='md:col-span-6 col-span-12 lg:w-[69%] '>
          <p>Work History:</p>
          <InputField className='lg:!w-96 !w-full' placeholder={''} />
          <button className='float-right border-2 border-tfn-green lg:w-[35%] mt-3 h-9 text-md text-tfn-green font-normal rounded-md text-center p-1'>+ Add more</button>
        </div>
        <div className='md:col-span-6 col-span-12 lg:w-[69%]'>
          <p>Educational Background:</p>
          <InputField className='lg:!w-96 !w-full' placeholder={''} />
          <button className='float-right border-2 border-tfn-green lg:w-[35%] mt-3 h-9 text-md text-tfn-green font-normal rounded-md text-center p-1'>+ Add more</button>
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

export default WorkEducationform;
