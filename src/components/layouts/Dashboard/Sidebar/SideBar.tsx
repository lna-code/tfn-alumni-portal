import React, { useEffect } from 'react';
import { logoutUser } from '@/store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import Link from 'next/link';
import NavButton from './NavButton';
import { faPowerOff, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { homeRoutes, PageEndpoints } from '@/utils/constants/endpoints.constant';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectConfigState, setLeftBar, setMobiNav } from '@/store/config/configSlice';

interface SideBarProps {
  isMobi?: boolean;
}
const Sidebar = ({ isMobi }: SideBarProps) => {
  const dispatch = useAppDispatch();
  const { leftBar } = useAppSelector(selectConfigState);
  const { asPath } = useRouter();

  const logOutUserHandler = () => {
    dispatch(setMobiNav(false));
    dispatch(logoutUser());
  };

  useEffect(() => {
    const handleWindowSizeChange = () => {
      dispatch(setMobiNav(false));
      dispatch(setLeftBar(false));
    };

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [window.innerWidth]);

  return (
    <nav className='relative bg-tfn-green h-screen  text-white px-2 py-16 flex justify-between flex-col'>
      <span className='absolute -right-2 top-16 rounded-full xl:block hidden'>
        <FontAwesomeIcon onClick={() => dispatch(setLeftBar(!leftBar))} className={`btn-hover text-white hover:text-tfn-light-green hover:bg-white rounded-full text-[1.6rem] ${leftBar ? 'rotate-180' : ''}`} icon={faCircleArrowRight} />
      </span>
      <div className='lg:mt-6 mt-2 space-y-6 px-3 py-6 flex justify-between flex-col rounded-lg shadow-2xl bg-[#017B47]'>
        {homeRoutes.map((route) => (
          <Link passHref href={route.path} key={route.path}>
            <NavButton isMobi={isMobi} active={asPath === route.path} icon={route.icon}>
              {route.label}
            </NavButton>
          </Link>
        ))}
      </div>
      <div className='px-3'>
        <Link passHref href={PageEndpoints.login}>
          <NavButton isMobi={isMobi} icon={faPowerOff} onClick={logOutUserHandler}>
            Sign Out
          </NavButton>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
