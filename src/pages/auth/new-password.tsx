/* eslint-disable prettier/prettier */
import Button from '@/components/Button/button';
import InputField from '@/components/forms/Input/InputField';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [strength1, setStrength1] = useState(false);
  const [strength2, setStrength2] = useState(false);
  const [strength3, setStrength3] = useState(false);
  const [strength4, setStrength4] = useState(false);
  const [strengthText, setStrengthText] = useState('');
  const [strengthColor, setStrengthColor] = useState('');

  const handlePasswordChange = (e: any) => {
    const { value } = e.target;
    setPassword(value);

    // Update displayed sentence based on password strength
    if (value.length >= 3) {
      setStrength1(true);
      setStrengthText('Weak');
      setStrengthColor('red-500');
    } else {
      setStrength1(false);
    }

    if (value.length >= 6) {
      setStrength2(true);
      setStrengthText('Fair');
      setStrengthColor('tfn-green');
    } else {
      setStrength2(false);
    }

    if (value.length >= 9) {
      setStrength3(true);
      setStrengthText('Good');
      setStrengthColor('tfn-green');
    } else {
      setStrength3(false);
    }

    if (value.length >= 12) {
      setStrength4(true);
      setStrengthText('Very Strong');
      setStrengthColor('tfn-green');
    } else {
      setStrength4(false);
    }
  };

  return (
    <>
      <form>
        <InputField type='password' value={password} onChange={handlePasswordChange} className='bg-[#F5F6FA] border-b-2 border-b-[#989797] rounded-none shadow-none' placeholder='&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;' />
        <div className=' mt-2 flex flex-row gap-x-4'>
          <div className={`h-1 rounded-3xl w-[25%] transition duration-300 ease-in-out ${strength1 ? 'bg-tfn-green' : 'bg-[#989797]'}`}></div>

          <div className={`h-1 rounded-3xl w-[25%] transition duration-300 ease-in-out ${strength2 ? 'bg-tfn-green' : 'bg-[#989797]'}`}></div>

          <div className={`h-1 rounded-3xl w-[25%] transition duration-300 ease-in-out ${strength3 ? 'bg-tfn-green' : 'bg-[#989797]'}`}></div>

          <div className={`h-1 rounded-3xl w-[25%] transition duration-300 ease-in-out ${strength4 ? 'bg-tfn-green' : 'bg-[#989797]'}`}></div>
        </div>

        <div className={` text-${strengthColor}`}>
          <p className='float-right'>{strengthText}</p>
        </div>
      </form>

      <div className='my-6'>
        <div className='flex flex-col gap-y-3'>
          <label htmlFor='password' className='text-[#989797]'>
            Confirm password
          </label>

          <InputField type='password' name='password' className='bg-[#F5F6FA] border-b-2 border-b-[#989797] rounded-none shadow-none' placeholder='&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;' />
        </div>
      </div>

      <Link href='/'>
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
    </>
  );
};

export default SetPassword;
