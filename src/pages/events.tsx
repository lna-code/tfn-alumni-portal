import { getListAction } from '@/store/commonList/commonListAction';
import { selectCommonListState } from '@/store/commonList/commonListSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React, { useEffect } from 'react';

const Events = () => {
  const dispatch = useAppDispatch();
  const { events } = useAppSelector(selectCommonListState);
  console.log(events);

  useEffect(() => {
    dispatch(getListAction({ list: 'accounts', query: '/accounts' }));
  }, []);

  // if (events.isLoading) return <div>Loading...</div>;
  return <div>Events Page</div>;
};

export default Events;
