<template>
    <div class="server">
        <div class="server_header">
           <van-nav-bar
            left-arrow
            title="地接系统"
            @click-left="onClickLeft"
            />
        </div>
        <div class="server_body">
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
                <van-button  type="info" size="small" to="/ordermoney">订购</van-button>
               <!--手机验证    <van-button  type="info" size="small" @click="show=true" >订购</van-button>-->
            </van-col>
        </van-row>
        </div>
      <van-dialog
        v-model="show"
        title="手机号绑定"
        show-cancel-button
        @confirm="getphone"
        >
        <van-cell-group>
             <van-field
                v-model="phone"
                required
                label="手机号"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
                maxlength="11"
            />
            <van-field
                v-model="code"
                center
                clearable
                label="短信验证码"
                maxlength="8"
                placeholder="请输入短信验证码"
            >
                <van-button slot="button" :disabled="disabled" size="small" type="primary" @click="sendcode">{{btntxt}}</van-button>
            </van-field>
        </van-cell-group>
      </van-dialog>
    </div>
</template>
<script>
import ERRER_OK from '@/utils/index'
import api from '@/config/constant/xh.js'
import { Post,Get } from '@/request/' 
export default {
    data(){
        return {
            show:false,
            phone:"",
            code:"",
            time:0,
            disabled:false,
            btntxt:"获取验证码"
        }
    },
    methods:{
        sendcode(){
            const userPhone=this.phone;
            var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(this.phone ==''){
                this.$toast("手机号不能为空");
            }else if(!reg.test(this.phone)){
                this.$toast("手机号格式不正确")
            }else{
                this.time=60;
                this.disabled=true;
                //验证码的时间设置
                this.timer();
                console.log(api.phonecode)
                Get(api.phonecode,{phone:userPhone}).then((res)=>{
                    const {error ,data}=res.data;
                    console.log(error,data);
                }).catch((err)=>{
                    alert(err)
                })
            }
        },
        timer(){
            if(this.time>0){
                this.time--;
                this.btntxt=this.time+"s后获取";
                setTimeout(this.timer,1000);
            }else{
                this.time=0;
                this.btntxt="获取验证码";
                this.disabled=false;
            }
        },
        getphone(){
            const phoneNum=this.phone
            const phoneCode =this.code
            Get(api.phonebind,{phone:phoneNum,code:phoneCode}).then((res)=>{
                    const {error ,data}=res.data;
                    console.log(error,data);
                    this.$router.push({
                        path:'/paylist'
                    })
                }).catch((err)=>{
                    alert(err)
            })
        },
        /*************以上是手机验证码******/
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    .server_body{
        padding:30px 0;
    }
</style>
