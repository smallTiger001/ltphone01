<template>
  <div id="app">
    <router-view/>
    <nav-bar v-if="showTab"></nav-bar>
  </div>
</template>
<script>
import navBar from '@/base/navbar/navbar'
export default {
  components:{
    navBar
  },
  data(){
    return {
      showTab:true
    }
  },
  /*侦听路由的变化,控制底部tabbar的显示
   */
  watch:{
    '$route'(to,from){
      if(to.path =="/app/home" || to.path == "/app/user" || to.path == "/app/service" || to.path == "/app/syste"){
        this.showTab=true;
      }else {
        this.showTab=false;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#app{
  height:100%;
  background-color:#fff;
  // 设置全局字体
  font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif, 'Droid Sans Fallback';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>

