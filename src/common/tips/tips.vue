<template>
<div class="tips">
    <van-cell-group class="title">
        <van-cell title="投保须知" value="" is-link  :arrow-direction="fada?'down ':''"  
         @click="fada = !fada"
    />
    </van-cell-group>
    <div v-show="fada">
        <van-row>
            <van-col span="24">
                1.投保范围：被保险人为30天至90周岁、身体健康、能正常工作或正常生活的自然人。
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24">
                2.所有当日投保、当日起保的保单，除旅程阻碍保障责任次日零时生效外，该保单其它保险责任均以保单载明的起保时间生效，航班延误或旅程变更等保险责任以保单载明的起保时间的次日零时生效。
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24">
                3.本保险产品计划承保自由行、自驾、和高风险运动。
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24">
                4.不承保前往处于战争状态或已被宣布为紧急状态的国家或地区，除非本合同另有约定。
            </van-col>
        </van-row>
        <van-row>
            <van-col>
                5.务必下载详细条款交于客户，并仔细阅读保单上的保障内容、特别约定及责任免除条款。
                <a   href="http://qn.aybao.com/Download/product/%E5%AE%89%E6%B8%B8%E4%BF%9D%E6%B0%B8%E5%AE%89%E6%9D%A1%E6%AC%BE181116.pdf">点击下载详细条款</a>
            </van-col>
        </van-row>
    </div>
</div>

   
</template>
<script>
export default {
    data(){
        return {
            fada:false
        }
    }
}
</script>
<style lang="scss" scoped>
    .tips{
        margin:0 10px;
        font-size:14px;
    }
    .title{
        font-weight: bold;
    }
</style>
