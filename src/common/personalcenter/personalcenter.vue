<template>
    <div class="percenter">
         <van-nav-bar
        title="个人中心"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-row>
            <van-col span="8">我的任务</van-col>
        </van-row>
       <van-cell-group>
           <van-cell value="立刻绑定" icon="phone" is-link>
                <template slot="title">
                    <span class="custom-text">绑定手机</span>
                </template>
           </van-cell>
       </van-cell-group>
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

</style>
