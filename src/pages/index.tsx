import Button from '@/components/Button/button';
import { logoutUser, selectAuthState } from '@/store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React from 'react';

const Index = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(selectAuthState);

  console.log(token);

  const logOutUserHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <div className=' flex justify-center items-center flex-col'>
      <h1 className='text-4xl text-tfn-green'>Index Page</h1>
      <h1>Welcome </h1>
      <Button onClick={logOutUserHandler}>Log Out User</Button>
    </div>
  );
};

export default Index;
