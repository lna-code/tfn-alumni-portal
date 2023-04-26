/* eslint-disable prettier/prettier */
import React, { ChangeEvent } from 'react';
import Button from '@/components/Button/button';
import { loginUser } from '@/store/auth/authSlice';
import { useAppDispatch } from '@/store/store';
import { PageEndpoints } from '@/utils/constants/endpoints.constant';
import { useRouter } from 'next/router';
import { FormDefaultObjecType, useFormValidator } from '@/utils/hooks/FormValidationHook';
import { validationCases } from '@/utils/constants/regrexCases.constant';
import InputField from '@/components/forms/Input/InputField';
import Link from 'next/link';

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { validEmail } = validationCases;

  const defaultFormObject: FormDefaultObjecType = {
    email: { value: '', required: true, patterns: [validEmail] },
    password: { value: '', required: true }
  };

  const { formData, formErrors, handleFieldChange, validateForm } = useFormValidator(defaultFormObject);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    handleFieldChange({ field: name, value });
  };

  const loginUserHandler = () => {
    if (!validateForm()) return;
    dispatch(loginUser({ email: formData?.email, password: formData?.password }));
    router.replace(PageEndpoints.home);
  };

  return (
    <form onSubmit={loginUserHandler}>
      <h1 className='text-tfn-green text-2xl font-bold text-center'>Sign in to Dashboard </h1>
      <div className='my-6'>
        <div className='flex flex-col gap-y-3'>
          <label htmlFor="email" className='text-[#989797]'>Email</label>
          <InputField name='email' placeholder='Enter Email' onChange={handleInputChange} />
        </div>
        <p className='text-red-400 text-sm italic'>{formErrors?.email && formErrors?.email}</p>
      </div>
      <div className='my-6'>
        <div className='flex flex-col gap-y-3'>
          <label htmlFor="password" className='text-[#989797]'>Password</label>
          <InputField name='password' placeholder='Enter Password' onChange={handleInputChange} />
        </div>
        <p className='text-red-400 text-sm italic'>{formErrors?.password && formErrors?.password}</p>
      </div>
      <div className='flex flex-row justify-between text-sm font-bold'>
        <div><input type='checkbox'/> <label htmlFor='checkbox' className='text-[#989797]'>Remember me</label></div>
        <Link href="./forgot-password" className='text-tfn-green'>
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
