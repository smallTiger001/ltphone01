<template>
    <div>
         <van-tabs v-model="active">
             <van-tab title="计划二[10万]">
                <safe  :abc="abc" :title="title01"></safe>
                <protection></protection>
                <tips></tips>
                <shop-plan :abc="abc" ></shop-plan>
            </van-tab>
            <van-tab title="计划三[20万]">
                <safe :abc="abc01" :title="title02"></safe>
                <protectionsecend></protectionsecend>    
                <tips></tips>
                <shop-plan :abc="abc01" ></shop-plan>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import safe from "@/common/safe/safe"
import tips from "@/common/tips/tips"
import shopPlan from "@/common/shopPlan/shopPlan"
import protection from '@/base/protection/protection'
import protectionsecend from '@/base/protectionsecend/protectionsecend'

export default {
    components:{
        safe,
        tips,
        shopPlan,
        protection,
        protectionsecend,
    },
    props:['safePlanData'],
    data() {
        return {
            active: 0,
            title01:null,
            title02:null,
        };
    },
    computed:{
        abc:function(){
            const key=Object.keys(this.safePlanData);
            this.title01=key[0];
            this.title02 = key[1];
            console.log(key)
            console.log(this.safePlanData)
            console.log(this.safePlanData['[国内基础型]-计划二[10万]'])
            return this.safePlanData['[国内基础型]-计划二[10万]']
        },
        abc01:function(){
            return this.safePlanData['[国内基础型]-计划三[20万]']
        },
        productId01:function(){
            console.log(this.safePlanData['[国内基础型]-计划二[10万]'].productId)
            return this.safePlanData['[国内基础型]-计划二[10万]'].productId
        },
        productId02:function(){
            console.log(this.safePlanData['[国内基础型]-计划三[20万]'].productId)
            return this.safePlanData['[国内基础型]-计划三[20万]'].productId
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
