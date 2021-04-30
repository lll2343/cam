// pages/login/login.js

// 获取实例
const app = getApp();

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  getUserProfile: function(e) {
    wx.getUserProfile({
      desc:"授权登录",
      success: function(res) {
        app.globalData.userInfo.nickName = res.userInfo.nickName;
        app.globalData.userInfo.avatarUrl = res.userInfo.avatarUrl;        
        wx.switchTab({
          url: './../index/index',
          success: (result) => {
            console.log("跳转到首页成功")    
          },
          fail: () => {},
          complete: () => {}
        });   
      }
    })
  }
})