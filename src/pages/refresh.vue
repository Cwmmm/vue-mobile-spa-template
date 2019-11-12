<template> 

</template>

<script>
export default {


  beforeRouteEnter (to, from, next) {
    console.log(window.navigator.onLine)
    if(window.navigator.onLine){
      next(vm => {     
        vm.$store.commit('updateNetwork',true)               
        vm.$router.replace(from.fullPath)        
      })
    }    
  }
}
</script>

<style>

</style>