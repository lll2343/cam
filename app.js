// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res)
        var code = res.code;
        var appid = 'wx686e7c45da1ab39f'; // 微信小程序的appid
        var secret = '7034ad6bfdded8a380ea128382f075fe'; // 小程序secret
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          header: {
            'content-type': 'application/json'
          },
          success: function(res){
            console.log(res)
            console.log('openid为',res.data.openid)
          }
        })
      }
    })
  },
  // 全局变量
  globalData: {
    userInfo: {
      nickName: "",
      avatarUrl: "",
      host: 'https//**' // 域名前缀
    }
  }
})