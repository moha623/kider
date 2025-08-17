import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Dashboard } from './admin/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'home',
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: Login, title: 'Authentication' },
      { path: 'register', component: Register, title: 'Authentication' },
    ],
  },
 {
  path:'admin-dashboard',
  component:Dashboard,
  title:'Admin-Panel'
 }
];
