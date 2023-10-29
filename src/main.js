// Components
import App from './App.vue';
import router from './router';

// Composables
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Plugins
import { registerPlugins } from '@/plugins';

const app = createApp(App);
const pinia = createPinia();

registerPlugins(app);

app.use(pinia);
app.use(router);
app.mount('#app');
