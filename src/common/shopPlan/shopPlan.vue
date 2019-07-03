<template>
    <div>
        <van-row type="flex" align="center">
            <van-col span="20">
                <div class="start_time">
                    <van-field
                        v-model="userListForm.start_time"
                        label="开始时间"
                        placeholder="选择时间"
                        readonly="readonly"
                        @click="startTimePop = true"
                        ref="start"
                    />
                    <van-popup v-model="startTimePop" label="开始时间" position="bottom" :overlay="true">
                        <van-datetime-picker
                            v-model="startDate"
                            type="date"
                            @cancel="startTimePop = false"
                            @confirm="startTimePop = false"
                            @change="startTimeChange"
                            :min-date="minDate"
                        />
                    </van-popup>
                </div>
                <div class="end_time">
                        <van-field
                        v-model="userListForm.end_time"
                        label="结束时间"
                        placeholder="选择时间"
                        readonly="readonly"
                        @click="endTimePop = true"
                        ref="end"
                    />
                    <van-popup v-model="endTimePop" label="结束时间" position="bottom" :overlay="true">
                        <van-datetime-picker
                            v-model="currentDate"
                            type="date"
                            @cancel="endTimePop = false"
                            @confirm="endTimePop = false"
                            @change="endTimeChange"
                            :min-date="minDate"
                        />
                    </van-popup>
                </div>
            </van-col>
            <van-col span="4">
                <span>共<em>{{iDays}}</em>天</span>
            </van-col>
          </van-row>
          <div v-show="plepolNum">
            <van-row type="flex" align="center" class="title-font">
                <van-col span="6" >
                    <span style="margin-left:20px">出行人数</span>
                </van-col>
                <van-col span="12">
                    <textarea style="color:red;border:1px solid blue" rows="10" cols="30" ref="text">
                        请输入用户信息或者粘贴用户信息
                    </textarea>
                </van-col>
                <van-col span="6">
                    <van-button type="primary" @click="peopleNum">提交</van-button>
                </van-col>
            </van-row>
          </div>
          <div v-show="!plepolNum" class="title-font padding_left" >
              <van-cell-group   class="font_weight">
                <van-cell title="被保人信息"  />
              </van-cell-group>
              <van-row type="flex" align="center" justify="center">
                  <van-col class="line_border"  span="4">序号</van-col>
                  <van-col class="line_border border_left"  span="6">姓名</van-col>
                  <van-col class="line_border border_left"  span="16">证件号</van-col>
              </van-row>
            <div v-for="(item ,index) in plepolData">
              <van-row type="flex" align="center" justify="center" 
              :birthday="item.birthday" 
              :gender="item.gender"
              :certType="item.cert_type"
              
              >
                    <van-col class="line_border border_top "  span="4">{{index+1}}</van-col>
                    <van-col class="line_border border_top border_left"  span="6">{{item.name}}</van-col>
                    <van-col class="line_border border_top border_left"  span="16">{{item.cert_code}}</van-col>
              </van-row>
              </div>
          </div>
    </div>
</template>
<script>
import ERRER_OK from '@/utils/index'
import api from '@/config/constant/xh.js'
import { Post,Get } from '@/request/' 

import axios from 'axios'
import Qs from 'qs'

