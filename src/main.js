// main.js

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './quasar'



import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
Vue.config.productionTip = false;

import HomeContact from './components/HomeContact.vue';
import CreatePart from './components/CreatePart.vue';
import IndexPart from './components/IndexPart.vue';
import EditPart from './components/EditPart.vue';
//import ListContacts from './components/ListContacts.vue'; 
import './quasar'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeContact
  },
  {
      name: 'create',
      path: '/create',
      component: CreatePart
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexPart
  },
  {
      name: 'list',
      path: '/list',
      component: IndexPart
      
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditPart
}
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');