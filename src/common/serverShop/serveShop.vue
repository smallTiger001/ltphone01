<template>
    <div class="server">
        <div class="server-header">
            <van-cell-group>
            <van-cell title="地接系统" size="large" value="" />
            </van-cell-group>
        </div>
        <div class="server-body">
            <van-row>
            <van-col span="4">
                <h5>功能简介:</h5>
            </van-col>
            <van-col span="19">
                <span>地接系统是旅游企业的帮手，能帮助企业快速的完成旅游行业的方方面面的数据问题，财务问题，报表问题。</span>
            </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" align="center">
            <van-col span="4">
                <h5>供应商:</h5>
            </van-col>
            <van-col span="19">
                <span>深圳旅通软件科技有限公司</span>
            </van-col>
        </van-row>
        <van-row type="flex" justfy="spance-around" align="center">
            <van-col span="4">
                <h5>价格:</h5>
            </van-col>
            <van-col span="6">
                <span>¥ <em>200</em></span>
            </van-col>
            <van-col span="6">
                <span>销量</span>
            </van-col>
            <van-col span="7">
                <span>700</span>
            </van-col>
        </van-row>
        <van-row type="flex" justfy="spance-around" align="center">
            <van-col span="4">
                <h5>时间</h5>
            </van-col>
            <van-col span="3">
                <van-button plain type="info" size="small">一个月</van-button>
            </van-col>
            <van-col span="3" offset="1">
                <van-button plain type="info" size="small" >3个月</van-button>
            </van-col>
            <van-col span="3" offset="1">
                <van-button plain type="info" size="small" >半年</van-button>
            </van-col>
            <van-col span="3" offset="1">
                <van-button plain type="info" size="small" >一年</van-button>
            </van-col>
            <van-col span="3" offset="1">
                <van-button plain type="info" size="small" >两年</van-button>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="4">
            </van-col>
            <van-col span="10">
                <van-button  type="info" size="small" >订购</van-button>
            </van-col>
        </van-row>
        </div>

        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .server-body{
        padding:20px 0;
    }
</style>
