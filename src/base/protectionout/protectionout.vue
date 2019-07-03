<template>
    <div class="safe">
        <van-cell-group class="title">
            <van-cell title="保障范围" value="" is-link :arrow-direction="safechange ? 'down' : ''" 
            @click="safechange = !safechange"
            />
        </van-cell-group>
        <div v-show="safechange">
            <van-row class="title-font title  ">
                <van-col span="18" >
                <div class="border right just text-center"><span>保障范围</span></div>  </van-col>
                <van-col span="6" >
                <div class="border just text-center"><span>保障金额/元</span></div> </van-col>
            </van-row>
            <van-row class="title title-color title-font ">
                <van-col span="24" class="border top just">个人意外伤害及医疗保障</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">意外身故，残疾及烧烫伤</van-col>
                <van-col span="6" class="border top just text-aling">￥10,0000</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">意外伤害医疗</van-col>
                <van-col span="6" class="border top just text-aling">￥20,000</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">意外伤害及急性病住院津贴（最高30天）</van-col>
                <van-col span="6" class="border top just text-aling">￥30/天</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">丧葬费用</van-col>
                <van-col span="6" class="border top just text-aling">￥5,000</van-col>
            </van-row>
            <van-row class="title-font title title-color ">
                <van-col span="24" class="border top just">突发急性病保障</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">突发急性病身故（含猝死）</van-col>
                <van-col span="6" class="border top just text-aling">￥50,000</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">突发急性病医疗</van-col>
                <van-col span="6" class="border top just text-aling">￥20,000</van-col>
            </van-row>
            <van-row class="title-font title title-color ">
                <van-col span="24" class="border top just">公共交通意外保障</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">乘坐客运民航班机意外身故</van-col>
                <van-col span="6" class="border top just text-aling">￥100,000</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">乘坐客运轮船意外身故</van-col>
                <van-col span="6" class="border top just text-aling">￥100,000</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">乘坐客运轨道交通车辆意外身故</van-col>
                <van-col span="6" class="border top  just text-aling">￥100,000</van-col>
            </van-row>
            <van-row class="title-font ">
                <van-col span="18" class="border top right just">乘坐客运机动车意外身故</van-col>
                <van-col span="6" class="border top just text-aling">￥50,000</van-col>
            </van-row>
        </div>    
    </div>
</template>
<script>

export default {
    data(){
        return{
            safechange:false
        }
    },
}
</script>
<style lang="scss" scoped>
     .safe{
        margin:0 10px;
    }
    .title{
        font-weight: bold;
    }
    .title-color{
        color:red;
    }
    .title-font{
        font-size:12px;
    }
    .just{
        padding: 5px;
    }
    .border{
        border:1px solid rgba(183,123,41,1)
    }
    .top{
        border-top:none;
    }
    .right{
        border-right:none;
    }
    .text-aling{
        text-align:right;
    }
    .text-center{
        text-align:center;
    }
    .time-date{
        margin-top:20px;
    }
</style>
