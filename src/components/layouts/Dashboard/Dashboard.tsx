import TfnLogo from '@/components/ui/TfnLogo';
import { selectConfigState, setMobiNav } from '@/store/config/configSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { PageEndpoints } from '@/utils/constants/endpoints.constant';
import { faBars, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Tooltip } from 'antd';
import Link from 'next/link';
import React from 'react';
import Sidebar from './Sidebar/SideBar';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const Dashboard = ({ children }: DashboardLayoutProps): JSX.Element => {
  const { mobiNav, appLoading } = useAppSelector(selectConfigState);
  const dispatch = useAppDispatch();

  return (
    <div className='flex justify-start items-start h-full bg-tfn-green'>
      {appLoading.state && <LoadingSpinner text={appLoading.text} />}
      <div className='lg:block hidden min-h-full '>
        <Sidebar />
      </div>
      <Drawer className='!rounded-r-[35px] !p-0 !m-0 lg:hidden block' width={280} closable={false} key='mobile nav' open={mobiNav} placement='left' onClose={() => dispatch(setMobiNav(false))}>
        <Sidebar isMobi={true} />
      </Drawer>
      <main className='flex-grow bg-[#e2e2e4] p-2 min-h-screen space-y-4'>
        <div className='flex justify-between items-center md:py-5 md:px-3 py-4 px-2 shadow-md bg-white rounded-md '>
          <TfnLogo />
          <div className='flex justify-around items-center md:space-x-6 space-x-4 pr-3'>
            <Tooltip showArrow={false} trigger='hover' title='Notification' placement='bottomRight' color='#017B47'>
              <FontAwesomeIcon icon={faBell} className='font-bold text-lg' />
            </Tooltip>
            <Tooltip showArrow={false} trigger='hover' title='Profile' placement='bottomRight' color='#017B47'>
              <Link passHref href={PageEndpoints.profile}>
                <FontAwesomeIcon icon={faUser} className='font-bold text-lg' />
              </Link>
            </Tooltip>

            <FontAwesomeIcon onClick={() => dispatch(setMobiNav(true))} className='font-bold text-xl lg:hidden block active:shadow-2xl active:scale-70 active:text-tfn-light-green ' icon={faBars} />
          </div>
        </div>
        <section className='shadow-md p-2 min-h-screen bg-white rounded-md'>{children}</section>
      </main>
    </div>
  );
};

export default Dashboard;
