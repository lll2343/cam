// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgpath: "",
    position: "back",
    useflash: "off"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

   /**
   * 返回index界面
   */
  backIndex: function() {
    console.log("返回")
    wx.switchTab({
      url: './../index/index',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

   /**
   * 闪光点
   */
  changeLighting: function() {
    console.log("灯光")

    // 这里不知道是手机问题还是版本问题
    // 暂不能用
    // if(this.data.useflash === "off"){
    //   this.setData({
    //     useflash: "on"
    //   })
    //   console.log("打开flash")
    // } else {
    //   this.setData({
    //     useflash: "off"
    //   })
    //   console.log("关闭flash")
    // }
  },

  /**
   * 选择本地图片
   */
  getPhotoFromLocal: function() {
    console.log("从本地选择图片")
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: (res) => {
        console.log(res.tempFilePaths[0])
        this.setData({
          imgpath: res.tempFilePaths[0]
        })
        // 同拍照

        wx.previewImage({
          urls: [this.data.imgpath],
        })

      }
    })
  },


  /**
   * 拍照
   */
  getPhoto: function() {

    console.log("拍摄了一张照片")
    
    const ctx =   wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log("拍照")
        this.setData({
          imgpath: res.tempImagePath
        })
        console.log(this.data.imgpath)

        // post 然后进入下一个界面，识别返回信息
        wx.previewImage({
          urls: [this.data.imgpath],
        })
      }
    })
  },

  /**
   * 翻转摄像头
   */
  changeDirection: function() {
    console.log("翻转摄像头")
    if(this.data.position === "back"){
      this.setData({
        position: "front"
      })
    } else {
      this.setData({
        position: "back"
      })
    }
  }
})