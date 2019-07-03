<template>
    <div class="service_container">
        <img src="@/assets/ltsoft-ly.png" class="sercice_img" alt="">
        <div class="service_content" @click="serveLink" >
            <van-row type="flex" justify="center" align="center" class="service_item" >
                <van-col span="6">
                    <img src="@/assets/lt1.jpg" alt="" class="service_item_img"/>
                </van-col>
                <van-col span="18">
                    <h3>旅通地接系统</h3>
                    <p>专业地接系统开发</p>
                </van-col>
            </van-row>
        </div>
         <div class="service_content" @click="serveLink">
            <van-row type="flex" justify="center" align="center" class="service_item" >
                <van-col span="6">
                    <img src="@/assets/lt1.jpg" alt="" class="service_item_img"/>
                </van-col>
                <van-col span="18">
                    <h3>旅通地接系统</h3>
                    <p>专业地接系统开发</p>
                </van-col>
            </van-row>
        </div>
         <div class="service_content" @click="serveLink">
            <van-row type="flex" justify="center" align="center" class="service_item" >
                <van-col span="6">
                    <img src="@/assets/lt1.jpg" alt="" class="service_item_img"/>
                </van-col>
                <van-col span="18">
                    <h3>旅通地接系统</h3>
                    <p>专业地接系统开发</p>
                </van-col>
            </van-row>
        </div>
         <div class="service_content" @click="serveLink">
            <van-row type="flex" justify="center" align="center" class="service_item" >
                <van-col span="6">
                    <img src="@/assets/lt1.jpg" alt="" class="service_item_img"/>
                </van-col>
                <van-col span="18">
                    <h3>旅通地接系统</h3>
                    <p>专业地接系统开发</p>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        serveLink(){
            this.$router.push({
                 path:'/server'
             })
        }
    }
}
</script>
<style lang="scss" scoped>
.service_container{
    margin-bottom: 70px;
}
.sercice_img{
    width:100%;
    height:36vw;
    display: block;
}
.service_content{
    // padding:20px 0;
    background:rgba(234,234,234,.2)
}
.service_item{
    background:rgba(67,148,230,1);
    border-radius: 7px;
    padding:10px;
    margin:15px;
}
.service_item_img{
    width:100%;
    height:20vw;
    display:block;
}

</style>
