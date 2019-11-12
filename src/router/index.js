import Vue from 'vue'
import Router from 'vue-router'


const path=require('path')
const files= require.context('@/pages',true,/\.vue$/)
const pages={}
files.keys().forEach(key=>{
    const name=path.basename(key,'.vue')
    pages[name]=files(key).default||files(key)

})


//导入components里的所有组件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:pages.index,
      children:[{
        path:'',
        name:'homepage',
        component:pages.homepage,
        meta:{
          side:1
        }
      },
      {
        path:'order',
        name:'order',
        component:pages.order,
        meta:{
          side:2
        }
      },
      {
        path:'orderDetail',
        name:'orderDetail',
        component:pages.orderDetail
      },
      {
        path:'me',
        name:'me',
        component:pages.me,
        meta:{
          side:3
        }
      },
      ]
    },
    {
      path:'/refresh',
      name:'refresh',
      component:pages.refresh
    },
    {
      path:'/login',
      name:'login',
      component:pages.login
    },
    {
      path:'/reposition',
      name:'404',
      component:pages.reposition
    },
    {
      path:'/foodShop',
      name:'foodShop',
      component:pages.foodShop
    },
    {
      path:'*',
      name:'404',
      component:pages.notFound
    }
  ]
})
