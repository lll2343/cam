// pages/feedback/feedback.js
import Notify from './../../miniprogram_npm/vant-weapp/notify/notify';
import Toast from './../../miniprogram_npm/vant-weapp/toast/toast';

Page({
  data: {
    num: 3,
    value: "",
    message: "",
  },
  getValue: function(e){
    this.setData({
      value: e.detail
    })
  },
  getMessage: function(e){
    this.setData({
      message: e.detail
    })
  },
  onChange: function(event) {
    this.setData({
      num: event.detail
    });
  },
  submit: function(){
    if(this.data.value=="" || this.data.message==""){
      Notify({type: 'warning', 
              message: '请完整输入',
              duration: 1000 });
    } else {
      console.log(this.data.value,this.data.message,this.data.num);
      // 发送，如果成功则显示成功，失败则显示失败
      // 
      Toast({
        type: "success",
        message: "提交成功",
        forbidClick: true,
        duration: 2000
      })
      setTimeout(function(){
        wx.switchTab({
          url: "./../mine/mine"
        })
      },2000);
    }
  }
})