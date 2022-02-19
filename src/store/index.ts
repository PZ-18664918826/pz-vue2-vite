import { createPinia } from 'pinia';

export * from './modules';
export function setupStore(app: any) {
  const store = createPinia();
  app.use(store);
}
