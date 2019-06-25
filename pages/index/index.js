//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test_number:'0',
    motto: 'Hello World',
    userInfo: {},
    isHdie:false,
    user_name:'天赋发掘',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navigator_page:'../userinfo/userinfo',
    pngSrc: 'https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/index/1.png',
    positionNum:'0',
    isIpnone:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    let that = this;
    if (wx.getStorageSync("user_name")) {
      that.setData({
        user_name: wx.getStorageSync("user_name")
      })
    }

    wx.getSystemInfo({
      success: function (res) {
        // rpx = res.windowWidth / 375;
        console.log(res.windowWidth / res.windowHeight);
        if (res.windowWidth / res.windowHeight < 0.52) {
          that.setData({
            isIpnone: true
          })
        }

      },
    })
    
    let ungId= 1
    setInterval(function(){
      ungId++;
      switch (ungId%3){
        case 0:
        that.setData({
          pngSrc: 'https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/index/1.png'
        })
          break;
        case 1:
          that.setData({
            pngSrc: 'https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/index/2.png'
          })
          break;
        case 2:
          that.setData({
            pngSrc: 'https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/index/3.png'
          })
          break;
      }
    },1000)
    let num = 0;
    setInterval(function(){
      if(num < -220){
        num = 220
      }else{
        num-=0.5
      }
      that.setData({
        positionNum:num,
      })
    },10)


    wx.request({
      url: 'https://safety.yiyouqi.com/SportsTalent/getGradeNumber',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        
        that.setData({
          test_number: res.data.data
        })
      },
      fail: function () {
        console.log("接口调用失败");
        wx.showToast({
          title: '接口调用失败,请稍后',
          icon: 'loading',
          duration: 2000
        })

        setTimeout(function () {
          wx.hideToast()
        }, 2000)
      }
    })
// **************************************
    if (!wx.getStorageSync("user_openId")){
      console.log("------------------------------------------------")
    wx.login({
      success: function (res) {


        console.log("------------------------------------------------------");
        let d = app.globalData;//这里存储了appid、secret、token串  

        let l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';

        wx.request({

          url: l,

          data: {},

          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  

          // header: {}, // 设置请求的 header  

          success: function (res) {

            var obj = {};

            obj.openid = res.data.openid;

            obj.expires_in = Date.now() + res.data.expires_in;


            console.log("------------------------------------------------------");
            
            console.log(obj);

            wx.setStorageSync('user_openId', obj);//存储openid  
            app.globalData.openid = res.data.openid;
            console.log(res.data.openid)
          }

        });


      }
    })
    }else{
      app.globalData.openid = wx.getStorageSync("user_openId");
    }

// **************************************************


    if (wx.getStorageSync('userMessage').userId != null){
      that.setData({
        navigator_page: '../userDetail/userDetail'
      })
    }
    if (app.globalData.userInfo) {
      console.log("1" + app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (wx.getStorageSync('userInfosession')){
      app.globalData.userInfo = wx.getStorageSync('userInfosession');
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
    else{ // isHdie: false,
    let that = this;
      wx.getSetting({
        success:function(res){
        if(!res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
            app.globalData.userInfo = res.userInfo
            that.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
              if (app.userInfoReadyCallback) {
                app.userInfoReadyCallback(res)
                }

              // let user = wx.getStorageSync('user_openID') || {};
              // if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!res.userInfo.nickName)) {
              //   wx.login({

              //     success: function (res) {
              //       let d = app.globalData;//这里存储了appid、secret、token串  

              //       let l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';

              //       wx.request({

              //         url: l,

              //         data: {},

              //         method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  

              //         // header: {}, // 设置请求的 header  

              //         success: function (res) {

              //           var obj = {};

              //           obj.openid = res.data.openid;

              //           obj.expires_in = Date.now() + res.data.expires_in;

              //           //console.log(obj);

              //           wx.setStorageSync('user', obj);//存储openid  
              //           app.globalData.openid = res.data.openid;
              //           console.log(obj)
              //         }

              //       });

                  
              //     } 
              //   })
              // } else {

              //   console.log('获取用户登录态失败！' + res.errMsg)

              // }


              }
            })
          }
          // else{
          //   wx.navigateTo({
          //     url: '../login/login',
          //   })
          // }
        }
      })
        // wx.navigateTo({
        //   url: '../login/login',
        // })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    console.log('aaaaa');
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo, 
      isHdie: true,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

  }
  ,
  changName: function (event){
    this.setData({
      user_name: event.detail.value
    })
    wx.setStorageSync("user_name", event.detail.value)
  },
})
