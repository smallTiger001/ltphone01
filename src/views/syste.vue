<template>
    <div class="system">
         <img class="user-poster" src="@/assets/lt-ad-dz.png">
        <div  @click="systeAgin">
            <van-row class="system_item" type="flex" justify="space-around" align="center" >
                <van-col span="18">
                    <h2>旅通系统电子保险</h2>
                    <p>在美好的旅途中保您一路平安</p>
                </van-col>
                <van-col span="6">
                    <img src="@/assets/lt-ad-dz.png" alt="" class="system_image">
                </van-col>
            </van-row>
        </div>
       <div  @click="systeAgin">
            <van-row class="system_item" type="flex" justify="space-around" align="center" >
                <van-col span="18">
                    <h2>旅通系统电子保险</h2>
                    <p>在美好的旅途中保您一路平安</p>
                </van-col>
                <van-col span="6">
                    <img src="@/assets/lt-ad-dz.png" alt="" class="system_image">
                </van-col>
            </van-row>
        </div>
         <div  @click="systeAgin">
            <van-row class="system_item" type="flex" justify="space-around" align="center" >
                <van-col span="18">
                    <h2>旅通系统电子保险</h2>
                    <p>在美好的旅途中保您一路平安</p>
                </van-col>
                <van-col span="6">
                    <img src="@/assets/lt-ad-dz.png" alt="" class="system_image">
                </van-col>
            </van-row>
        </div>
         <div  @click="systeAgin">
            <van-row class="system_item" type="flex" justify="space-around" align="center" >
                <van-col span="18">
                    <h2>旅通系统电子保险</h2>
                    <p>在美好的旅途中保您一路平安</p>
                </van-col>
                <van-col span="6">
                    <img src="@/assets/lt-ad-dz.png" alt="" class="system_image">
                </van-col>
            </van-row>
        </div>
      
    </div>
</template>
<script>
export default {
  methods:{
      systeAgin(){
        //   this.$router.push({path:'/system'})
        // this.$router.replace('/login')
         this.$router.push({name:"system"})
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
    .system_item{
        padding:20px ;
        background:#eee;
        margin-bottom:15px;

    }
    .system_image{
        width:100%;
        height:23vw;
        display: block;
    }
</style>
