import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useAppSelector } from '@/store/store';
import { selectConfigState } from '@/store/config/configSlice';
import { Tooltip } from 'antd';

type NavButtonProps = {
  children: string;
  icon: any;
  active?: boolean;
  isMobi?: boolean;
  [others: string]: unknown;
};

const NavButton = ({ children, active = false, icon, isMobi = false, ...rest }: NavButtonProps) => {
  const { leftBar } = useAppSelector(selectConfigState);

  const collapse = isMobi ? true : leftBar;
  const allClasses = classNames(
    'flex space-x-5 py-3 px-2.5 font-semibold shadow-lg select-none justify-start items-center w-full rounded-lg capitalize bg-white text-tfn-green',
    'hover:shadow-2xl hover:scale-105',
    'active:text-tfn-green active:bg-white active:scale-95',
    {
      '': active
    }
  );

  return (
    <Tooltip open={leftBar ? false : undefined} showArrow={false} trigger={leftBar ? 'hover' : undefined} title={children} placement='right' color='#017B47'>
      <div className={`${allClasses} ${collapse ? '!w-[14rem]' : ''} ${active ? 'text-white bg-tfn-light-green' : ''}`} {...rest}>
        <FontAwesomeIcon icon={icon} className='' />
        {collapse && <p>{children}</p>}
      </div>
    </Tooltip>
  );
};

export default NavButton;
