import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => {
  return (
    <div>
      <h1 className='text-tfn-green text-7xl text-center'> Auth Screens</h1>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
