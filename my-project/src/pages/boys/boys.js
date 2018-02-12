import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Boys from './boys.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<Boys/>',
  components: { Boys }
})
