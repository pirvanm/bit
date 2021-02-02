import Vue from 'vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'


Vue.use(VueFormWizard)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


axios.defaults.headers.get['header-name'] = 'value'

new Vue({
  render: h => h(App),
}).$mount('#app')
