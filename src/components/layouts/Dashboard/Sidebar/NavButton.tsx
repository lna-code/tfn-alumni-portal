import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '@/store/store';
import { selectConfigState } from '@/store/config/configSlice';
import { Collapse } from 'antd';

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

  console.log(children, active);

  return (
    <Collapse ghost>
      <div
        {...rest}
        className={`flex space-x-5 py-3 px-2.5 font-semibold shadow-lg select-none justify-start items-center rounded-lg capitalize btn-hover transition duration-300 ${collapse ? '!w-[230px]' : 'w-full'} ${
          !active ? 'bg-white text-tfn-green' : 'text-white !bg-tfn-light-green'
        }`}>
        <FontAwesomeIcon icon={icon} className='' />
        {collapse && <p>{children}</p>}
      </div>
    </Collapse>
  );
};

export default NavButton;
