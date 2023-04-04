import React, { ReactNode } from 'react';
import TfnLogo from '@/components/ui/TfnLogo';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => {
  return (
    <div className='shadow-2xl rounded-2xl'>
      <div className='relative flex justify-center items-center lg:flex-row flex-col-reverse'>
        <div className='absolute lg:top-6 md:top-5 top-3 lg:left-6 md:left-5 left-3 z-20 '>
          <TfnLogo />
          {/* <Image src={tfnLogo.src} className='lg:h-6 lg:w-60 md:w-56 w-40' width={150} height={100} alt='tfn logo' /> */}
        </div>
        <div className='lg:w-[55%] w-full lg:min-h-full lg:px-0 px-5 lg:relative absolute lg:top-0 md:top-[23rem] top-[21rem]'>
          <div className='flex justify-center items-center flex-col lg:min-h-screen min-h-[500px] bg-tfn-powder shadow-xl lg:rounded-l-3xl lg:rounded-r-none rounded-3xl'>{children}</div>
        </div>
        <div className='lg:w-[45%] w-full lg:h-screen flex lg:py-0 md:py-28 py-24 justify-center items-center flex-col bg-tfn-group bg-no-repeat bg-cover bg-center lg:rounded-none rounded-b-3xl'>
          <div className='max-w-sm text-white text-center'>
            <h1 className='md:text-5xl text-4xl font-bold leading-snug'>
              Welcome to <br /> the <br /> Community
            </h1>
            <p className='py-4 font-light md:text-base text-sm'>Be Inspired by Creatives Around the Globe...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
