import React, { ReactNode } from 'react';

interface DashboardProps {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps): JSX.Element => {
  return (
    <div>
      <h1 className='text-tfn-green text-7xl text-center'> Dashboard Screens</h1>
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;
