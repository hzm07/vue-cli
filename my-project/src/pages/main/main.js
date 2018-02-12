/**
 * Created by Huang.zm on 2017/10/18.
 */

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MainPage from './App.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#mian-menu',
  template: '<MainPage/>',
  components: {MainPage}
})
