// pages/map/map.js
Page({
  data:{

markers:[{
      iconPath: "../images/mark.png",
      id: 0,
      latitude: 23.362490,
      longitude: 116.715790,
      title:'华乾大厦',
    

    }],
  

  },
  click: function (e) {
    wx.openLocation({
      latitude: 23.362490,
      longitude: 116.715790,
      scale: 18,
      name: '华乾大厦',
      address:'金平区长平路93号'
    })
  },
 
})