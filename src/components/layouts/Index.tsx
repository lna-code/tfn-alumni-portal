import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { PageEndpoints } from '@/utils/constants/endpoints.constant';
import AuthLayout from './AuthLayout/AuthLayout';
import Dashboard from './Dashboard/Dashboard';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectConfigState, setAppLoading } from '@/store/config/configSlice';
import { selectAuthState } from '@/store/auth/authSlice';

interface IndexProps {
  children: ReactNode;
}

const Index = ({ children }: IndexProps) => {
  const router = useRouter();
  const { pathname } = router;
  const { appLoading } = useAppSelector(selectConfigState);
  const { token } = useAppSelector(selectAuthState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAppLoading(false));
  }, []);

  if (appLoading) return <div>Loading... </div>;

  if (!token) {
    switch (pathname) {
      case PageEndpoints.login:
      case PageEndpoints.resetPassword:
        return <AuthLayout>{children}</AuthLayout>;
      default:
        router.push(PageEndpoints.login);
        return null;
    }
  } else {
    switch (pathname) {
      case PageEndpoints.home:
        return <div>{children}</div>;
      case PageEndpoints.profile:
        return <Dashboard>{children}</Dashboard>;
      default:
        router.push(PageEndpoints.profile);
        return null;
    }
  }
};

export default Index;
