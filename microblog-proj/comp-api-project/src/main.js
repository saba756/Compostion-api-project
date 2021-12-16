import { createApp } from 'vue'
import App from './Vuex-options/App.vue'
import {store} from './Vuex/store'
//import { router } from './router/router'

createApp(App).use(store).mount('#app')
