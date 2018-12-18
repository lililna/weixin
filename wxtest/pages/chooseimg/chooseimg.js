// pages/chooseimg/chooseimg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: null
  },
  // 选择图片
  selectImg: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.setData({ imageUrl: tempFilePaths[0] })
      }
    })
  }
  

})