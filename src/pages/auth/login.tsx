import React, { ChangeEvent } from 'react';
import Button from '@/components/Button/button';
import { loginUser } from '@/store/auth/authSlice';
import { useAppDispatch } from '@/store/store';
import { PageEndpoints } from '@/utils/constants/endpoints.constant';
import { useRouter } from 'next/router';
import { FormDefaultObjecType, useFormValidator } from '@/utils/hooks/FormValidationHook';
import { validationCases } from '@/utils/constants/regrexCases.constant';
import InputField from '@/components/forms/Input/InputField';

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
      <h1>Login Screen </h1>
      <div className='my-6'>
        <InputField name='email' placeholder='Enter Email' onChange={handleInputChange} />
        <p className='text-red-400 text-sm italic'>{formErrors?.email && formErrors?.email}</p>
      </div>
      <div className='my-6'>
        <InputField name='password' placeholder='Enter Password' onChange={handleInputChange} />
        <p className='text-red-400 text-sm italic'>{formErrors?.password && formErrors?.password}</p>
      </div>
      <Button htmlType='button' size='large' onClick={loginUserHandler}>
        Login User
      </Button>{' '}
      <br />
    </form>
  );
};

export default Login;
