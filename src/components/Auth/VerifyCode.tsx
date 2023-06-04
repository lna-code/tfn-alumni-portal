import { AuthComponentProps } from '@/pages/auth/forgot-password';
import { setChangePasswordPage } from '@/store/auth/authSlice';
import { ChangePasswordPageEnum } from '@/store/auth/authType';
import { useAppDispatch } from '@/store/store';
import React, { ChangeEvent } from 'react';
import Button from '../Button/button';

const VerifyCode = ({ formData, handleSubmit, onChange }: AuthComponentProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className='text-center w-full'>
        <h1 className='text-tfn-green font-bold text-2xl'>Password Reset</h1>
        <p className='text-[#989797] text-base leading-5 mt-4'>
          We sent an email to <b className='text-[#121212]'>{formData?.email || ''}</b>
        </p>
        <form className='mt-10 mb-5 flex justify-center items-center flex-col'>
          <div className='grid grid-cols-4 gap-4'>
            {['code1', 'code2', 'code3', 'code4'].map((codeName) => (
              <input
                key={codeName}
                name={codeName}
                value={formData[codeName]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange({ field: codeName, value: e.currentTarget.value })}
                type='tel'
                max={1}
                className='h-[72px] w-[65px] col-span-1 rounded-lg align-center shadow-2xl text-[40px] text-center font-bold focus:outline-tfn-light-green'
                maxLength={1}
              />
            ))}
          </div>
          <Button onClick={handleSubmit} className='w-[100%] 2xl:w-[438px] md:w-[438px] h-[52px] rounded-lg mt-8'>
            Continue
          </Button>
        </form>
        <div className='text-[#989797] '>
          <div>
            Didn't recieve the mail?{' '}
            <p className='cursor-pointer pt-2 animate-pulse hover:text-tfn-green text-bold' onClick={() => dispatch(setChangePasswordPage(ChangePasswordPageEnum.forget))}>
              Click here to resend code.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VerifyCode;
