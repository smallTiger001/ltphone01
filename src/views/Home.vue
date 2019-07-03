<template>
  <div>
    <div class="home_header">
      <img src="@/assets/lt-dzwz1.png" alt="" class="home_imge">
      <div class="home_item" @click="home_click">
        <van-row  type="flex"  justify="space-around"  align="center">
          <van-col span="6">
            <img  class="home_imge_item" src="@/assets/lt1.jpg" alt="">
          </van-col>
          <van-col span="18">
              <h4>旅行社管理系统地接软件上线啦&gt;&gt;</h4>
              <p>解决地接社分销模式管理和发展上的瓶颈可按您的需求定制！！到您所在地架设服务器，内网管理！</p>
          </van-col>
        </van-row>
      </div>
      <div class="home_item" @click="home_click">
        <van-row  type="flex"  justify="space-around"  align="center">
          <van-col span="6">
            <img  class="home_imge_item" src="@/assets/lt2.jpg" alt="">
          </van-col>
          <van-col span="18">
              <h4>旅行社管理系统地接软件上线啦&gt;&gt;</h4>
              <p>解决地接社分销模式管理和发展上的瓶颈可按您的需求定制！！到您所在地架设服务器，内网管理！</p>
          </van-col>
        </van-row>
      </div>
      <div class="home_item" @click="home_click">
        <van-row  type="flex"  justify="space-around"  align="center">
          <van-col span="6">
            <img  class="home_imge_item" src="@/assets/lt3.jpg" alt="">
          </van-col>
          <van-col span="18">
              <h4>旅行社管理系统地接软件上线啦&gt;&gt;</h4>
              <p>解决地接社分销模式管理和发展上的瓶颈可按您的需求定制！！到您所在地架设服务器，内网管理！</p>
          </van-col>
        </van-row>
      </div>
      <div class="home_item" @click="home_click">
        <van-row  type="flex"  justify="space-around"  align="center">
          <van-col span="6">
            <img  class="home_imge_item" src="@/assets/lt4.jpg" alt="">
          </van-col>
          <van-col span="18">
              <h4>旅行社管理系统地接软件上线啦&gt;&gt;</h4>
              <p>解决地接社分销模式管理和发展上的瓶颈可按您的需求定制！！到您所在地架设服务器，内网管理！</p>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    home_click(){
      this.$router.push({
        path:'/app/service'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .home_imge{
    width: 100%;
    height: 53vw;
    display: block;
  }
  .home_item{
    padding:10px ;
    background:#eee;
    margin:15px auto ;
  }
  .home_imge_item{
    width:100%;
    height:23vm;
    display: block;
  }

</style>
