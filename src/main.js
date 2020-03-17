/*
 * @Description:
 * @Author: zyt
 * @Date: 2020-03-16 17:07:36
 * @LastEditors: zyt
 * @LastEditTime: 2020-03-16 17:12:34
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
console.log(1)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
