// pages/chatting/chatting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    intervalId: null,
    rorateTxt: '',
    rotate: false,
    messages: [],
    inputValue: '',
    height: '300rpx'

  },
  //等待
  setWatingRorate: function (rorate) {
    if (rorate == true) {
      this.setData({
        rorateTxt: "|",
        rotate: true
      })
    } else {
      this.setData({
        rorateTxt: "",
        rotate: false
      })
    }
  },
  bindBlur:function (e) {
    
    this.setData({
      // inputValue: e.detail.value
    });
  },
  onInput: function (e) {
   
    this.setData({
      inputValue: e.detail.value
    });


  },
  //播放字符
  intervalResponds(responds, from) {
    var index = 0;
    var that = this
    var content = '';
    var messages_index = this.data.messages.length;
    var currentIndex = 0;
    var intervalId = setInterval(() => {
      if (currentIndex >= responds.length) {
        clearInterval(intervalId);
        return;
      }
      var endIndex = Math.min(currentIndex + 15, responds.length);
      content += responds.substring(currentIndex, endIndex);
      currentIndex = endIndex;
      if (that.data.messages.length == messages_index) {
        that.reFreshMessage(from, content);
      } else if (that.data.messages.length > messages_index) {
        var msg = that.data.messages;
        msg[messages_index].content = content;
        that.setData({
          messages: msg,
        });
        that.autoScroll();
      }
    }, 30);
    this.setData({
      intervalId: intervalId
    });
  },
  //滚动条至最底部
  autoScroll() {
    var that = this
    let query = wx.createSelectorQuery()
    query.select('.display').boundingClientRect(res => {
      // console.log('res', res)
      that.setData({
        scrollTop: res.height * 100 + 10000
      })
      // console.log(that.data.scrollTop)
    })
    query.exec(res => {})
  },
  reFreshMessage(from, content) {
    var messages = this.data.messages;
    messages.push({
      from: from,
      content: content
    });
    this.setData({
      messages: messages,
      inputValue: ''
    });
    this.autoScroll()
  },
  chattingResponds() {

    var that = this

    var flaskUrl = getApp().globalData.gptUrl;
    // console.log(that.data.messages)
    // 在小程序中发起网络请求
    wx.request({
      url: flaskUrl + '/Chatting',
      // url: flaskUrl + '/',
      method: 'POST',
      // data:that.data.messages,
      data: {
        result: that.data.messages
      },
      success: function (res) {
        // console.log(res.data.result)
        that.intervalResponds(res.data.result, 'assistant')
        that.setWatingRorate(false)
      },
      fail: function (res) {
        that.intervalResponds('服务错误：' + res.errMsg, 'assistant')
        that.setWatingRorate(false)
      },
      complete: function (res) {
        // console.log('complete')
        // console.log(res)
      }
    })
  },
  onQuestion: function (event) {

    var question = event.currentTarget.dataset.question;
    this.setData({
      inputValue: question
    })
    this.onSend()
  },
  // onChooseImage: function () {
  onSend: function () {

 
    var that = this
   
    var inputValue = this.data.inputValue.trim();
  
    if (inputValue === '') {
      return;
    }
    that.reFreshMessage('user', inputValue)
     
    that.setWatingRorate(true)
  
    that.chattingResponds()
     


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取view的高度
    var that = this
    wx.createSelectorQuery().select('.input-box2').boundingClientRect((rect) => {
      const viewHeight = rect.top;
      // console.log(viewHeight)
      that.setData({
        height: viewHeight + 'px'
      })
    }).exec();

    // 页面中使用 userId
    const app = getApp();
    const userId = app.globalData.userId;
    this.setData({
      userId: userId
    })
    var content = decodeURIComponent(options.content);
    this.reFreshMessage('assistant', content)
    this.reFreshMessage('assistant', '有什么想了解的呢？')
    wx.setNavigationBarTitle({
      title: 'AI面孔测试'
    });


  },

   
})