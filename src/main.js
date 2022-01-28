import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

axios.defaults.baseURL =  '/api'
axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.response.use(
  response => response,
  (error) => {
    return Promise.reject(error)
  }
)

Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
