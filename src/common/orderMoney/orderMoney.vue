<template>
    <div class="orderMoney">
        <van-nav-bar
        title="支付订单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="orderMoney_containe">
            <div>
                <van-row type="flex" justify="space-between"  class="orderMoney_containe_header">
                    <van-col span="8" align="center">
                    </van-col>
                    <van-col span="8"  align="center">
                           <div class="orderMoney_containe_text">
                               <div class="money">¥ <em>999</em></div>
                               <div class="text">地接系统 1年</div>
                           </div>
                    </van-col>
                    <van-col span="8"  align="center">
                    </van-col>
                </van-row>  
            </div>
            <div class="pay">
                <van-row type="flex" align="center" class="icon_bottom">
                    <van-col span="6">
                        <van-icon size="3rem" color="#00bbee" name="alipay" />
                    </van-col>
                    <van-col span="18">
                        <van-button type="info" size="small" to="/details">支付宝支付</van-button>
                    </van-col>
                </van-row>
                <van-row type="flex" align="center" class="icon_bottom">
                    <van-col span="6">
                            <van-icon size="3rem" color="#0dbb15" name="wechat" />
                    </van-col>
                    <van-col span="18">
                            <van-button type="primary" size="small" to="/details">微信支付</van-button>
                    </van-col>
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
    .orderMoney_containe_header{
        margin:30px auto ;
        background:#fff;
        .orderMoney_containe_text{
            .money{
                font-weight: bold;
                em{
                    font-size:32px;
                    font-weight: bold;
                    color:#000;
                    font-style: normal;
                }
            }
            .text{
                font-size:11px ;
                color:#999
            }
        }
    }
    .pay{
        margin:30px auto ;
        background:#fff
    }
    .icon_bottom{
        padding:10px 0 5px 20px;
        border-bottom:1px solid #ccc;
    }
</style>
