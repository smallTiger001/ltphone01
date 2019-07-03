<template>
    <div class="payList">
         <van-nav-bar
            title="订单管理"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-row type="flex" justify="center" align="center" class="payList_container">
            <van-col span="4">
                <div class="payList_icon">充</div>
            </van-col>
            <van-col span="14">
                <div class="payList_payway">
                    <span>充值</span><span class="payList_payway_way">支付宝</span>
                </div>
                <div class="payList_time">
                    <span>2019-03-02</span><span class="payList_time_way">成功</span>
                </div>
            </van-col>
            <van-col span="6">
                <div class="payList_money">+10000</div>
            </van-col>
        </van-row>
         <van-row type="flex" justify="center" align="center" class="payList_container">
            <van-col span="4">
                <div class="payList_icon">充</div>
            </van-col>
            <van-col span="14">
                <div class="payList_payway">
                    <span>充值</span><span class="payList_payway_way">微信</span>
                </div>
                <div class="payList_time">
                    <span>2019-4-12</span><span class="payList_time_way">成功</span>
                </div>
            </van-col>
            <van-col span="6">
                <div class="payList_money">+10</div>
            </van-col>
        </van-row>
         <van-row type="flex" justify="center" align="center" class="payList_container">
            <van-col span="4">
                <div class="payList_icon color_background">购</div>
            </van-col>
            <van-col span="14">
                <div class="payList_payway">
                    <span>购买</span><span class="payList_payway_way">微信</span><span class="payList_name">PDE</span>
                </div>
                <div class="payList_time">
                    <span>2019-4-19</span><span class="payList_time_way">成功</span>
                </div>
            </van-col>
            <van-col span="6">
                <div class="payList_money">-1000</div>
            </van-col>
        </van-row>
        <van-row type="flex" justify="center" align="center" class="payList_container">
            <van-col span="4">
                <div class="payList_icon color_background">购</div>
            </van-col>
            <van-col span="14">
                <div class="payList_payway">
                    <span>购买</span><span class="payList_payway_way">支付宝</span><span class="payList_name">地接</span>
                </div>
                <div class="payList_time">
                    <span>2019-4-19</span><span class="payList_time_way color_red">失败</span>
                </div>
            </van-col>
            <van-col span="6">
                <div class="payList_money">-1000</div>
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
    .payList_container{
        padding:10px 20px;
        border-top:1px solid #aaa;
        .payList_icon{
            width:30px;
            height:30px;
            border-radius: 50%;
            background:chocolate;
            color:#fff;
            font-size:18px;
            font-weight: bold;
            text-align: center
        }
        .payList_payway{
            font-weight: 700;
            margin-bottom: 5px;
            .payList_payway_way{
                margin-left:10%
            }
            .payList_name{
                margin-left:5%
            }
        }
        .payList_time{
            font-size:14px;
            color:#888;
            .payList_time_way{
                margin-left:10px;
            }
        }
        .payList_money{
            font-size:18px;
            font-weight:bold;
            text-align: right;
            color:chocolate
        }
    }
    .color_red{
        color:red
    }
    .color_background{
        background:#ff7f50;
    }
</style>
