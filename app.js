App({
  onLaunch () {
    // wx.cloud.init({
    //   env: 'envid',
    //   traceUser: true,
    // })
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.systeminfo = res
        this.globalData.isIPhoneX = /iphonex/gi.test(res.model.replace(/\s+/, ''))
      },
    })
  },
  globalData: {
    // 是否保持常亮，离开小程序失效
    keepscreenon:false,
    systeminfo: {},
    isIPhoneX: false,
    key: 'd5fc326d166d4f6bab0447b06727793b',
    weatherIconUrl: 'https://cdn.heweather.com/cond_icon/',
    requestUrl: {
      weather: 'https://free-api.heweather.com/s6/weather',
      hourly: 'https://free-api.heweather.com/s6/weather/hourly',
    },
  },
})