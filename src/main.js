import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import UserCards from './routes/UserCards.vue';
import User from './routes/User.vue';

const routes = [
    { path: '/', component: UserCards },
    { path: '/:id', component: User, props: true }
];

const router = new VueRouter({ routes });

Vue.use(BootstrapVue);
Vue.use(VueRouter);
new Vue({
    el: '#app',
    render: h => h(App),
    router: router
});