import Link from 'next/link';
import React from 'react';

interface TfnLogoProps {
  className?: string;
}

const TfnLogo = ({ className = '' }: TfnLogoProps) => {
  return (
    <Link passHref href={'/'}>
      <span className={`relative font-bold md:text-[1.7rem] text-xl text-start w-full text-tfn-green select-none cursor-pointer ${className}`}>
        TEACH<span className='text-tfn-light-green'>FOR</span>NIGERIA
      </span>
    </Link>
  );
};

export default TfnLogo;
