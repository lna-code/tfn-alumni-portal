/* eslint-disable prettier/prettier */
import React from 'react'
import Button from '@/components/Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import InputField from '@/components/forms/Input/InputField';
import Link from 'next/link';

const ForgotPassword = () => {
  return (
    <div>
      <form>
        <h1 className='text-tfn-green text-2xl font-bold text-center'>Forgot Password? </h1><br />
        <p className='text-base text-[#989797] text-center '>No worries, we’ll send you reset instructions</p>
        <br />
        <div className='my-6'>
          <div className='flex flex-col gap-y-3'>
            <label htmlFor="email" className='text-[#989797]'>Email</label>
            <InputField name='email' placeholder='Enter Email' />
          </div>
        </div>
        
        <Link href='./reset-password'>
          <Button htmlType='button' size='medium' className='w-full'>
            Reset Password 
          </Button>
        </Link>
        
        <p className='text-center mt-5'>
          <Link href='/' className='text-[#989797] justify-center'>
            <FontAwesomeIcon icon={faArrowLeft} className='mr-6 font-thin' />
            <b>Back to sign in</b>
          </Link>
        </p>
      </form>
        
      
    </div>
  );
};

export default ForgotPassword;
