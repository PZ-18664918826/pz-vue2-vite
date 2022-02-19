import { createApp } from 'vue-demi';
import { setupAssets } from './plugins';
import { setupStore } from './store';
import App from './App.vue';

async function setupApp() {
  const app = createApp(App);
  // 优先挂载全局状态
  setupStore(app);
  app.mount('#app');
}

setupApp();
setupAssets();
