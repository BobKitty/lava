import { createApp } from 'vue';
import { createPinia } from 'pinia';

import VueAnimateOnScroll from 'vue3-animate-onscroll';

import './assets/scss/main.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAnimateOnScroll);

app.mount('#app');
