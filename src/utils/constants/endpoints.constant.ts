/* eslint-disable prettier/prettier */
import { faHome, faUsers, faSitemap, faBriefcase, faCalendar, IconDefinition, faUser } from '@fortawesome/free-solid-svg-icons';

export const BaseApiUrl = process.env.NEXT_PUBLIC_BASEAPI_URL || '';

export enum PageEndpoints {
  home = '/',
  login = '/auth/login',
  forgotPassword = '/auth/forgot-password',
  resetPassword = '/auth/reset-password',
  newPassword = '/auth/new-password',

  page404 = '/404',
  forum = '/forum',
  directory = '/directory',
  jobs = '/jobs',
  events = '/events',
  profile = '/profile'
}

export interface RouteProp {
  label: string;
  path: PageEndpoints;
  icon: IconDefinition;
}

export const homeRoutes: RouteProp[] = [
  {
    label: 'Home',
    path: PageEndpoints.home,
    icon: faHome
  },
  {
    label: 'Profile',
    path: PageEndpoints.profile,
    icon: faUser
  },
  {
    label: 'Forum',
    path: PageEndpoints.forum,
    icon: faUsers
  },
  {
    label: 'Directory',
    path: PageEndpoints.directory,
    icon: faSitemap
  },
  {
    label: 'Jobs',
    path: PageEndpoints.jobs,
    icon: faBriefcase
  },
  {
    label: 'Events',
    path: PageEndpoints.events,
    icon: faCalendar
  }
];
