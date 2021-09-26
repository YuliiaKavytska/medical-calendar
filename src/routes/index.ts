import React from 'react'
import Calendar from '../pages/Calendar'
import Login from '../pages/Login'

export interface iRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum Routes {
  LOGIN = '/login',
  CALENDAR = '/',
}

export const publicRoutes: iRoute[] = [
  { path: Routes.LOGIN, component: Login, exact: true }
]

export const privateRoutes: iRoute[] = [
  { path: Routes.CALENDAR, component: Calendar, exact: true }
]
