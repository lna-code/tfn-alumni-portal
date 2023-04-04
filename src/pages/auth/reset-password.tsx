import React from 'react';
import Button from '@/components/Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ResetPassword = () => {
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-tfn-green font-bold text-2xl'>Password Reset</h1>
        <p className='text-[#989797] text-base leading-5 mt-4'>
          We sent an email to <b className='text-[#121212]'>tadealumni@gmail.com</b>
        </p>
        <form action='#' className='mt-10 mb-5'>
          <input type='tel' className='h-[72px] w-[65px] rounded-lg align-center mr-5  shadow-2xl text-[40px] text-center font-bold' maxLength={1} />
          <input type='tel' className='h-[72px] w-[65px] rounded-lg align-center mr-5 shadow-2xl text-[40px] text-center font-bold ' maxLength={1} />
          <input type='tel' className='h-[72px] w-[65px] rounded-lg align-center mr-5 shadow-2xl text-[40px] text-center font-bold ' maxLength={1} />
          <input type='tel' className='h-[72px] w-[65px] rounded-lg align-center shadow-2xl text-[40px] text-center font-bold' maxLength={1} />
          <div>
            <Link href='/'>
              <Button className='w-[100%] 2xl:w-[438px] md:w-[438px] h-[52px] rounded-lg mt-8'>Continue</Button>
            </Link>
          </div>
        </form>
        <div className='text-[#989797] '>
          <p className='sm:hidden'>
            Didn't recieve the mail?{' '}
            <Link href='/' className='font-bold'>
              Click here to proceed
            </Link>
          </p>
          <p className='mt-5'>
            <Link href='/'>
              <FontAwesomeIcon icon={faArrowLeft} className='mr-6 font-thin' />
              <b>Back to sign in</b>
            </Link>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ResetPassword;
