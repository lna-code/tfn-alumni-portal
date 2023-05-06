import React from 'react';
import InputField from '../forms/Input/InputField';
import Button from '../Button/button';
import SelectTag from '../dropdown/selectTag';

const SkillsForm = () => {
  return (
    <div>
      <form className='w-full text-base '>
        <div className='w-full'>
          <p>Add Skills</p>
          <SelectTag />
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

export default SkillsForm;
