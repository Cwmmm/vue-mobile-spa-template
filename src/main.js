import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from '@/config/api'

Vue.config.productionTip = false

Vue.prototype._api=api

import {Button,Toast,Icon,Search,
  DropdownMenu,DropdownItem,
  Tabbar, TabbarItem, Sticky

} from 'vant'
Vue.use(Button).use(Toast).use(Icon)
.use(DropdownItem).use(DropdownMenu)
.use(Search).use(Tabbar).use(TabbarItem).use(Sticky)

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
