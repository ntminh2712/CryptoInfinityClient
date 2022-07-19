import { IRoute } from '@/types';
import { lazy } from 'react';

const Home = lazy(() => import('@/containers/Home'));
const Login = lazy(() => import('@/containers/Login'));
const ForgetPassword = lazy(() => import('@/containers/ForgetPassword'));
const Reregister = lazy(() => import('@/containers/Reregister'));
const Registercomplication = lazy(() => import('@/containers/Registercomplication'));
const Newmember = lazy(() => import('@/containers/Newmember'));
const Search = lazy(() => import('@/containers/Search'));
const SearchResult = lazy(() => import('@/containers/SearchResult'));
const Salary = lazy(() => import('@/containers/Salary'));
const Corporateinfo = lazy(() => import('@/containers/Corporateinfo'));
const Favorite = lazy(() => import('@/containers/Favorite'));
const Comporison = lazy(() => import('@/containers/Comporison'));
const Copnfirmation = lazy(() => import('@/containers/Copnfirmation'));
const Finish = lazy(() => import('@/containers/Finish'));
const Comparisonresult = lazy(() => import('@/containers/Comparisonresult'));
const Mypage = lazy(() => import('@/containers/Mypage'));
const Fromcorporate = lazy(() => import('@/containers/Fromcorporate'));
const Fromcorporateinfo = lazy(() => import('@/containers/Fromcorporateinfo'));
const Schedule = lazy(() => import('@/containers/Schedule'));
const Application = lazy(() => import('@/containers/Application'));

/*
 * If route has children, it's a parent menu (not link to any pages)
 * You can change permissions to your IAM's permissions
 */
const routes: IRoute[] = [
  {
    path: '/fromcorporateinfo',
    title: 'Fromcorporateinfo',
    component: Fromcorporateinfo,
  },
  {
    path: '/application',
    title: 'Application',
    component: Application,
  },
  {
    path: '/schedule',
    title: 'Schedule',
    component: Schedule,
  },
  {
    path: '/finish',
    title: 'Finish',
    component: Finish,
  },
  {
    path: '/fromcorporate',
    title: 'Fromcorporate',
    component: Fromcorporate,
  },
  {
    path: '/mypage',
    title: 'My Page',
    component: Mypage,
  },
  {
    path: '/comparisonresult',
    title: 'Comparisonresult',
    component: Comparisonresult,
  },
  {
    path: '/copnfirmation',
    title: 'Copnfirmation',
    component: Copnfirmation,
  },
  {
    path: '/comporison',
    title: 'Comporison',
    component: Comporison,
  },
  {
    path: '/favorite',
    title: 'Favorite',
    component: Favorite,
  },
  {
    path: '/corporateinfo',
    title: 'Corporateinfo',
    component: Corporateinfo,
  },
  {
    path: '/search-result',
    title: 'SearchResult',
    component: SearchResult,
  },
  {
    path: '/salary',
    title: 'Salary',
    component: Salary,
  },
  {
    path: '/search',
    title: 'Search',
    component: Search,
  },
  {
    path: '/newmember',
    title: 'Newmember',
    component: Newmember,
  },
  {
    path: '/registercomplication',
    title: 'Registercomplication',
    component: Registercomplication,
  },
  {
    path: '/reregister',
    title: 'Reregister',
    component: Reregister,
  },
  {
    path: '/forgetPassword',
    title: 'Forget Password',
    component: ForgetPassword,
  },
  {
    path: '/login',
    title: 'Login',
    component: Login,
  },
  {
    path: '/',
    title: 'home',
    component: Home,
  },
];

export default routes;
