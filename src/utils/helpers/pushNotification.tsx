import React, { ReactNode } from 'react';
import { message } from 'antd';
import { v4 as uuidv4 } from 'uuid';

interface UseToastTypes {
  message: string | ReactNode;
  type: 'info' | 'success' | 'warning' | 'error';
  clearPrev?: boolean;
  duration?: number;
  icon?: ReactNode;
  key?: string;
  style?: object;
  top?: number;
  prefixCls?: string;
  onClose?: () => void;
  onClick?: () => void;
}

export const pushNotification = ({ duration = 2.5, top = 30, message: toastMsg, type, key, clearPrev = false, onClose, ...rest }: UseToastTypes) => {
  let toastDuration = duration;
  const uniqueKey = key || uuidv4();
  const closeMessage = onClose ? onClose : () => message.destroy(uniqueKey);

  switch (type) {
    case 'info':
      toastDuration = 10;
      break;
    case 'warning':
      toastDuration = 10;
      break;
    case 'error':
      toastDuration = 10;
      break;
    default:
      break;
  }

  message.config({
    top,
    maxCount: 15
  });

  clearPrev ? message.destroy() : undefined;

  message[type]({
    key: uniqueKey,
    duration: toastDuration,
    content: <>{toastMsg}</>,
    onClick: closeMessage,
    ...rest
  });
};
