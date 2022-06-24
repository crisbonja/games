import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import AppLoading from '@/components/AppLoading.vue';

Vue.config.productionTip = false
Vue.component('AppLoading', AppLoading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
