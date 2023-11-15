import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn)
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
