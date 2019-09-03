import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import User from './views/User.vue';
import Scan from './views/Scan.vue';
import Card from './views/Card.vue';
import CardList from './views/CardList.vue';
import ScanList from './views/ScanList/ScanList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home',
        },
        {
          path: '/home',
          component: Home,
          children: [
            {
              path: '',
              redirect: '/card',
            },
            {
              path: '/scan',
              component: Scan,
            },
            {
              path: '/card',
              component: Card,
            },
            {
              path: '/user',
              component: User,
              // children: [
              //   {
              //     path: 'cardList',
              //     component: CardList,
              //   }
              // ]
            },
            {
              path: '/cardList',
              component: CardList,
            },
            {
              path: '/scanList',
              component: ScanList,
            }
          ],
        },
        {
          path: '/login',
          component: Login,
        },

      ],
    },
  ],
});
