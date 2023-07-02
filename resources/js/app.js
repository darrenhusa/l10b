import './bootstrap';

// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Home from './Components/Home.vue';

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

const app = createApp({});

app.component('home-component', Home);

app.mount("#app");

