/* eslint-disable prettier/prettier */
import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from '@/components/Button/button';
import InputField from '@/components/forms/Input/InputField';
import { AuthComponentProps } from '@/pages/auth/forgot-password';
import ErrorText from '../ui/ErrorText';
import { useAppSelector } from '@/store/store';
import { pushNotification } from '@/utils/helpers/pushNotification';
import { selectAuthState } from '@/store/auth/authSlice';

const ResetPassword = ({ formData, handleSubmit, onChange }: AuthComponentProps) => {
  const [password, setPassword] = useState('');
  const [strengthText, setStrengthText] = useState('');
  const [strengthColor, setStrengthColor] = useState('');
  const [level, setLevel] = useState(5);
  const [casePassed, setCasePassed] = useState({
    hasCapatil: false,
    hasSmall: false,
    hasSPecialChar: false,
    hasNumber: false,
    moreThan8: false
  });
  const { user } = useAppSelector(selectAuthState);

  const handlePasswordChange = (e: any) => {
    const { value } = e.target;
    onChange([
      { field: 'confirm_password', value: '' },
      { field: 'password', value }
    ]);
    setPassword(value);
    const newCasePassded = {
      hasCapatil: false,
      hasSmall: false,
      hasSPecialChar: false,
      hasNumber: false,
      moreThan8: false
    };
    let newLevel = 5;
    let newText = '';
    let newColor = '';

    // At least one uppercase letter
    if (/[A-Z]/.test(value)) {
      newLevel--;
      newCasePassded.hasCapatil = true;
    }

    // At least one lowercase letter
    if (/[a-z]/.test(value)) {
      newLevel--;
      newCasePassded.hasSmall = true;
    }

    // At least one number
    if (/[0-9]/.test(value)) {
      newLevel--;
      newCasePassded.hasNumber = true;
    }

    // At least one special char.
    if (/[!@#$%^&*£;~(),.?":{}|<>]/.test(value)) {
      newLevel--;
      newCasePassded.hasSPecialChar = true;
    }

    // Minimum 8 characters
    if (value.length >= 8) {
      newLevel--;
      newCasePassded.moreThan8 = true;
    }

    switch (newLevel) {
      case 5:
      case 4:
      case 3:
        newText = 'Weak';
        newColor = 'text-red-500';
        break;
      case 2:
        newText = 'Fair';
        newColor = 'text-yellow-500';
        break;
      case 1:
        newText = 'Good';
        newColor = 'text-green-300';
        break;
      case 0:
        newText = 'Very Strong';
        newColor = 'text-green-400';
        break;
      default:
        break;
    }

    setLevel(newLevel);
    setStrengthColor(newColor);
    setStrengthText(newText);
    setCasePassed(newCasePassded);
  };

  useEffect(() => {
    onChange({ field: 'email', value: '' });
  }, [user]);

  const passMatch = formData?.password?.length > 0 && formData?.password === formData?.confirm_password;
  return (
    <div>
      <form>
        <InputField
          type='password'
          value={password}
          onChange={handlePasswordChange}
          onCopy={(e: any) => {
            pushNotification({ type: 'warning', duration: 5, message: "Please don't copy password." });
            e.preventDefault();
            return false;
          }}
          onPaste={(e: any) => {
            pushNotification({ type: 'warning', duration: 5, message: 'Please type the password' });
            e.preventDefault();
            return false;
          }}
          className='bg-[#F5F6FA] border-b-2 border-b-[#989797] rounded-none shadow-none'
          placeholder='Enter password...'
        />
        <div className=' mt-2 flex flex-row gap-x-4'>
          <div className={`h-1 rounded-3xl w-[20%] transition duration-300 ease-in-out ${level < 5 ? 'bg-tfn-green' : 'bg-[#989797]'}`}></div>
          <div className={`h-1 rounded-3xl w-[20%] transition duration-300 ease-in-out ${level < 4 ? 'bg-tfn-green' : 'bg-[#989797]'}`}></div>

          <div className={`h-1 rounded-3xl w-[20%] transition duration-300 ease-in-out ${level < 3 ? 'bg-tfn-green' : 'bg-[#989797]'}`}></div>

          <div className={`h-1 rounded-3xl w-[20%] transition duration-300 ease-in-out ${level < 2 ? 'bg-tfn-green' : 'bg-[#989797]'}`}></div>

          <div className={`h-1 rounded-3xl w-[20%] transition duration-300 ease-in-out ${level < 1 ? 'bg-tfn-green' : 'bg-[#989797]'}`}></div>
        </div>
      </form>
      <div className={`${strengthColor}`}>
        <p className='text-right'>{strengthText}</p>
      </div>
      <div className='my-6'>
        <div className='flex flex-col gap-y-3'>
          <label htmlFor='password' className='text-[#989797]'>
            Confirm password
          </label>
          <InputField
            disabled={level !== 0}
            value={formData?.confirm_password}
            type='password'
            name='confirm_password'
            onCopy={(e: any) => {
              pushNotification({ type: 'warning', duration: 5, message: "Please don't copy password." });
              e.preventDefault();
              return false;
            }}
            onPaste={(e: any) => {
              pushNotification({ type: 'warning', duration: 5, message: 'Please re-type the password' });
              e.preventDefault();
              return false;
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange({ field: 'confirm_password', value: e.currentTarget.value })}
            className='bg-[#F5F6FA] border-b-2 border-b-[#989797] rounded-none shadow-none'
            placeholder='Confirm password...'
          />
        </div>
        <ErrorText text='Must contain at least one uppercase letter.' className={`py-1 !animate-none ${casePassed.hasCapatil ? 'opacity-70 line-through !text-green-500' : ''}`} />
        <ErrorText text='Must contain at least one lowercase letter.' className={`py-1 !animate-none ${casePassed.hasSmall ? 'opacity-70 line-through !text-green-500' : ''}`} />
        <ErrorText text='Must contain at least one number.' className={`py-1 !animate-none ${casePassed.hasNumber ? 'opacity-70 line-through !text-green-500' : ''}`} />
        <ErrorText text='Must contain at least one special character.' className={`py-1 !animate-none ${casePassed.hasSPecialChar ? 'opacity-70 line-through !text-green-500' : ''}`} />
        <ErrorText text='Must be at least 8 characters long.' className={`py-1 !animate-none  ${casePassed.moreThan8 ? 'opacity-70 line-through !text-green-500' : ''}`} />
        <ErrorText text='Password Must Match!' className={`py-1 !animate-none  ${passMatch ? 'opacity-70 line-through !text-green-500' : ''}`} />
      </div>

      <Button
        onClick={() => {
          if (!passMatch) return pushNotification({ type: 'error', message: 'Password do not match!' });
          handleSubmit();
        }}
        htmlType='button'
        size='medium'
        className='w-full'>
        Reset Password
      </Button>
    </div>
  );
};

export default ResetPassword;
