<template>
    <div class="safe">
        <div class="time-date">
            <van-cell-group class="title">
            <van-cell title="价格明细" value="" />
            </van-cell-group>
            <van-row class="title-font title ">
                    <van-col span="24" class="border   just">
                        <span>{{title}}</span>
                    </van-col>
            </van-row>
            <div v-for="item in abc" 
            :id="item.id"
            :productId="item.productId"
            >
                <van-row class="title-font"   >
                    <van-col span="18" class="border top right just">
                        <span v-if="item.maxDay==item.minDay">{{item.minDay}}天</span>
                        <span v-else>{{item.minDay}}-{{item.maxDay}}天</span>
                    </van-col>
                    <van-col span="6" class="border top just text-aling">
                        <span>¥<em>{{item.cost}}</em></span>
                    </van-col>
                </van-row>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:['abc','title'],
    methods:{
        onClick () {
             console.log('on click')
        },
    }
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
