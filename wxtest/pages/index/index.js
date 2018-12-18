 Page({
 
   /**
    * 页面的初始数据
    */
   data: {
     imgUrls: [
       '../img/1.jpg',
       '../img/2.jpg',
       '../img/3.jpg'
     ]
     
   },
  //  进入首页
   goHome: function() {
     wx.navigateTo({
       url: '../home/home'
     })
   },
   // 选择图片
   selectImg: function() {
     wx.navigateTo({
       url: '../chooseimg/chooseimg'
     })
   },
   // WebSocket
   goWebSocket: function() {
     wx.navigateTo({
       url: '../websocket/websocket'
     })
   },
  //  音乐
  goMusic: function() {
    wx.navigateTo({
      url: '../music/music',
    })
  }
 })