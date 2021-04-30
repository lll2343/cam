// index.js
// 获取应用实例
const app = getApp()

import Notify from './../../miniprogram_npm/vant-weapp/notify/notify'

Page({
  data: {
    value: "",
    background: ["demo01","demo02","demo03"],
    avatarUrl: ""
  },
  onShareAppMessage: function (res) {

  },
  onShareTimeline: function(){
    
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onLoad: function() {
    this.setData({
      avatarUrl: app.globalData.userInfo.avatarUrl
    })
  },
  onSearch() {
    console.log('搜索' + this.data.value);
    if(this.data.value == null ||this.data.value == ""){
      console.log("不能为空");
      Notify({ type: 'warning', message: '搜索内容为空' });
    }
    else{
      wx.navigateTo({
        url: './../results/results?value='+this.data.value,
        success: (res)=> {
          this.setData({
            value: ""
          })
        }
      })
    }
  },
  onClick() {
    console.log('搜索' + this.data.value);
  },

  goToDetailPage: function(e){
    console.log("点击")
    console.log(e.target.dataset.index)
    // 跳转到详情页
  },
  goToMinePage: function() {
    wx.switchTab({
      url: './../mine/mine',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },
  useCamera: function() {
    console.log("use camera")
    wx.navigateTo({
      url: './../camera/camera',
      success: (result) => {
        
      },
      fail: (err) => {},
      complete: () => {}
    })
  }

})
