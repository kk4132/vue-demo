import Vue from 'vue'
import Router from 'vue-router'
import postList from './components/c-post-list'
import userInfo from './components/c-user-info'
import sidebar from './components/c-sidebar'
import article from './components/c-article'
import notFound from './components/c-404.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      name:'root',
      components:{
        main:postList
      }
    },
    {
      path:'/user/:name',
      name:'user_info',
      components:{
        main:userInfo
      }
    },
    {
      path:'/topic/:id&auther=:name',
      name:'user_content',
      components:{
        main:article,
        sidebar:sidebar
      }
    },{
      path:'*',
      components:{
        main:notFound
      }
    }
  ]
})
