import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)

library.add(faTrash, faEdit)
app.component('font-awesome-icon', FontAwesomeIcon)


app.use(router)

app.mount('#app')
