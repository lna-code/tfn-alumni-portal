/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { PageEndpoints } from '@/utils/constants/endpoints.constant';
import AuthLayout from './AuthLayout/AuthLayout';
import Dashboard from './Dashboard/Dashboard';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setAppLoading } from '@/store/config/configSlice';
import { selectAuthState } from '@/store/auth/authSlice';

interface IndexProps {
  children: ReactNode;
}

const Index = ({ children }: IndexProps) => {
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector(selectAuthState);

  useEffect(() => {
    dispatch(setAppLoading({ state: false, text: '' }));
  }, []);

  if (!isLoggedIn) {
    switch (pathname) {
      case PageEndpoints.login:
      case PageEndpoints.forgotPassword:
      case PageEndpoints.resetPassword:
      case PageEndpoints.newPassword:
        return <AuthLayout>{children}</AuthLayout>;
      default:
        router.push(PageEndpoints.login);
        return null;
    }
  } else {
    switch (pathname) {
      case PageEndpoints.login:
      case PageEndpoints.forgotPassword:
      case PageEndpoints.resetPassword:
      case PageEndpoints.newPassword:
        router.push(PageEndpoints.home);
        return null;
      default:
        return <Dashboard>{children}</Dashboard>;
    }
  }
};

export default Index;
