import { createApp } from 'vue';
import App from './App.vue';
import { useElementPlus } from './plugins/element-plus';
import { setupRouter } from './router/router';
import { setupStore } from './store';
import '@/assets/styles/index.scss';
import '@/assets/styles/iconfont/iconfont.css';
import '@/assets/styles/iconfont/iconfont.js';

/**
 * 定义启动初始化函数
 */
const bootstrap = () => {
  const app = createApp(App);

  // 安装初始化store
  setupStore(app);
  useElementPlus(app);

  // 安装初始化路由
  setupRouter(app);

  app.mount('#app');
};

// 启动
bootstrap();
