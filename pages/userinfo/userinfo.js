
const app = getApp();
// pages/userinfo/userinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // region: [],
    userinput:{
      Sex:'',
      Name:'',
      Grade: '',
      Height: '',
      Weight: '',
      Age:''
    },
    userInfo:{},
    region: ['', '', '城市'],
    customItem: '全部',
    sex:{
      nan:"https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/messageInput/boy_h.png",
      nv: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/messageInput/girl_h.png"
    },
    array1: ['6岁', '7岁', '8岁', '9岁', '10岁', '11岁', '12岁', '13岁', '14岁', '15岁', '16岁', '17岁', '18岁', '19岁', '20岁', '21岁', '22岁'],
    fi_index: 0,
    array2: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三', '大一', '大二', '大三', '大四'],
    se_index: 0,
    array3: ['60cm', '65cm', '70cm', '75cm', '80cm', '85cm', '90cm', '95cm', '100cm', '105cm', '110cm', '115cm', '120cm', '125cm', '130cm', '135cm', '140cm', '145cm', '150cm', '155cm', '160cm', '165cm', '170cm', '175cm', '180cm', '185cm', '190cm', '195cm', '>195cm'],
    tr_index: 0,
    array4: ['30kg<', '31kg', '32kg', '33kg', '34kg', '35kg', '36kg', '37kg', '38kg', '39kg', '40kg', '41kg', '42kg', '43kg', '44kg', '45kg', '46kg', '47kg', '48kg', '49kg', '50kg', '51kg', '52kg', '53kg', '54kg', '55kg', '56kg', '57kg', '58kg', '59kg', '60kg', '61kg', '62kg', '63kg', '64kg', '65kg', '66kg', '67kg', '68kg', '69kg', '70kg', '71kg', '72kg', '73kg', '74kg', '75kg', '76kg', '77kg', '78kg', '79kg', '80kg', '>80kg'],
    fo_index: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onLoad: function () {
   
    //如果没有清除缓存就跳转到相应详情页，否则就写入缓存
    if (app.globalData.userInfo) {
      this.setData({ 
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        // region: ['', app.globalData.userInfo.province, app.globalData.userInfo.city]
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          // region: ['', res.userInfo.province, res.userInfo.city]
        });

      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            // region: ['', res.userInfo.province, res.userInfo.city]
          })
        }
      })
    }
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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      fi_index: e.detail.value
    })
  },
  bindPickerChange_2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      se_index: e.detail.value
    })
  },
  bindPickerChange_3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tr_index: e.detail.value
    })
  },
  bindPickerChange_4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      fo_index: e.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  userlogin: function(e){
    // wx.showToast({
    //   title: '1...',
    //   icon: 'loading',
    //   duration: 2000
    // });
    let that = this;
    let _userinput = that.data.userinput;
    _userinput.city = that.data.region[1] + that.data.region[2];
    _userinput.Age = parseInt(that.data.fi_index)+6;
    _userinput.Grade = that.data.array2[that.data.se_index]
    _userinput.Height = parseFloat((parseInt(that.data.tr_index*5)+60)/100);
    _userinput.Weight = parseInt(that.data.fo_index)+30;
    if (!_userinput.Name){
        return wx.showToast({
          title: '记得填写名字哦',
          icon: 'loading',
          duration: 1000
        })
    } else if(!_userinput.Sex){
      return wx.showToast({
        title: '记得选择性别哦',
        icon: 'loading',
        duration: 1000
      })
    } else if (that.data.region[2] == '城市' || that.data.region[2] == '全部') {
      return wx.showToast({
        title: '记得选择城市哦',
        icon: 'loading',
        duration: 1000
      })
    }
    wx.request({
      url: 'https://safety.yiyouqi.com/SportsTalent/addStudentGetId',
      // url: 'http://192.168.1.66:8080/addStudentGetId',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: _userinput,
      success: function (res) {
        _userinput.userId = res.data;
        wx.setStorageSync('userMessage', _userinput);
        // wx.showToast({
        //   title: '2...',
        //   icon: 'loading',
        //   duration: 2000
        // });
        wx.navigateTo({
          url: '../point/point',
        })
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
  }

  //性别选项
  ,"sexChooseNan":function(){
    let that = this;
    let _userinput = that.data.userinput;
    _userinput.Sex = "男";
    this.setData({
      sex: {
        nan: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/messageInput/boy.png",
        nv: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/messageInput/girl_h.png"
      },
      userinput: _userinput
    })
  }
  , "sexChooseNv": function () {
    let that = this;
    let _userinput = that.data.userinput;
    _userinput.Sex = "女";
    this.setData({
      sex: {
        nan: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/messageInput/boy_h.png",
        nv: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/messageInput/girl.png"
      },
      userinput: _userinput
    })
  }
  // 填写表单
  ,"inputName":function(e){
    let that = this;
    let _userinput = that.data.userinput;
    _userinput.Name= e.detail.value
    this.setData({
      userinput: _userinput
    })
  }




// 城市对象
  
})