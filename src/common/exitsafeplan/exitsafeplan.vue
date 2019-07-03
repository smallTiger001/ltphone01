<template>
    <div>
         <van-tabs v-model="active">
             <van-tab title="计划三[30万]">
                <safe :abc="abc" :title="title03"></safe>
                <protectionout></protectionout>
                <tips></tips>
                <shop-plan></shop-plan>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import safe from "@/common/safe/safe"
import tips from "@/common/tips/tips"
import shopPlan from "@/common/shopPlan/shopPlan"
import protectionout from "@/base/protectionout/protectionout"
export default {
    components:{
        safe,
        tips,
        shopPlan,
        protectionout
    },
    props:['exitSafeplanData'],
    data() {
        return {
            active: 0,
            title03:null
        };
    },
    computed:{
        abc:function(){
            const key=Object.keys(this.exitSafeplanData);
            this.title03=key[0]
            return this.exitSafeplanData['[出境基础型]-计划四[30万]']
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
