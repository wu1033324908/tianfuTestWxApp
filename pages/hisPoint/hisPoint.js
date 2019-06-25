const app = getApp();
const utils = require("../../utils/util");
let arc = [20, 40, 60, 80, 100, 90];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maskHidden: false,
    adviceData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //推荐项目数据修改
    let advice = wx.getStorageSync('advice');
    let adviceArr=[];
    let maindata = {};
    let advice_Arr = [];
    let advice_Arr_1 = [];
    adviceArr = advice.split(',')
   
    adviceArr.forEach((ele, index) =>{
      maindata.data = ele.split('|')[0];
      maindata.src = ele.split('|')[1];
      advice_Arr.push(JSON.stringify(maindata))
    })
    advice_Arr.forEach((ele, index) => {
      advice_Arr_1.push(JSON.parse(ele))
    })
    console.log(advice_Arr_1);
    let _that = this;
    setTimeout(function(){
      _that.setData({
        adviceData: advice_Arr_1
      })
    },1500) 


    var hexagon = function (config) {
      var context = wx.createCanvasContext(config.element);
      var x = config.x;//圆心的x坐标
      var y = config.y;//圆心的y坐标
      var angle = Math.PI * 2 / 6;
      context.setStrokeStyle(config.color || '#000000');
      context.setLineWidth(config.width || '1');
      var arc = config.arc || [];
      //绘制六边形
      context.save();
      context.beginPath();
      for (let i = 0; i < arc.length; i++) {
        let r = arc[i];
        console.log(r);
        var x = 112 + 100 * Math.cos(angle * i+1.56) * r / 100;
        var y = 97 + 100 * Math.sin(angle * i+1.56) * r / 100;

        context.lineTo(x, y);
      }
      context.closePath();
      context.fillStyle = 'rgba(57, 176, 155, 0.5)';
      context.fill();
      context.restore();
      context.draw();
    }
   

    if (!wx.getStorageSync('userMessage')){
      wx.showToast({
        title: '请先填写成绩',
        icon:'loading',
        duration: 2000,
      })
      setTimeout(function () {
        wx.hideToast();
        
        wx.navigateTo({
          url: '../index/index'
        })
        
      }, 2000)
    }else{
      const userinput = wx.getStorageSync("userMessage");
      const Point = wx.getStorageSync("point");
      let grand = [];
      
      for (let i in Point){ //将中文变成数字
        switch (Point[i]){
            case '优秀' :
            grand[i] = 100
            break;
            case '良好':
            grand[i] = 80
            break;
            case '及格':
            grand[i] = 60
            break;
            case '不及格':
            grand[i] = 40
            break;
          }
        }
          //调用全局绘图方法
          // 数组添值
      arc[0] = grand.sittingBodyFlexion;
      arc[1] = grand.ropeSkipping;
      arc[2] = grand.sitUps;
      arc[3] = grand.run;
      arc[4] = grand.bmi;
      arc[5] = grand.vitalCapacity;
      console.log(arc);
          //初始化数据
        hexagon({
          element: 'myCanvas',
          x: 100,
          y: 100,
          color: '#000',
          width: '1',
          arc: arc
        });
      // wx.request({
      //   url: 'https://safety.yiyouqi.com/SportsTalent/addStudent',
      //   method: "POST",
      //   header: {
      //     'Content-Type': 'json'
      //   },
      //   data: {
      //     Id: userinput.userId,
      //     Sex: userinput.Sex,
      //     Grade: userinput.Grade, 
      //     Height: userinput.Height,
      //     Weight: userinput.Weight,
      //     VitalCapacity: userPoint.VitalCapacity,
      //     Run: userPoint.Run,
      //     SittingBodyFlexion: userPoint.SittingBodyFlexion,
      //     RopeSkipping: userPoint.RopeSkipping,
      //     SitUps: userPoint.SitUps
      //   },
      //   success: function (res) {
      //     let arc=[];
      //     let Grade = res.data.Grade;
      //     for (let i in Grade){ //将中文变成数字
      //       switch(Grade[i]){
      //         case '优秀' :
      //           arc[i] = 100
      //         break;
      //         case '良好':
      //           arc[i] = 80
      //         break;
      //         case '及格':
      //           arc[i] = 60
      //         break;
      //         case '不及格':
      //           arc[i] = 40
      //         break;
      //       }
      //     }
      //     //调用全局绘图方法

      //     //初始化数据
      //     hexagon({
      //       element: 'myCanvas',
      //       x: 100,
      //       y: 100,
      //       color: '#000',
      //       width: '1',
      //       arc: arc
      //     });
      //   },
      //   fail: function () {
      //     wx.showToast({
      //       title: '请求失败，请检查网络连接',
      //       duration: 10000,
            
      //     })
      //     setTimeout(function () {
      //       wx.hideToast();
      //       wx.redirectTo({
      //         url: '../index/index'
      //       })
      //     }, 2000)
      //   }
      // })
    }
  },
  // 添加绘图
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 初始化绘图数据
   
    //写在这里看效果
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
  
  }

