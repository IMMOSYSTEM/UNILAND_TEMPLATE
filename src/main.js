import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import VueSweetalert2 from 'vue-sweetalert2';
import * as VueGoogleMaps from "vue2-google-maps";
import VueCookies from 'vue-cookies';
import VueGeolocation from 'vue-browser-geolocation';
import 'sweetalert2/dist/sweetalert2.min.css';
// import VueTelInput from 'vue-tel-input';
// import 'vue-tel-input/dist/vue-tel-input.css';
import VueAgile from 'vue-agile';

Vue.config.productionTip = false
Vue.use(VueGeolocation);
Vue.use(VueCookies);
Vue.use(VueSweetalert2);
// Vue.use(VueTelInput);
Vue.use(VueAgile);
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyA3mcj07-7u_nSPUosA0IuwIU3WPnP0D6I"
    }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
