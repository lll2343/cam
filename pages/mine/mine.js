// pages/mine/mine.js

// 获取实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    avatarUrl:"",
    showpopup: false
  },
  /**
   * 加载界面
   */
  onLoad: function() {
    this.setData({
      username: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl
    })
  },
  onShareAppMessage: function (res) {
    console.log(res)
    if(res.from == "button"){
      console.log("从自定义的信息")
    }
    return{
      path: "pages/index",
      success: (res)=> {
        console.log("转发成功")
      }
    }
  },
  onShareTimeline: function(){
    
  },
  // 这个弹出窗不用了~~~~
  // shareApp: function(){
  //   console.log("share")
  //   this.setData({
  //     showpopup: true
  //   })
  // },
  // closePopup: function(){
  //   this.setData({
  //     showpopup: false
  //   })
  // },
})