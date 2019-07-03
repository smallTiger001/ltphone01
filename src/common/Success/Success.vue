<template>
    <div class="success">
        <van-nav-bar
        title="购买成功"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="success_content">
            <van-row type="flex" justify="center" align="center">
                <van-col span="6">
                    <div ><van-icon name="success"  size="80px" color="#fff" class="success_icon"/></div>
                </van-col>
                <van-col span="18">
                    <div><span class="success_text">订单提交成功，请等待审核结果</span></div>
                </van-col>
            </van-row>
            
        </div>
        <div class="queding" @click="button_icon">
            <van-button type="info" size="normal"  >确定</van-button>
        </div>
    </div>
</template>
<script>
export default {
     methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        button_icon(){
            this.$router.push({
                path:'/app/syste'
            })
        }
    }
}
</script>
<style>
    .success_icon{
        width:80px;
        height:80px;
        border-radius: 50%;
        background:greenyellow
    }
    .success_content{
        margin:12.5rem 0 0 20px
    }
    .success_text{
        font-weight: 600;
        padding-bottom:1.5rem;
        border-bottom:2px dotted greenyellow
    }
    .van-button{
        width:50%;
    }
    .queding{
        text-align: center;
        margin-top:120px;
    }
</style>
