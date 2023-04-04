import React from 'react';

interface TfnLogoProps {
  className?: string;
}

const TfnLogo = ({ className = '' }: TfnLogoProps) => {
  return (
    <span className={`relative font-bold md:text-[1.7rem] text-xl text-start w-full text-tfn-green ${className}`}>
      TEACH<span className='text-tfn-light-green'>FOR</span>NIGERIA
    </span>
  );
};

export default TfnLogo;
