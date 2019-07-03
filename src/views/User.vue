<template>
  <div class="user">
    <div class="user-header">
      <van-row type="flex" justify="space-around" align="center">
        <van-col span="6" >
          <van-image
            width="80"
            height="80"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            class="user-header-image"
          />
        </van-col>
        <van-col span="8">
          <h3>Hi,您未登录</h3>
        </van-col>
        <van-col span="8">
          <van-button plain  hairline type="info"  size="small" to="/login">登录</van-button>
        </van-col>
      </van-row>
       <router-view/>
    </div>
    <div class="user-content">
      <van-cell value="" icon="manager" is-link size="18" to="/personalcenter" >
        <template slot="title">
          <span class="custom-text">个人中心</span>
        </template>
      </van-cell>
      <van-cell value="" icon="gold-coin" is-link to="/balance">
        <template slot="title">
          <span class="custom-text">费用中心</span>
        </template>
      </van-cell>
      <van-cell value="" icon="balance-list" is-link to="/paylist">
        <template slot="title">
          <span class="custom-text">订单管理</span>
        </template>
      </van-cell>
      <van-cell value="" icon="setting" is-link>
        <template slot="title">
          <span class="custom-text">设置</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
img.van-image__img{
  border-radius: 50%;
}
.user-header{
  padding:30px 10px; 
  background:rgba(63,82,101,1);
  h3{
    color:#fff;
  }
  .van-button--plain{
    background-color:rgba(63,82,101,1) !important
  }
}


</style>

