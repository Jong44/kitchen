import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { far} from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'

import './assets/main.css'

library.add(fas)
library.add(fab)
library.add(far)
dom.watch()

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

axios.defaults.baseURL = 'https://kitchen-63271-default-rtdb.firebaseio.com/'




app.use(router)

app.mount('#app')
