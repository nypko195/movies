import { createApp } from 'vue';
import App from './App.vue';

//plugins
import { Vue3Mq } from "vue3-mq";
import { mqConfig } from './config/plugins/vue-mq/';

import { store } from './store/index.js';

const app = createApp(App);

app.use(Vue3Mq, mqConfig);
app.use(store);

app.mount('#app')