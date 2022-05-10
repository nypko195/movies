import { createApp } from 'vue';
import App from './App.vue';

import { router } from './router.js';

// plugins
import { Vue3Mq } from "vue3-mq";
import { mqConfig } from './config/plugins/vue-mq/';

const app = createApp(App);

app.use(Vue3Mq, mqConfig);
app.use(router);

app.mount('#app');