// pages/poinrt/point.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //初始颜色
    fichoose:'#ccc',
    sechoose: '#ccc',
    trchoose: '#ccc',
    fochoose: '#ccc',
    fivchoose: '#ccc',
    // piker数据
    isHide:true,
    array: ['4x10米往返跑','5s<', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s', '14s', '15s', '15+s'],
    fi_index: 0,

    array_2: ['1分钟仰卧起坐', '6个', '7个', '8个', '9个', '10个', '11个', '12个', '13个', '14个', '15个', '16个', '17个', '18个', '19个', '20个', '21个', '22个', '23个', '24个', '25个', '26个', '27个', '28个', '29个', '30个', '31个', '32个', '33个', '34个', '35个', '36个', '37个', '38个', '39个', '40个', '41个', '42个', '43个', '44个', '45个', '46个', '47个', '48个', '49个', '50个', '51个', '52个', '53个', '54个', '55个', '56个', '57个', '58个', '59个', '60个', '60+' ],
    se_index: 0,

    array3: ['1分钟跳绳', '1-5次', '6-10次', '11-15次', '16-20次', '21-25次', '26-30次', '31-35次', '36-40次', '41-45次', '46-50次', '51-55次', '56-60次', '61-65次', '66-70次', '71-75次', '76-80次', '81-85次', '86-90次', '91-95次', '96-100次', '101-105次', '106-110次', '111-115次', '116-120次', '121-125次', '126-130次', '131-135次', '136-140次', '141-145次', '146-150次', '151-155次', '156-160次', '161-165次', '166+次'],
    tr_index: 0,

    array4: ['坐位体前屈', '-10cm', '-9cm', '-8cm', '-7cm', '-6cm', '-5cm', '-4cm', '-3cm', '-2cm', '-1cm', '0cm', '1cm', '2cm', '3cm', '4cm', '5cm', '6cm', '7cm', '8cm', '9cm', '10cm', '11cm', '12cm', '13cm', '14cm', '15cm', '16cm', '17cm', '18cm', '19cm', '20cm', '21cm', '22cm', '23cm', '24cm', '25cm', '>25cm'],
    fo_index: 0,

    array5: ['肺活量', '500ml<', '500ml', '550ml', '600ml', '650ml', '700ml', '750ml', '800ml', '850ml', '900ml', '950ml', '1000ml', '1050ml', '1100ml', '1150ml', '1200ml', '1250ml', '1300ml', '1350ml', '1400ml', '1450ml', '1500ml', '1550ml', '1600ml', '1650ml', '1700ml', '1750ml', '1800ml', '1850ml', '1900ml', '1950ml', '2000ml', '2050ml', '2100ml', '2150ml', '2200ml', '2250ml', '2300ml', '2350ml', '2400ml', '2450ml', '2500ml', '2550ml', '2600ml', '2750ml', '2800ml', '2850ml', '2900ml', '2950ml', '3000ml', '3050ml', '3100ml', '3150ml', '3200ml', '3250ml', '3300ml', '3350ml', '3400ml', '3450ml', '3500ml', '3550ml', '3600ml', '3650ml', '3700ml', '3750ml', '3800ml', '3850ml', '3900ml', '3950ml', '4000ml', '4050ml', '4100ml', '4150ml', '4200ml', '4250ml', '4300ml', '4350ml', '4400ml', '4450ml', '4500ml', '4550ml', '4600ml', '4650ml', '4700ml', '4750ml', '4800ml', '4850ml', '4900ml', '4950ml', '5000ml', '5050ml', '5100ml', '5150ml', '5200ml', '>5200ml'],
    fiv_index: 0,
    




  },
  
