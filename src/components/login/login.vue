<template>
    <div class="login">
       <van-nav-bar
        title="登录页面"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="login-container">
            <h3>旅通软件服务平台</h3>
            <div class="logion-icon-box">
                <a  class="icon-weixin"  href="http://uc.ltsoftware.net/oauth/wxurl"> <img src="@/assets/Weixin.png" alt=""></a>
                <a  class="icon-qq" href='http://uc.ltsoftware.net/oauth/qqurl'><img border="0" alt="QQ登录" src="@/assets/QQ.png"></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
 methods: {
    onClickLeft() {
      this.$router.go(-1);//返回上一层
    }
  }
}
</script>
<style lang="scss" scoped>
    .login-container{
        text-align: center;
        margin:50px ;
        h3{
            color:#ccc;
        }
        .logion-icon-box{
            display:flex;
            margin:60px auto;
            .icon-weixin{
                flex:1;
            }
            .icon-qq{
                flex:1
            }
        }
    }

</style>
