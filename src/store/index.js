import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      direction:'forward',
      network:true,//判断是否断网
      token:'',//token
      
    },
    mutations,
    actions
  })
