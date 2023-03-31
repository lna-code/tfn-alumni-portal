/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faHome, faUsers, faSitemap, faBriefcase, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Button from '@/components/Button/button';
import { logoutUser } from '@/store/auth/authSlice';
import { useAppDispatch } from '@/store/store';

type NavButtonProps = {
  children: string;
  active?: boolean;
  to: string;
  icon?: any;
};

const NavButton = ({ children, active = false, to, icon }: NavButtonProps) => {
  const navButtonClasses = classNames('block px-4 py-2 text-sm font-semibold text-white-900 hover:bg-white hover:text-tfn-green rounded', {
    'active: bg-white text-tfn-green rounded': active
  });

  return (
    <Link href={to} className={navButtonClasses}>
      {icon && <FontAwesomeIcon icon={icon} className='mr-2' />}
      {children}
    </Link>
  );
};

type SidebarProps = {
  items: {
    label: string;
    path: string;
    icon?: IconDefinition;
  }[];
  activePath?: string;
};

const Sidebar = ({ items, activePath }: SidebarProps) => {
  const dispatch = useAppDispatch();
  // const { user } = useAppSelector(selectAuthState);

  const logOutUserHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className='bg-tfn-green h-full text-white w-48 px-4 pt-6 pb-10 fixed'>
      <div className='mb-24'>
        <Link href='/'>
          <span className=' font-bold text-l px-1'>
            TEACH<span className='text-[#6ad76c]'>FOR</span>NIGERIA
          </span>
        </Link>
      </div>

      <div className='grid gap-4'>
        {items.map((item) => (
          <NavButton key={item.path} active={item.path === activePath} to={item.path} icon={item.icon}>
            {item.label}
          </NavButton>
        ))}
      </div>
      <div className='mt-52'>
        <Button className='border-none pl-4' onClick={logOutUserHandler}>
          <FontAwesomeIcon icon={faPowerOff} className='mr-2' />
          Sign Out
        </Button>
      </div>
    </nav>
  );
};

type DashboardLayoutProps = {
  sidebarItems: {
    label: string;
    path: string;
    icon: IconDefinition;
  }[];
  activeSidebarPath?: string;
  children: React.ReactNode;
};

const DashboardLayout = ({ sidebarItems, activeSidebarPath, children }: DashboardLayoutProps) => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar items={sidebarItems} activePath={activeSidebarPath} />
      <main className='flex-grow bg-[#f5f6fa] p-10'>{children}</main>
    </div>
  );
};

interface DashboardProps {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps): JSX.Element => {
  return (
    <div>
      <DashboardLayout
        sidebarItems={[
          {
            label: 'Home',
            path: '/',
            icon: faHome
          },
          {
            label: 'Forum',
            path: '/forum',
            icon: faUsers
          },
          {
            label: 'Directory',
            path: '/directory',
            icon: faSitemap
          },
          {
            label: 'Jobs',
            path: '/jobs',
            icon: faBriefcase
          },
          {
            label: 'Events',
            path: '/events',
            icon: faCalendar
          },
          {
            label: 'Forum',
            path: '/forum',
            icon: faUsers
          }
        ]}
        activeSidebarPath='/'>
        <div>{children}</div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
