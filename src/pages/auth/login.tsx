/* eslint-disable prettier/prettier */
import React, { ChangeEvent } from 'react';
import Button from '@/components/Button/button';
import { useAppDispatch } from '@/store/store';
import { FormDefaultObjecType, useFormValidator } from '@/utils/hooks/FormValidationHook';
import { validationCases } from '@/utils/constants/regrexCases.constant';
import InputField from '@/components/forms/Input/InputField';
import Link from 'next/link';
import { loginUserRequest } from '@/store/auth/AuthActions';
import { PageEndpoints } from '@/utils/constants/endpoints.constant';

const Login = () => {
  const dispatch = useAppDispatch();

  const { validEmail } = validationCases;

  const defaultFormObject: FormDefaultObjecType = {
    email: { value: 'wapemma@yahoo.com', required: true, patterns: [validEmail] },
    password: { value: 'king1234@', required: true }
  };

  const { formData, formErrors, handleFieldChange, validateForm } = useFormValidator(defaultFormObject);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    handleFieldChange({ field: name, value });
  };

  const loginUserHandler = () => {
    if (!validateForm()) return;
    const { email, password } = formData;
    dispatch(loginUserRequest({ email, password }));
  };

  return (
    <form onSubmit={loginUserHandler} className='md:w-fit w-full p-4'>
      <h1 className='text-tfn-green text-2xl font-bold text-center'>Sign in to Dashboard </h1>
      <div className='my-6'>
        <div className='flex flex-col gap-y-3'>
          <label htmlFor='email' className='text-[#989797]'>
            Email
          </label>
          <InputField value={formData?.email} name='email' placeholder='Enter Email' onChange={handleInputChange} />
        </div>
        <p className='text-red-400 text-sm italic'>{formErrors?.email && formErrors?.email}</p>
      </div>
      <div className='my-6'>
        <div className='flex flex-col gap-y-3'>
          <label htmlFor='password' className='text-[#989797]'>
            Password
          </label>
          <InputField type='password' value={formData?.password} name='password' placeholder='Enter Password' onChange={handleInputChange} />
        </div>
        <p className='text-red-400 text-sm italic'>{formErrors?.password && formErrors?.password}</p>
      </div>
      <div className='flex flex-row justify-between text-sm font-bold'>
        <div>
          <input type='checkbox' />{' '}
          <label htmlFor='checkbox' className='text-[#989797]'>
            Remember me
          </label>
        </div>
        <Link href={PageEndpoints.forgotPassword} className='text-tfn-green'>
          Reset Password!
        </Link>
      </div>
      <br />
      <Button htmlType='button' size='medium' className='w-full' onClick={loginUserHandler}>
        Login
      </Button>{' '}
      <br />
    </form>
  );
};

export default Login;
