import { localCache } from '@/utils/cache';
import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app-info',
  state: () => {
    const sideStatus = localCache.getCache('sideStatus');
    return {
      sideBar: {
        opened: sideStatus ?? true
      }
    };
  },
  getters: {
    getSideStatus(): boolean {
      return this.sideBar.opened;
    }
  },
  actions: {
    setToggleSideStatus(): void {
      this.sideBar.opened = !this.sideBar.opened;
      if (this.sideBar.opened) {
        localCache.setCache('sideStatus', 1);
      } else {
        localCache.setCache('sideStatus', 0);
      }
    }
  }
});
