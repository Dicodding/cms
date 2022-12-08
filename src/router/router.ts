import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { routerList } from './index';

export const basicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: '登录'
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    name: '首页',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'redirect',
        component: () => import('@/views/redirect.vue'),
        meta: {
          title: '刷新'
        }
      },
      ...routerList
    ]
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/common/404Page.vue')
  },
  // 404页面配置必须放在最后，当所有路由都无法匹配上的时候，跳入404页面
  { path: '/:pathMatch(.*)*', redirect: '/404' }
];

// 创建路由
export const router = createRouter({
  history: createWebHistory((import.meta as any).env.VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});
router.options.routes;
// 配置路由
export function setupRouter(app: App<Element>) {
  app.use(router);
}
