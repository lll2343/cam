// pages/results/results.js
Page({
  data: {
    getdatasuccess: 2, // 0是没有搜索结果，1是网络错误（此处应该有刷新），2是正确
    value: "",
    result:[{
      id:1, name:"lyz"
    },{
      id:2, name:"lzy"
    },{
      id:3, name:"ll"
    }]
  },
  onLoad: function(e){
    this.setData({
      value: e.value
    })
    console.log("onload",this.data.value)
    // 此处发送请求，如果没有结果，getdatasuccess==0
    // 网络错误，getdatasuccess==1
    // 请求成功，getdatasuccess==2,还有设置result
  },
  backToIndex: function(){
    console.log("back");
    wx.switchTab({
      url: './../index/index',
    });
  },
  refreshPage: function() {
    console.log("点击刷新，重新请求并渲染")
  },
  toDetailPage: function(e) {
    console.log(e.currentTarget.dataset.index)
  }
})