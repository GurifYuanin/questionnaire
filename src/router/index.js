import Vue from 'vue';
import Router from 'vue-router';
import Default from '@/components/default.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '默认内容',
      component: Default
    }
  ]
});
