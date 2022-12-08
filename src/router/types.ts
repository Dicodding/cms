import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import type { defineComponent } from 'vue';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);
type Recordable<T = any> = Record<string, T>;
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'children'> {
  path: string;
  name: string;
  meta?: RouteMeta;
  redirect?: string;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}
