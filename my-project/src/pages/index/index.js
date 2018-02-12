import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Index from './index.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index }
})
