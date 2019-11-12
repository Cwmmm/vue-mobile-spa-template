<template>
  <div>
      <header>
        <div class="citypicker">
          选择城市
        </div>
        <input class="searchbar" title="小区/街道/大厦/学校名称" />
        <div class="cancel">
          取消
        </div>
      </header>
      <section>
        <h3></h3>
      </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      geolocation:''

    }
  },
  created(){
        this.geolocation=navigator.geolocation.getCurrentPosition(
      (location)=>{
        this.geolocation=location
      }
    )
  }
}
</script>

<style>

</style>