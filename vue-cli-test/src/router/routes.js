import generalinfo from '../components/records/general-info.vue'
import login from '../components/login/login.vue'
export default[
  {
    path:'/',
    redirect:'/medicine'
  },
  {
    path: '/medicine',
    name: 'generalinfo',
    components: {
      default:generalinfo,
      b:login
    },
    beforeEnter:(to,from,next)=>{
      console.log('medicine route before enter');
       next()
    }
  },
  {
    path: '/medicine/:id',
    name: 'generalinfo',
    props:true,
    component: generalinfo,
    meta:{
      title:'this is 案卷信息',
      description:'案卷信息'
    },
     children:[
       {
          path:'login',
          component:login
       }
     ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]