/**
 * 绘制分享的图片
 * @param goodsPicPath 商品图片的本地链接
 * @param qrCodePath 二维码的本地链接
 */
  //长按保存并分享
  ,"longTouch":function(){  
    let that = this;  
    console.log("longtouch");
    wx.showToast({
      title: '生成中...',
      icon: 'loading',
      duration: 2000000
    });
    const canvasCtx = wx.createCanvasContext('shareCanvas');
    wx.getImageInfo({
      src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/bg_6.png"
      ,success:function(res){
        canvasCtx.drawImage(res.path, -4, 0, 343, 724);
        wx.getImageInfo({
          src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/ljx.png"
          , success: function (res) {
            canvasCtx.drawImage(res.path, 95, 50, 161, 55);
            wx.getImageInfo({
              src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/sudu.png"
              , success: function (res) {
                canvasCtx.drawImage(res.path, 150, 150, 36, 20);
                wx.getImageInfo({
                  src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/BMI.png"
                  , success: function (res) {
                    canvasCtx.drawImage(res.path, 40, 220, 32, 18);
                    wx.getImageInfo({
                      src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/naili.png"
                      , success: function (res) {
                        canvasCtx.drawImage(res.path, 40, 320, 32, 18);
                        wx.getImageInfo({
                          src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/rouren.png"
                          , success: function (res) {
                            canvasCtx.drawImage(res.path, 150, 390, 32, 18);
                            wx.getImageInfo({
                              src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/lingmin.png"
                              , success: function (res) {
                                canvasCtx.drawImage(res.path, 270, 320, 32, 18);
                                wx.getImageInfo({
                                  src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/power.png"
                                  , success: function (res) {
                                    canvasCtx.drawImage(res.path, 270, 220, 32, 18);
                                    wx.getImageInfo({
                                      src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/ljxt.png"
                                      , success: function (res) {
                                        canvasCtx.drawImage(res.path, 85, 175, 170, 200);
                                        wx.getImageInfo({
                                          src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/shiyngshuoming.png"
                                          , success: function (res) {
                                            canvasCtx.drawImage(res.path, 20, 500, 145, 70);
                                            wx.getImageInfo({
                                              src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/shiyongshuoming2.png"
                                              , success: function (res) {
                                                canvasCtx.drawImage(res.path, 175, 500, 145, 70);
                                                wx.getImageInfo({
                                                  src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/bz.png"
                                                  , success: function (res) {
                                                    canvasCtx.drawImage(res.path, 30, 600, 145, 45);
                                                    wx.getImageInfo({
                                                      src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/xcx.png"
                                                      , success: function (res) {
                                                        canvasCtx.drawImage(res.path, 260, 590, 55, 55);
                                                        wx.getImageInfo({
                                                          src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/hisPoint/xbtj.png"
                                                          , success: function (res) {
                                                            canvasCtx.drawImage(res.path, 95, 415, 161, 55);
                                                            var x = 171;//圆心的x坐标
                                                            var y = 270;//圆心的y坐标
                                                            var angle = Math.PI * 2 / 6;
                                                            //绘制六边形
                                                            canvasCtx.save();
                                                            canvasCtx.beginPath();
                                                            for (let i = 0; i < arc.length; i++) {
                                                              let r = arc[i];
                                                              var x = 169 + 100 * Math.cos(angle * i + 1.55) * r / 100;
                                                              var y = 278 + 100 * Math.sin(angle * i + 1.55) * r / 100;
                                                              canvasCtx.lineTo(x, y);
                                                            }
                                                            canvasCtx.closePath();
                                                            canvasCtx.fillStyle = 'rgba(57, 176, 155, 0.5)';
                                                            canvasCtx.fill();
                                                            canvasCtx.strokeRect(171, 270)
                                                            canvasCtx.rotate(Math.PI / 90)
                                                            canvasCtx.restore();
                                                            canvasCtx.draw(false, function (e) {
                                                              //执行回调
                                                              console.log('draw callback')
                                                              wx.hideToast();

                                                              //回调函数保存图片
                                                              wx.canvasToTempFilePath({
                                                                canvasId: 'shareCanvas',
                                                                success: function (res) {
                                                                  var tempFilePath = res.tempFilePath;
                                                                  console.log(tempFilePath);
                                                                  that.setData({
                                                                    // maskHidden: true,
                                                                    // canvasHidden:true
                                                                  });
                                                                  canvasCtx.clearRect(0, 0, canvasCtx.width, canvasCtx.height);
                                                                  wx.saveImageToPhotosAlbum({
                                                                    filePath: res.tempFilePath
                                                                  })
                                                                  wx.hideToast()
                                                                  wx.showToast({
                                                                    title: '图片已保存',
                                                                  })()
                                                                },
                                                                fail: function (res) {
                                                                  console.log(res);
                                                                }
                                                              })
                                                            });
                                                          }
                                                        });
                                                        
                                                        
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
    
    
   
    
    
    
    
    
    
    
   
    
   
    //绘制六边形
    

/**
 * 

    wx.canvasToTempFilePath({
        canvasId: 'shareCanvas'
      }, this).then(res => {
        return wxSaveImageToPhotosAlbum({
          filePath: res.tempFilePath
        })
      }).then(res => {
        wx.showToast({
          title: '已保存到相册'
        })
      })
 * 
 */

    // canvasCtx.draw();
    
    setTimeout(function(){
      
    },8000)

  }
})