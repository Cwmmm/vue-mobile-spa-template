<template>
  <div>
    <header>
      <div class="left">
        <van-icon name="location-o" size="20px" color="white"/>
        <van-icon name="arrow" size="20px" color="white"/> 
        <span class="content">厦门软件职业技术学院{{this.location}}</span>
      </div>
      <div class="right">
        <van-search
         placeholder="请输入商家"
         background="#1C1B20"
          ></van-search>
      </div>
    </header>
    <nav>
      <div>
        <div class="navbar"
        v-for="item in kingkong" :key="item.cateId">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
        </div>
      </div>
    </nav>
    <h2>
      ————附近商家————
    </h2>
    <van-sticky :offset-top="40">
        <van-dropdown-menu id="menu"
        >
        <van-dropdown-item
        id="menuitem"
        v-model="value1" 
        :options='option1'
        @open='open'/>
        <van-dropdown-item title="筛选">
        </van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    
    <section class="foodlist">
      <div class="food"
      v-for="item in this.poislit"
      :key="item.mtWmPoiId"
      >
        <div class="left">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="right">
          <h3>{{item.shopName}}</h3>
        </div>
      </div>



    </section>
  </div>  
</template>

<script>
import {getLocalStorage} from '../../config/utils'
export default {
  data(){
    return{
      location:'',
      kingkong:'',
      poislit:'',
      value1: 0,
      value2: 'a',
      value3:0,
      value4:0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
    }
  },
  computed: {

  },
  methods:{
    open(){
        document.querySelector('#menu').scrollIntoView(true);
        document.querySelector('#menuitem').scrollIntoView(false);        
    }
  },
  beforeCreate(){
    this._api.homepage.kingkong().then((res)=>{
      this.kingkong=res.data.data.kingkongList.splice(0,10)

      })
    this._api.homepage.poislit().then((res)=>{
      this.poislit=res.data.data.shopList.splice(0,8)
      })
    let location=getLocalStorage('location')
    if(location){
      this.location=location
    }else{
      // this.$router.replace('/reposition')
    }
  }
}
</script>

<style lang='less' scoped>
  header{
    position: fixed;
    z-index: 999;
    height: 40px;
    width: 100vw;
    background-color: #1C1B20;
    // @bordered;
    // #bordered;
    .left{
      width: 50vw;
      height: 40px;
      float: left;
      overflow: hidden;
      .content{
        color:white;
        display: inline-block;
        width: 35vw;
        line-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

      }
      .van-icon-location-o{
        line-height: 40px;
        float: left;

      }
      .van-icon-arrow{
        float: right;
        line-height: 40px;
      }
    }
    .right{
      height: 100%;
      .van-search{
        // padding: auto;
        height: 40px;
      }
    }
  
  }
  nav{
    // margin-top: 40px;
    padding-top: 40px;
    height: 200px;
    margin-bottom: 15px;
    div{
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      .navbar{
      // border: 1px solid red;
      width: 64px;
      height: 88px;
      position: relative;
      // text-align: center;
      img{
        position: absolute;
        height: 44px;
        width: 44px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)

      }
      span{
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        white-space: nowrap;
        height: 16px;
        transform: translateX(-50%);
        font-size: 11px;
        color: #1C1B20;
        font-weight: normal;
      }
    }

    }
    
  }
  h2{
    color: #1C1B20;
    font-size: 15px;
    text-align: center;
    padding: 15px 0 5px 0;
  }
  .foodlist{
    width: 50vw;
    .food{
      height: 151px;
      padding: 0 10px;
      margin-top: 10px;
      margin-bottom: 25px;
      .left{
        float: left;
        img{
          width:76px;
          height: 57px;
        } 
      }
      .right{
        margin-left: 76px;
        width: 216px;
        height: 151px;

      }
    }
  }

  
</style>