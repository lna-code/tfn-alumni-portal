import Button from '@/components/Button/button';
import { logoutUser, selectAuthState } from '@/store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React from 'react';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuthState);

  const logOutUserHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h1 className='text-2xl'> Profile Page</h1>
      <p>User: {user?.name}</p>
      <p>Role: {user?.role}</p>
      <Button onClick={logOutUserHandler}>Log Out User</Button>
    </div>
  );
};

export default ProfilePage;
