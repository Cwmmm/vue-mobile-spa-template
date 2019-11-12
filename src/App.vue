<template>
  <div id="app">
    <div v-if="network">
      <h3>没有网了{{network}}</h3>
      <div @click="refresh">点击我刷新</div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>

// import {mapState} from 'vuex'
import {mapState} from 'vuex'
export default {
  name: 'App',
  data: function(){
    return{
    }
  },

  computed: {
    ...mapState({
      network:state=>{
        return !state.network
      }
    })
  },
  methods:{
    refresh(){
      this.$router.replace('/refresh')
    }
  },
  created(){

  }
}
</script>
<style lang='less' scoped>
#app {
  // #bordered;
}
</style>
