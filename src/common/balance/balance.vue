<template>
    <div>
        <van-nav-bar
            title="费用中心"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-row>
            <van-col span="8">
                <div>
                    <span>帐户余额<em>200</em>元</span>
                </div>
            </van-col>
        </van-row>
        <van-row type="flex">
            <van-col span="24">
                <div class="payway">
                    <h3>支付方式</h3>
                </div>
                <div class="payIcon">
                    <van-row type="flex" align="center" class="icon_bottom">
                        <van-col span="6">
                            <van-icon size="3rem" color="#00bbee" name="alipay" />
                        </van-col>
                        <van-col span="18">
                            <van-button type="info" size="small">支付宝支付</van-button>
                        </van-col>
                    </van-row>
                    <van-row type="flex" align="center" class="icon_bottom">
                        <van-col span="6">
                             <van-icon size="3rem" color="#0dbb15" name="wechat" />
                        </van-col>
                        <van-col span="18">
                             <van-button type="primary" size="small">微信支付</van-button>
                        </van-col>
                    </van-row>
                </div>
            </van-col>
        </van-row>
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
    .payway{
        text-align: left;
    }
    .icon_bottom{
        border-bottom:1px solid #ccc;
    }
</style>
