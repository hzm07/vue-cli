import Vue from 'vue'
import Goods from './goods.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<Goods/>',
  components: { Goods }
})
