<template>
    <div>
        <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="details_container">
            <div class="details_title"><p>用户请知悉，以下是您购买产品的网址，账号，密码等重要信息，请妥善保管</p></div>
            <div class="details_content">
                <van-row>
                <van-col span="4">网址</van-col>
                <van-col span="20">http://www.ltsoftware.net/</van-col>
                </van-row>
                <van-row>
                <van-col span="4">帐户</van-col>
                <van-col span="20">admin</van-col>
                </van-row>
                <van-row>
                <van-col span="4">密码</van-col>
                <van-col span="20">123456</van-col>
                </van-row>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
.details_container{
    padding:0 10px;
    .details_title{
        margin:30px auto ;
        font-size: 12px 
    }
}
.van-row{
    margin:5px auto ;
    border-bottom:2px dotted #ccc
}
    
</style>
