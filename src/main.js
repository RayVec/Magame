import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueTouch from 'vue-touch'

import VueAwesomeSwiper from 'vue-awesome-swiper'



// import style (<= Swiper 5.x)  css路径
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(VueTouch, { name: 'v-touch' })

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
