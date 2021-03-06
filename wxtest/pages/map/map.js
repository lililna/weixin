// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  // 获取当前位置
  getMapClick: function() {
    wx.getLocation({
      type: 'wgs84',
      success(item) {
        wx.getLocation({
          type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
          success(res) {
            const latitude = res.latitude
            const longitude = res.longitude
            wx.openLocation({
              latitude,
              longitude,
              scale: 18
            })
          }
        })
      }
    })
  },
  // 选择位置
  checkMapClick: function() {
    wx.getLocation({
      type: 'gcj02',
      success: function(item) {
        const latitude = item.latitude
        const longitude = item.longitude
        wx.chooseLocation({
          latitude: latitude,
          longitude: longitude,
          success: function(res) {
            console.log(res);
          },
        })
      },
    })
  }
})