import type { AppRouteRecordRaw } from './types';
const modules = import.meta.globEager('./routes/**/*.(ts)');

export const routerList: Partial<AppRouteRecordRaw>[] = [];

Object.keys(modules).forEach((key: string) => {
  const com = modules[key]?.default || [];
  routerList.push(...com);
});
