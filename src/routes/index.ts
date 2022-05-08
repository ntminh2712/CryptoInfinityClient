import { IRoute } from '@/types';
import { lazy } from 'react';

const Home = lazy(() => import('@/containers/Home'));
const PostDetail = lazy(() => import('@/containers/PostDetail'));
const PostListByCategory = lazy(() => import('@/containers/PostListByCategory'));


/*
 * If route has children, it's a parent menu (not link to any pages)
 * You can change permissions to your IAM's permissions
 */
const routes: IRoute[] = [
  {
    path: '/posts',
    title: 'Post List By Category',
    component: PostListByCategory,
  },
  {
    path: '/detail',
    title: 'Post Detail',
    component: PostDetail,
  },
  {
    path: '/',
    title: 'home',
    component: Home,
  },
];

export default routes;
