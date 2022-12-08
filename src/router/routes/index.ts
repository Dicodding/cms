import type { AppRouteRecordRaw } from '../types';

export default [
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页'
    }
  }
] as Partial<AppRouteRecordRaw>[];
