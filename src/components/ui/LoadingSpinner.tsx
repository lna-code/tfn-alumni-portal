import React from 'react';
import { Modal } from 'antd';
import loadingImg from '../../assets/imgs/loading.gif';

interface LoadingSpinnerProps {
  open?: boolean;
  text?: string;
}

const LoadingSpinner = ({ open = true, text = 'Loading...' }: LoadingSpinnerProps) => {
  return (
    <Modal open={open} okButtonProps={{ style: { display: 'none' } }} cancelButtonProps={{ style: { display: 'none' } }} closable={false} className='!w-[300px] !h-[300px]'>
      <div className='flex items-center flex-col'>
        <img src={loadingImg.src} alt='loading spinner' />
        <p className='animate-pulse text-lg italic'>{text}</p>
      </div>
    </Modal>
  );
};

export default LoadingSpinner;
