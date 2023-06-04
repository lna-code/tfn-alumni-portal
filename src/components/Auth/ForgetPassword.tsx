import { AuthComponentProps } from '@/pages/auth/forgot-password';
import React, { ChangeEvent } from 'react';
import InputField from '../forms/Input/InputField';
import Button from '../Button/button';
import ErrorText from '../ui/ErrorText';

const ForgetPassword = ({ formData, formErrors, handleSubmit, onChange }: AuthComponentProps) => {
  return (
    <div className='w-full'>
      <form className='w-full '>
        <h1 className='text-tfn-green text-2xl font-bold text-center'>Forgot Password? </h1>
        <br />
        <p className='text-base text-[#989797] text-center '>No worries, we’ll send you reset instructions</p>
        <br />
        <div className='my-6'>
          <div className='flex flex-col gap-y-3'>
            <label htmlFor='email' className='text-[#989797]'>
              Email
            </label>
            <InputField
              name='email'
              value={formData?.email}
              placeholder='Enter Email'
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChange({ field: 'email', value: e.currentTarget.value });
              }}
            />
          </div>
          <ErrorText text={formErrors?.email} />
        </div>

        <Button onClick={handleSubmit} htmlType='button' size='medium' className='w-full'>
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ForgetPassword;
