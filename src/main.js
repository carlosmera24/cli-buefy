import Vue from 'vue'
import App from './App.vue'

//Import fonts fontawesome
import '@fortawesome/fontawesome-free/css/all.css'

// Import Buefy
import Buefy from 'buefy'

Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconPack: 'fas',
});

import 'buefy/dist/buefy.css'
new Vue({
  render: h => h(App),
}).$mount('#app')
