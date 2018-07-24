import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/view/main.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: Main
    }
  ]
});
