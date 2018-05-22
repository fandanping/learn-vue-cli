
import routes from './routes'
import Router from 'vue-router'

export default new Router({
  routes,   //分离
  mode:'history',   //把路由中#去掉
  base:'/neusipo/',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  },
  fallback:true

})
