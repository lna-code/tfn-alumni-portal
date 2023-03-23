import React, { ReactNode } from 'react';
import tfnLogo from '../../../assets/imgs/tfn-logo.png';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => {
  return (
    <div className='relative flex justify-center items-center lg:flex-row flex-col-reverse'>
      <div className='absolute lg:top-6 md:top-4 top-2 lg:left-6 md:left-4 left-2 z-20'>
        <img src={tfnLogo.src} className='md:h-12 ' alt='tfn logo' />
      </div>
      <div className='lg:w-[65%] w-full lg:h-screen lg:px-0 px-5 lg:relative absolute lg:top-0 top-[21rem]'>
        <div className='flex justify-center items-center flex-col lg:min-h-screen min-h-[500px] bg-tfn-powder shadow-xl lg:rounded-none rounded-3xl'>{children}</div>
      </div>
      <div className='lg:w-[45%] w-full lg:h-screen flex lg:py-0 py-24 justify-center items-center flex-col bg-tfn-group bg-no-repeat bg-cover bg-center lg:rounded-b-none rounded-b-3xl'>
        <div className='max-w-sm text-white text-center'>
          <h1 className='md:text-5xl text-4xl font-bold leading-snug'>
            Welcome to <br /> the <br /> Community
          </h1>
          <p className='py-4 font-light md:text-base text-sm'>Be Inspired by Creatives Around the Globe...</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
