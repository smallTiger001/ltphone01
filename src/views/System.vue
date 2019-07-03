<template>
    <div class="system">
         <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
         <van-row>
             <van-col span="24" class="system-text system-color system-fang">本产品的服务主体是太平洋保险</van-col>
        </van-row>
        <van-row>
            <van-col span="24"><h2>这块内容主要做保险宣传，可参考平安金管家，抗癌先峰</h2></van-col>
        </van-row>
        <van-tabs v-model="active">
            <van-tab title="国内游意外险类型">
                <safe-plan :safePlanData="safePlanData"></safe-plan>
            </van-tab>
            <van-tab title="出境游意外险类型">
                <exit-safeplan :exitSafeplanData="exitSafeplanData"></exit-safeplan>
            </van-tab>
        </van-tabs>
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
        />
    </div>
</template>
<script>
import safePlan from "@/common/safePlan/safePlan"
import exitSafeplan from '@/common/exitsafeplan/exitsafeplan'
import ERRER_OK from '@/utils/index'
import api from '@/config/constant/xh.js'
import { Post,Get } from '@/request/' 


export default {
    components:{
       safePlan,
       exitSafeplan
    },
    data() {
        return {
            active: 0,
            safePlanData:[],
            exitSafeplanData:[]
        };
    },
    created(){
        console.log(api.insure)
        /*
         *本地环境用get(api.insure).then()
         *  测试环境用 
         * */
        const url="https://serv.ltsoftware.net/insure/product/list"
        Get(url).then((res)=>{
                const {error ,data}=res.data;
                console.log(error,data);
                this.safePlanData=data.inbound;
                this.exitSafeplanData=data.outbound;
                console.log(this.safePlan,this.exitSafeplan)
        }).catch((err)=>{
                alert(err)
        })
    },
    methods:{
        onSubmit(){
            this.$router.push({name:'success'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .system{
        padding-bottom: 4rem;
    }
    .user-poster{
        width: 100%;
        height: 53vw;
        display: block;
    }
    .system-text{
        font-size:12px;
    }
    .system-color{
        color:#ccc;
    }
    .system-fang{
        text-align:right;
    }
</style>
