//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    openid: 0,
    appid: 'wx752be622eea9c5c8',
    secret: 'bd1dd7944249f95d99cdab6a73c88cbe',
  }
  // ,
  // getUserInfo: function (cb) {
  //   var that = this
  //   if (this.globalData.userInfo) {
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   } else {
  //     //调用登录接口
  //     wx.login({
  //       success: function () {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo
  //             typeof cb == "function" && cb(that.globalData.userInfo)
  //           },
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
  // , tapToAuthorize: function () {
  //   //再授权
  //   wx.openSetting({
  //     success: (res) => {
  //       /*
  //        * res.authSetting = {
  //        *   "scope.userInfo": true,
  //        *   "scope.userLocation": true
  //        * }
  //        */
  //       //因为openSetting会返回用户当前设置，所以通过res.authSetting["scope.userInfo"]来判断用户是否勾选了【用户信息】这一项
  //       if (res.authSetting["scope.userInfo"] === true) {
  //         var that = this
  //         app.getUserInfo(function (userInfo) {
  //           //更新数据
  //           that.setData({
  //             userInfo: userInfo,
  //             noAuthorized: false
  //           })
  //         })
  //       }
  //       else {
  //         wx.showModal({
  //           title: '用户未授权',
  //           content: '如需正常使用小程序，请点击授权按钮，勾选用户信息并点击确定。',
  //           showCancel: false,
  //           success: function (res) {
  //             if (res.confirm) {
  //               console.log('用户点击确定')
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  // }
})