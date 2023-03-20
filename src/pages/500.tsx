import Link from 'next/link';
import React from 'react';
import { Button } from 'antd';

const Page500 = () => {
  return (
    <div className='flex justify-center items-center flex-col h-screen space-y-8'>
      <h1 className='text-7xl text-tfn-green font-semibold'> TFN Custom 500 Page</h1>
      <Link href='/'>
        <Button className='bg-tfn-green px-20 h-12 text-white font-bold hover:!text-white'>Go Home</Button>
      </Link>
    </div>
  );
};

export default Page500;
