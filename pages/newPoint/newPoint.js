const app = getApp();
const utils = require("../../utils/util");
let arc = [20, 40, 60, 80, 100, 90];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maskHidden: true,
    adviceData: [],
    ishidden :true,
    isloadding:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //推荐项目数据修改
    let advice = wx.getStorageSync('advice');
    console.log(advice);
    let adviceArr = [];
    let maindata = {};
    let advice_Arr = [];
    let advice_Arr_1 = [];
    adviceArr = advice.split(',')
  let that = this;
    adviceArr.forEach((ele, index) => {
      maindata.data = ele.split('|')[0];
      maindata.src = ele.split('|')[1];
      advice_Arr.push(JSON.stringify(maindata))
    })
    advice_Arr.forEach((ele, index) => {
      advice_Arr_1.push(JSON.parse(ele))
    })
    console.log(advice_Arr_1);
    let _that = this;
    setTimeout(function () {
      _that.setData({
        adviceData: advice_Arr_1
      })
    }, 500)

    // this.setData({
    //   adviceData:advice
    //   })


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
      let rpx;
      //获取屏幕宽度，获取自适应单位
      wx.getSystemInfo({
        success: function (res) {
          rpx = res.windowWidth / 375;
        },
      })
      context.beginPath();
      for (let i = 0; i < arc.length; i++) {
        let r = arc[i];
        var x = 113 * rpx + 100 * Math.cos(angle * i + 1.57) * r / 100 * rpx;
        var y = 102 * rpx + 100 * Math.sin(angle * i + 1.57) * r / 100 * rpx;
        // context.arc(x, y, 2, 0, Math.PI * 2);
        context.setLineWidth(1);
        context.setStrokeStyle("#00A5FF");
        context.lineTo(x, y);
      }
      context.closePath();
      context.stroke();
      context.fillStyle = 'rgba(0, 165, 255, 0.2)';
      context.fill();
      context.restore();
      // context.draw();


      for (let i = 0; i < arc.length; i++) {
        let r = arc[i];
        context.save();
        var x = 113 * rpx + 100 * Math.cos(angle * i + 1.57) * r / 100 * rpx;
        var y = 102 * rpx + 100 * Math.sin(angle * i + 1.57) * r / 100 * rpx;
        // 
        context.beginPath();
        context.arc(x, y, 2, 0, Math.PI * 2);
        context.fillStyle = 'rgba(0, 165, 255, 0.5)';
        context.fill();
        context.stroke();
        // 
      }
      context.restore();
      context.draw();
    }


    if (!wx.getStorageSync('userMessage')) {
      that.setData({
        ishidden:false
      })
      setTimeout(function () {
        that.setData({
          ishidden: true
        })

        wx.navigateTo({
          url: '../index/index'
        })

      }, 2000)
    } else {
      const userinput = wx.getStorageSync("userMessage");
      const Point = wx.getStorageSync("point");
      let grand = [];

      for (let i in Point) { //将中文变成数字
        switch (Point[i]) {
          case '优秀':
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
      arc[1] = grand.vitalCapacity;
      arc[2] = grand.bmi;
      arc[3] = grand.run;
      arc[4] = grand.sitUps;
      arc[5] = grand.ropeSkipping;
      console.log(arc);
      //初始化数据
      hexagon({
        element: 'myCanvas',
        x: 100,
        y: 100,
        color: '#53c0f8',
        width: '1',
        arc: arc
      });
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
  , "longTouch": function () {
    let that = this;
    console.log("longtouch");
    // wx.showToast({
    //   title: '生成中...',
    //   icon: 'loading',
    //   duration: 2000000
    // });
    this.setData({
      isloadding:false,
      maskHidden: false,
    })
    // console.log(this.data.isloadding);
    const canvasCtx = wx.createCanvasContext('shareCanvas');
    let img_1;
    let img_2;
    let project_1;
    let project_2;
    let project_1_left;
    let project_2_left;
    if (that.data.adviceData[0].src){
      img_1 = that.data.adviceData[0].src;
      img_2 = that.data.adviceData[1].src;
      project_1 = that.data.adviceData[0].data;
      project_2 = that.data.adviceData[1].data;
      if (project_1.length == 2){
        project_1_left = 247;
      } else if (project_1.length == 3) {
        project_1_left = 231;
      }else{
        project_1_left = 210;
      }
      if (project_2.length == 2) {
        project_2_left = 610;
      } else if (project_2.length == 3){
        project_2_left = 594;
      }else{
        project_2_left = 573;
      }
    }else{
      img_1 ="https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/wit.png";

      img_2 = "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/wit.png";
      project_1 = "error";
      project_2 = "error";
    }
    
    wx.getImageInfo({
      src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/newPoint/bj.png"
      , success: function (res) {
        canvasCtx.drawImage(res.path, 0, 0, 750, 1720);
        canvasCtx.setFillStyle("#888");
        canvasCtx.setFontSize(18);
        canvasCtx.fillText("*以上信息仅提供参考，最终解释权归迪卡侬所有", 15-0.5, 1700);
        canvasCtx.fillText("*以上信息仅提供参考，最终解释权归迪卡侬所有", 15, 1700-0.5);
        console.log("8");
        wx.getImageInfo({
          src: img_1
          , success: function (res) {
            canvasCtx.drawImage(res.path, 40, 1200, 310, 150);
            canvasCtx.setFillStyle("#fff");
            canvasCtx.setFontSize(32);
            canvasCtx.fillText(project_1, project_1_left, 1260);
            wx.getImageInfo({
              src: img_2
              , success: function (res) {
                canvasCtx.drawImage(res.path, 400,1200, 310, 150);
                wx.getImageInfo({
                  src: "https://yiyouqi.oss-cn-shanghai.aliyuncs.com/dikanongWechar/erweima_logo.jpg"
                  , success: function (res) {
                    canvasCtx.drawImage(res.path, 565, 1540, 150, 150);
                    canvasCtx.setFillStyle("#fff");
                    canvasCtx.setFontSize(32);
                    canvasCtx.fillText(project_2, project_2_left, 1260);
                    console.log("9");
                    var x = 175;//圆心的x坐标
                    var y = 280;//圆心的y坐标
                    var angle = Math.PI * 2 / 6;
                    //绘制六边形
                    canvasCtx.save();
                    canvasCtx.beginPath();

                    let i_1;
                    let i_2;


                    for (let i = 0; i < arc.length; i++) {
                      i_1 = i;
                      let r = arc[i];
                      var x = 371 + 220 * Math.cos(angle * i + 1.57) * r / 100;
                      var y = 578 + 220 * Math.sin(angle * i + 1.57) * r / 100;
                      canvasCtx.setLineWidth(2);
                      canvasCtx.setStrokeStyle("#00A5FF");
                      canvasCtx.lineTo(x, y);
                      if (i_1==5&&i_2==5){
                        draw(canvasCtx)
                        console.log(666);
                      };
                    }
                    canvasCtx.closePath();
                    canvasCtx.stroke();
                    canvasCtx.fillStyle = 'rgba(0, 165, 255, 0.2)';
                    canvasCtx.fill();
                    // canvasCtx.strokeRect(171, 270)
                    canvasCtx.rotate(Math.PI / 90)
                    canvasCtx.restore();
                    //绘制圆点 
                    console.log(777);
                    for (let i = 0; i < arc.length; i++) {
                      i_2 = i;
                      let r = arc[i];
                      canvasCtx.save();
                      var x = 371 + 220 * Math.cos(angle * i + 1.57) * r / 100;
                      var y = 578 + 220 * Math.sin(angle * i + 1.57) * r / 100;
                      // 
                      canvasCtx.beginPath();
                      canvasCtx.setStrokeStyle('rgba(0, 165, 255, 0.5)')
                      canvasCtx.arc(x, y, 4, 0, Math.PI * 2);
                      canvasCtx.fillStyle = 'rgba(0, 165, 255, 0.5)';
                      canvasCtx.fill();
                      canvasCtx.stroke();
                      // 
                      if (i_1 == 5 && i_2 == 5) {
                        console.log(888);
                        setTimeout(function(){
                          draw(canvasCtx)
                        },200)
                        
                      }
                    }
                    // canvasCtx.restore();
                    console.log(222);


                    function draw(canvasCtx){
                      canvasCtx.draw(false, function (e) {
                        //执行回调
                        console.log('draw callback')
                        that.setData({
                          isloadding: true
                        })
                        //回调函数保存图片
                        setTimeout(function () {
                        wx.canvasToTempFilePath({
                          canvasId: 'shareCanvas',
                          success: function (res) {
                            var tempFilePath = res.tempFilePath;
                            console.log(tempFilePath);
                            that.setData({
                              maskHidden: true,
                              // canvasHidden:true
                            });
                            canvasCtx.clearRect(0, 0, canvasCtx.width, canvasCtx.height);
                            wx.saveImageToPhotosAlbum({
                              filePath: res.tempFilePath,
                              success: function () {
                                that.setData({
                                  isloadding: true
                                })
                                wx.showToast({
                                  title: '已保存',
                                })
                              },
                              fail: function (res) {
                                consoel.log("1111")
                              }

                            })

                          },
                          fail: function (res) {
                            console.log(res);
                          }
                        })
                        }, 200);
                      });
                    }
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