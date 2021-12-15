import { createApp } from 'vue'
import App from './router-options/App.vue'

import { router } from './router/router'
// const app = createApp(App)
// app.use(router)

// app.mount('#app')
createApp(App).use(router).mount('#app')
