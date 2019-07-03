export default [
  {
    path:'',
    redirect:'/app'
  },
  {
    path:'/app',
    component:()=>import ('@/App.vue') ,
    children:[
      {
        path:'',
        redirect:'home'
      },
      {
        path:'home',
        component:()=>import('@/views/Home.vue')
      },
      {
        path:'user',
        component:()=>import('@/views/User.vue')
      },
      {
        path:'service',
        component:()=>import('@/views/service.vue')
      },
      {
        path:'syste',
        component:()=>import('@/views/syste.vue')
      }
    ]
  },
  {
    path:'/system',
    name:'system',
    component:()=>import('@/views/System.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/components/login/login')
  },
  {
    path:'/personalcenter',
    name:'personalcenter',
    component:()=>import('@/common/personalcenter/personalcenter')
  },
  {
    path:'/balance',
    name:'balance',
    component:()=>import('@/common/balance/balance')
  },
  {
    path:'/paylist',
    name:'paylist',
    component:()=>import('@/common/payList/payList')
  },{
    path:'/ordermoney',
    name:'ordermoney',
    component:()=>import('@/common/orderMoney/orderMoney')
  },{
    path:'/details',
    name:'details',
    component:()=>import('@/common/details/details')
  },{
    path:'/success',
    name:'success',
    component:()=>import('@/common/Success/Success')
  },{
    path:'/server',
    name:'server',
    component:()=>import('@/views/Server.vue')
  }
  


  // {
  //   path:"/",
  //   redirect:{name : "home"}
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component:() => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  // },
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/User.vue')
  // },
  // {
  //   path:"/server",
  //   name:"server",
  //   component:() => import ('@/views/Server.vue')
  // },
  // {
  //   path:"/system",
  //   name:"system",
  //   component:() => import('@/views/System.vue')
  // },
  // {
  //   path:"/login",
  //   name:"login",
  //   component:()=>("@/components/login/login")
  // }

]