//第一个pickerchange事件
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      fi_index: e.detail.value,
      fichoose:"#666"
    })
  }, TapPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      array: [ '5s<', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s', '14s', '15s', '15+s'],
      fichoose: "#666"
    })
  },
  bindPickerChange_2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      se_index: e.detail.value,
      sechoose: "#666"
    })
  },TapPickerChange_2: function (e) {
    this.setData({
      array_2:['6个', '7个', '8个', '9个', '10个', '11个', '12个', '13个', '14个', '15个', '16个', '17个', '18个', '19个', '20个', '21个', '22个', '23个', '24个', '25个', '26个', '27个', '28个', '29个', '30个', '31个', '32个', '33个', '34个', '35个', '36个', '37个', '38个', '39个', '40个', '41个', '42个', '43个', '44个', '45个', '46个', '47个', '48个', '49个', '50个', '51个', '52个', '53个', '54个', '55个', '56个', '57个', '58个', '59个', '60个', '60+'],
      sechoose: "#666"
    })
  },
  bindPickerChange_3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tr_index: e.detail.value,
      trchoose: "#666"
    })
  }, TapPickerChange_3: function (e) {
    this.setData({
      array3: [ '1-5次', '6-10次', '11-15次', '16-20次', '21-25次', '26-30次', '31-35次', '36-40次', '41-45次', '46-50次', '51-55次', '56-60次', '61-65次', '66-70次', '71-75次', '76-80次', '81-25次', '86-90次', '91-95次', '96-100次', '101-105次', '106-110次', '111-115次', '116-120次', '121-125次', '126-130次', '131-135次', '136-140次', '141-145次', '146-150次', '151-155次', '156-160次', '161-165次', '166+次'],
      trchoose: "#666"
    })
  },
  bindPickerChange_4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      fo_index: e.detail.value,
      fochoose: "#666"
    })
  }, TapPickerChange_4: function (e) {
    this.setData({
      array4: ['-10cm', '-9cm', '-8cm', '-7cm', '-6cm', '-5cm', '-4cm', '-3cm', '-2cm', '-1cm', '0cm', '1cm', '2cm', '3cm', '4cm', '5m', '6cm', '7cm', '8cm', '9cm', '10cm', '11cm', '12cm', '13cm', '14cm', '15cm', '16cm', '17cm', '18cm', '19cm', '20cm', '21cm', '22cm', '23cm', '24cm', '25cm', '>25cm'],
      fochoose: "#666"
    })
  },
  bindPickerChange_5: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      fiv_index: e.detail.value,
      fivchoose: "#666"
    })
  }, TapPickerChange_5: function (e) {
    this.setData({
      array5: ['500ml<', '500ml', '550ml', '600ml', '650ml', '700ml', '750ml', '800ml', '850ml', '900ml', '950ml', '1000ml', '1050ml', '1100ml', '1150ml', '1200ml', '1250ml', '1300ml', '1350ml', '1400ml', '1450ml', '1500ml', '1550ml', '1600ml', '1650ml', '1700ml', '1750ml', '1800ml', '1850ml', '1900ml', '1950ml', '2000ml', '2050ml', '2100ml', '2150ml', '2200ml', '2250ml', '2300ml', '2350ml', '2400ml', '2450ml', '2500ml', '2550ml', '2600ml', '2750ml', '2800ml', '2850ml', '2900ml', '2950ml', '3000ml', '3050ml', '3100ml', '3150ml', '3200ml', '3250ml', '3300ml', '3350ml', '3400ml', '3450ml', '3500ml', '3550ml', '3600ml', '3650ml', '3700ml', '3750ml', '3800ml', '3850ml', '3900ml', '3950ml', '4000ml', '4050ml', '4100ml', '4150ml', '4200ml', '4250ml', '4300ml', '4350ml', '4400ml', '4450ml', '4500ml', '4550ml', '4600ml', '4650ml', '4700ml', '4750ml', '4800ml', '4850ml', '4900ml', '4950ml', '5000ml', '5050ml', '5100ml', '5150ml', '5200ml', '>5200ml'],
      fivchoose: "#666"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });

      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
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
  //提交表单
  "formsubmit":function(e){
    //ajax请求
    let that = this;
    let _data = that.data;
    console.log(_data);
    if (_data.fichoose != '#666' || _data.sechoose != '#666' || _data.trchoose != '#666' || _data.fochoose != '#666' || _data.fivchoose != '#666'){
      that.setData({
        isHide:false
      });
      setTimeout(function(){
        that.setData({
          isHide: true
        });
      },1500)
    }else{
    let updata = {
      Run: 4 + _data.fi_index * 1,
      SitUps: 5 + _data.se_index * 1,
      RopeSkipping: 0+_data.tr_index*5,
      SittingBodyFlexion: parseInt(_data.fo_index-1)-10,
      VitalCapacity:  (_data.fiv_index-2) * 50 + 500
    };
    let userMessage = wx.getStorageSync('userMessage');
    console.log(userMessage);
    wx.request({
      url: 'https://safety.yiyouqi.com/SportsTalent/addAchievementsGetGrade',
      // url: 'http://192.168.1.66:8080/addAchievementsGetGrade',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        Id: userMessage.userId.data,
        Sex: userMessage.Sex,
        Grade: userMessage.Grade,
        Height: userMessage.Height,
        Weight: userMessage.Weight,
        VitalCapacity: updata.VitalCapacity,
        Run: updata.Run,
        SittingBodyFlexion: updata.SittingBodyFlexion,
        RopeSkipping: updata.RopeSkipping,
        SitUps: updata.SitUps,
      },
      success: function (res) {
        wx.setStorageSync('userPoint', _data);
        wx.setStorageSync('point', res.data.data.Grade);
        wx.setStorageSync('advice', res.data.data.SportsProgram);
        wx.navigateTo({
          url: '../newPoint/newPoint'
        })
      },
      fail: function () {
        console.log("接口调用失败");
        wx.showToast({
          title: '接口调用失败',
          duration: 10000
        })

        setTimeout(function () {
          wx.hideToast()
        }, 2000)
      }
    })
    }
  },
  // 表单去的焦点验证是否登陆
  "islogin":function(){
    if (!wx.getStorageSync('userMessage').userId){
      wx.navigateTo({
        url: '../userinfo/userinfo',
      })
    }
    console.log(wx.getStorageSync('userMessage').userId)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})