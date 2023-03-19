import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import { PageEndpoints } from '@/utils/constants/endpoints.constant';
import AuthLayout from './AuthLayout/AuthLayout';
import Dashboard from './Dashboard/Dashboard';
import Page404 from '@/pages/404';

interface IndexProps {
  children: ReactNode;
}

const Index = ({ children }: IndexProps) => {
  const router = useRouter();
  const [isLoggedIn, setIsloggedIn] = useState(true);
  const [appLoading, setAppLoading] = useState(true);
  const { pathname } = router;

  useEffect(() => {
    console.log(setIsloggedIn);
    setAppLoading(false);
  }, []);

  if (appLoading) return <div>Loading..... </div>;

  if (!isLoggedIn) {
    switch (pathname) {
      case PageEndpoints.home:
        return <div>{children}</div>;
      case PageEndpoints.login:
      case PageEndpoints.resetPassword:
        return <AuthLayout>{children}</AuthLayout>;
      default:
        router.push(PageEndpoints.home);
        return null;
    }
  } else {
    switch (pathname) {
      case PageEndpoints.home:
        return <div>{children}</div>;
      case PageEndpoints.profile:
        return <Dashboard>{children}</Dashboard>;
      default:
        return <Page404 />;
    }
  }
};

export default Index;
