const app = getApp()

Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        app.globalData.userInfo = res.userInfo;
        wx.setStorageSync('userInfosession', e.detail.userInfo);
        wx.navigateTo({
          url: '../index/index'
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      app.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          wx.redirectTo({
            url: '../index/index'
          })
        }
      })
    }
  },
  
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo;
    wx.setStorageSync('userInfosession', e.detail.userInfo);
    wx.getSetting({
      success:function(res){
        if (res.authSetting['scope.userInfo']) {
          wx.navigateTo({
            url:'../index/index'
          })
        }
      }
    })
    // setTimeout(function(){
    //   wx.navigateTo({
    //     url:'../index/index'
    //   })
    // },1500)
  }
  

  // allow: function (e) {
  //   console.log("111");
  //   var that = this
  //   if (app.globalData.userInfo) {
  //     typeof cb == "function" && cb(app.globalData.userInfo)
  //   } else {
  //     //调用登录接口
  //     wx.login({
  //       success: function () {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             console.log("222")
  //             app.globalData.userInfo = res.userInfo;
  //             wx.setStorageSync('userInfosession', res.userInfo);
  //             console.log("333")
  //               wx.navigateTo({
  //                 url: '../index/index'
  //               })
  //             },
  //           fail: function () {
  //             wx.showModal({
  //               title: '用户未授权',
  //               content: '如需正常使用小程序功能，请按确定并且在【我的】页面中点击授权按钮，勾选用户信息并点击确定。',
  //               showCancel: false,
  //               success: function (res) {
  //                 if (res.confirm) {
  //                   console.log('用户点击确定')
  //                 }
  //               }
  //             })
  //           }
  //         })
  //       }
  //     })
  //   }
  // }
})