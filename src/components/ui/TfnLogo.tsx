import Link from 'next/link';
import React from 'react';
interface TfnLogoProps {
  className?: string;
}

const TfnLogo = ({ className = '' }: TfnLogoProps) => {
  return (
    <Link passHref href={'/'}>
      <img src={'/logo.png'} alt='Teach For Nigeria' className={`relative w-full select-none cursor-pointer ${className}`} />
    </Link>
  );
};

export default TfnLogo;
