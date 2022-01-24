import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from '@/views/Test'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/test',
    name: 'testPage',
    component: Test
  }]
})

export default router