export default {
    props:['abc'],
    data(){
        return{
             userListForm:{
                end_time:null,
                start_time:null
             },
             startTimePop:false,
             endTimePop:false,
             currentDate:new Date,
             startDate :new Date ,
             timeNow:null,
             nowTime:null,
             minDate:new Date,
             iDays:null,
             /**** 获取人数数据**/
             plepolNum:true,
             plepolData:[],
             birthday:null,
             gender:null,
             peopleAll:[]
        }
    },
    created(){
         this.shoppingSafe();
    },
     mounted(){
        this.timeFormate(new Date());
        this.timeTomorrom(new Date())
        console.log( this.userListForm.end_time,this.userListForm.start_time)
        this.dateDiff(this.userListForm.end_time,this.userListForm.start_time)
        
    },
    methods:{
        startTimeChange(e){
            let startTimer =e.getValues();
            console.log(this.userListForm.start_time +"开始时间")
            return  this.userListForm.start_time = `${startTimer[0]}-${startTimer[1]}-${startTimer[2]} `
        },
        endTimeChange(e) {
            let endTimeArr = e.getValues();
            console.log(this.userListForm.end_time+"结束时间")
           return  this.userListForm.end_time = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]} `
        },
        // 获取当前时间函数
         timeFormate(timeStamp) {
            let year = new Date(timeStamp).getFullYear();
            let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
            let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
            this.userListForm.start_time=year + "-" + month + "-" + date  ;
        },
        //获取第二天时间函授
        timeTomorrom(timeStamp){
            let year = new Date(timeStamp).getFullYear();
            let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
            let date =new Date(timeStamp).getDate()+1 < 10? "0" + (new Date(timeStamp).getDate()+1): new Date(timeStamp).getDate()+1;
            this.userListForm.end_time=year + "-" + month + "-" + date  ;
        },
        //获取两时间段之间的时间差
        dateDiff : function(sDate1,sDate2) {
            var date2 = new Date(Date.parse(sDate2.replace(/-/g,   "/")));
            var date1 = new Date(Date.parse(sDate1.replace(/-/g,   "/")));
            const Dvalue = (date1.getTime()-date2.getTime())/1000/60/60/24
            if(Dvalue<0){
                this.iDays=1;
            }else if(Dvalue>0 && Dvalue<2){
                this.iDays=2;
            }else {
                this.iDays=parseInt(Dvalue)+2
            }
            return this.iDays;
            console.log(this.iDays)
        },
        /****人数提交* */
       peopleNum(){
           const input=this.$refs.text.value;
           console.log(input);
           /*  
            * 本地测试可以用，get (api.insurepa,)
            * */
           const url="https://serv.ltsoftware.net/insure/namelist/parse"
            Get(url,{"input":input}).then((res)=>{
                const {code ,data}=res.data;
                if(code == ERRER_OK){
                     this.plepolData=data;
                     this.peopleAll=data;
                     this.plepolNum=false;
                     console.log( this.peopleAll)
                }else{
                    alert("数据格式不对")
                }
            }).catch((err)=>{
                alert(err)
            })
       },
       /***购买保险* */
       shoppingSafe(){

           const dataes={};
            dataes.base_info={
                productId:"445",
                period:"2",
                begin_datetime:"2019-07-01 00:00:00",
                end_datetime:"2019-07-02 23:00:00",
            }
            dataes.insurant_info=[{
                birthday: "1989-11-08",
                cert_code: "421182198911085531",
                cert_type: "I",
                gender: "M",
                name: "干晓虎",
            },{
                birthday: "1991-02-12",
                cert_code: "421182199102125163",
                cert_type: "I",
                gender: "F",
                name: "胡丽华"
            }]
            dataes.holder_info={
                 birthday: "1989-11-08",
                cert_code: "421182198911085531",
                cert_type: "I",
                gender: "M",
                name: "干晓虎",
            }
          console.log(dataes)
          console.log(Qs.stringify(dataes))

        axios({
            headers: {
               'content-type':'application/json;charset=UTF-8'//headers 头部字段
            },
            method: 'post',//请求方式
            url: 'https://serv.ltsoftware.net/insure/apply',//请求地址
            // data: Qs.stringify(dataes) //序列化json字符串
            data: dataes //序列化json字符串
        })
          
        //   axios.post('https://serv.ltsoftware.net/insure/apply',Qs.stringify(dataes),{
        //       headers: {
        //         'Content-Type':'application/json;charset=UTF-8'
        //       },
        //   })
        //     .then(response => {
        //     console.log(response);
        //     })
        //     .catch(err => {
        //     console.log(err);
        //     });
       }
    }
}
</script>
<style lang="scss" scoped>
.padding_left{
    padding:10px;
}
.title-font{
    font-size: 14px;
}
.line_border{
    border:1px solid rgb(120, 72, 182)
}
.border_top{
    border-top:none
}
.border_left{
    border-left:none
}
.font_weight{
    font-weight:bold
}
</style>
