import Button from '@/components/Button/button';
import { loginUser } from '@/store/auth/authSlice';
import { useAppDispatch } from '@/store/store';
import { PageEndpoints } from '@/utils/constants/endpoints.constant';
import { useRouter } from 'next/router';
import React from 'react';

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const loginUserHandler = () => {
    dispatch(loginUser({ email: 'test.test@yahoo.com', password: '123456' }));
    router.push(PageEndpoints.profile);
  };

  return (
    <div>
      <h1>Login Screen </h1>
      <Button size='large' onClick={loginUserHandler}>
        Login User
      </Button>{' '}
      <br />
    </div>
  );
};

export default Login;
