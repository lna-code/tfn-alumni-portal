import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import classNames from 'classnames';
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
  const open = leftBar ? false : undefined;

  const CustomBtn = () => (
    <div
      className={`flex space-x-5 py-3 px-2.5 font-semibold shadow-lg select-none justify-start items-center rounded-lg capitalize bg-white text-tfn-green btn-hover  ' ${collapse ? '!w-[230px]' : 'w-full'} ${
        active ? ' !text-white !bg-green-500 ' : '' }`} {...rest}>
      <FontAwesomeIcon icon={icon} className='' />
      {collapse && <p>{children}</p>}
    </div>
  );

  return (
    <div>
      {isMobi ? (
        <CustomBtn />
      ) : (
        <Tooltip open={open} showArrow={false} trigger={leftBar ? 'hover' : undefined} title={children} placement='right' color='#017B47'>
          <div>
            <CustomBtn />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default NavButton;
