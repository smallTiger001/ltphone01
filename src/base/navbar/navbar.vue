<template>
    <div class="top-bar">
        <van-tabbar v-model="ltActiveBar" >
            <van-tabbar-item
             icon="home-o"
             to="/app/home"
            >首页</van-tabbar-item>   
            <van-tabbar-item
            icon="desktop-o"
            to="/app/service"
            >软件</van-tabbar-item>
            <van-tabbar-item
            icon="home-o"
            to="/app/syste"
            >服务</van-tabbar-item>
            <van-tabbar-item
            icon="user-o"
            to="/app/user"
            >我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ltActiveBar:""//默认选中项
        }
    },
    mounted(){
    /**
     * 判断当前页面是哪个页面,解决刷新时,tab默认为 1 的bug
     */
        // const href =window.location.hash
        // if(href.includes("/app/home")){
        //     this.ltActiveBar=0;
        // }else if(href.includes("/app/user")){
        //     this.ltActiveBar=3;
        // }else if(href.includes("/app/service")){
        //     this.ltActiveBar = 1
        // }else if(href.includes("/app/syste")){
        //     this.ltActiveBar=2
        // }
    },
    methods:{
        /*   切换底部tab的方法
         * */
        // activeTag(){
        //     if(this.ltActiveBar === 0 ){
        //         this.$router.push({
        //             path: '/home',
        //             replace: true
        //         })
        //     }else if(this.ltActiveBar === 3){
        //         this.$router.push({
        //             path:'/user',
        //             replace:true
        //         })
        //     }else if(this.ltActiveBar === 1){
        //         this.$router.push({
        //             path:'/service',
        //             replace :true
        //         })
        //     }else if(this.ltActiveBar === 2){
        //         this.$router.push({
        //             path:"/syste",
        //             replace:true,
        //         })
        //     }
        // }
    }
}
</script>
<style lang="scss" scoped>
.top-bar {
  display: flex;
  color: #7d7e80;
  background-color: #fff;
  height: 50px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 110;
  .bar-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.05rem 0;
    .icon {
      font-size: 0.2rem;
      margin-bottom: 0.05rem;
    }
    .name {
      font-size: 0.14rem;
    }
  }
}
</style>
