<template>
  <div class="chat-layout">


    <div class="display" ref="messagesContainer">


      <div v-for="(item, index) in messages" :key="index" class="message-item"
        :class="{ 'sent': item.sent, 'received': !item.sent }">
        {{ item.content }}
      </div>
      <div class="box" :class="{ 'rotate': rotate }">
        <span v-if="rorateTxt === '|' && rotate" class="loading-icon">{{ rorateTxt }}</span>
        <span v-else-if="rorateTxt !== '' || rotate">{{ rorateTxt }}</span>
      </div>
      <div  >
        <el-button @click="onQuestion('写剧本')" class="link-btn">
          写剧本
        </el-button>  
      </div>
    </div>
    <div style="height: 290px;" />

    <div class="input-box2">

      <div class="input-items">

        <!-- <el-button @click="onQuestion('写剧本')" class="link-btn">
          写剧本
        </el-button>  -->
      </div>

      <div class="input-box">
        <el-input v-model="inputValue" placeholder="输入想问的" class="input2"></el-input>
        <el-button @click="onSend()" class="link-btn">
          发送

        </el-button>
      </div>

    </div>

  </div>
</template>
  
<script>
import { ref } from 'vue';
import { ElScrollbar, ElButton, ElImage, ElInput } from 'element-plus';
import { fetchData,backendURL,delayedString } from '@/utils/api.js';

const intervalId = null;


export default {
  components: {
    ElScrollbar,
    ElButton,
    ElImage,
    ElInput,

  },
  data() {
    return {
      userId: '',
      intervalId: null,
      rorateTxt: '',
      rotate: false,
      messages: [{

        from: 'assistant',
        content: '有什么想了解的呢？',
        sent: false
      }
      ],
      inputValue: '',

    };
  },
  methods: {
    //等待
    setWatingRorate: function (rorate) {
      if (rorate == true) {

        this.rorateTxt = "|";
        this.rotate = true

      } else {
        this.rorateTxt = "";
        this.rotate = false
      }
    },
    chattingResponds() {
 
      // console.log(that.data.messages)
      // 在小程序中发起网络请求
      // wx.request({
      //   url: flaskUrl + '/Chatting',
        
      //   method: 'POST',
       
      //   data: {
      //     result: that.data.messages
      //   },
      //   success: function (res) {
          
      //     that.intervalResponds(res.data.result, 'assistant')
      //     that.setWatingRorate(false)
      //   },
      //   fail: function (res) {
      //     that.intervalResponds('服务错误：' + res.errMsg, 'assistant')
      //     that.setWatingRorate(false)
      //   },
      //   complete: function (res) {
         
      //   }
      // })
      console.log('this.inputValue')
      setTimeout(() => {
        var data = '有什么想了解的有想了解的呢有什么想了解的呢？了解的呢？';
      this.setWatingRorate(false)
      console.log(data)
      // this.reFreshMessage('assistant', data, false)
      this.scrollMessagesToBottom();
      this.intervalResponds(data,'assistant',false)
      
    }, 3000);
    

    },
     //播放字符
  intervalResponds(responds, from,sent) {
 
    var content = '';
    var messages_index = this.messages.length;
    var currentIndex = 0;
    var intervalId = setInterval(() => {
      if (currentIndex >= responds.length) {
        clearInterval(intervalId);
        return;
      }
      var endIndex = Math.min(currentIndex + 15, responds.length);
      content += responds.substring(currentIndex, endIndex);
      currentIndex = endIndex;
      if (this.messages.length == messages_index) {
        this.reFreshMessage(from, content,sent);
      } else if (this.messages.length > messages_index) {
        var msg = this.messages;
        msg[messages_index].content = content;
        msg[messages_index].sent = sent;
        this.messages = msg;
        this.scrollMessagesToBottom();
      }
    }, 30);
    this.intervalId=intervalId;
  },
    onQuestion(question) {
      // 处理点击问题的逻辑
      question = '';
      console.log(question)
    },
    onSend() {
      if (this.inputValue.trim() !== '') {
        // this.messages.push({ content: this.inputValue, sent: true ,from:"user"});
        this.reFreshMessage('user', this.inputValue, true)
        this.inputValue = ''; // 清空输入框   
        this.scrollMessagesToBottom();
      }


      this.setWatingRorate(true)

      this.chattingResponds()

    },
    scrollMessagesToBottom() {
      // 滚动消息到底部
      this.$nextTick(() => {
        const messagesContainer = this.$refs.messagesContainer;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      });
    },
    reFreshMessage(from, content, sent) {
      this.messages.push({ content: content, sent: sent, from: from });


    },
  }
};
</script>
  
<style >
.rotate {
  animation: rotateAnimation 2s linear infinite;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.box {
  margin: 10px;
}

.loading-icon {
  display: inline-block;

  width: 1em;
  text-align: center;


}

.chat-layout {
  border: 2px solid rgb(220, 230, 232);
  border-radius: 15px;
  background-color: rgb(247, 248, 250);
  height: 100%;
  /* padding-right: 10px; */
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* position: relative; */
  /* overflow: scroll; */
}

.display {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;

  align-items: flex-start;
  width: 100%;
  /* height: 580px; */
  box-sizing: border-box;
  overflow: scroll;
  align-items: stretch;
}

.message-item {

  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.5;
}

.message-content {
  max-width: 70vw;

  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-all;
}

.sent {
  background: #5f75bc;
  color: #fff;
  align-self: flex-end;
  margin-left: 30%;
}

.received {
  background: #f3f3f3;
  color: #333;
  align-self: flex-start;
  margin-right: 30%;

}

.chat-box {

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: calc(100vh - 120rpx);
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

.container {
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  overflow-y: auto;

}

.input-items {
  margin-bottom: 10px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;

}

.input-box2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* width: 550px; */

  /* box-sizing: border-box; */
  /* padding: 10px; */

  position: fixed;
  height: 80px;
  bottom: 0px;
  /* right: 15px; */
  /* align-items: center; */
  right: 15px;
  /* transform: translateX(-50%); */

}

.input-box {
  display: flex;
  justify-content: space-between;
  /* display: flex; */
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  box-sizing: border-box;

}



.input2 {
  display: flex;
  /* min-height: 60px; */
  /* max-height: 360rpx; */
  border: none;
  border-radius: 2px;
  padding: 5px;
  font-size: 14px;
  /* background-color: #f3f3f3; */
  line-height: 1.5;
  resize: none;
  width: 330px;
}

.input {
  white-space: nowrap;
  display: flex;
  min-height: 60rpx;
  border: none;
  border-radius: 2px;
  padding: 10rpx 20rpx;
  font-size: 28rpx;
  background-color: #f3f3f3;
  resize: none;
  width: 97%;
}

.send-btn {
  width: 30px;
  height: 30px;
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  margin-right: 15px;
  padding-right: 15px;
}


.rotate {

  animation: rotate 1s infinite linear;

  word-wrap: break-word;
  /*自动换行 */
  white-space: pre-wrap;
  word-break: break-all;

  max-width: 70%;
  margin: 10rpx;
  padding: 10rpx;
  border-radius: 10rpx;
  font-size: 28rpx;
  line-height: 1.5;

  background: #f3f3f3;
  color: #333;
  align-self: flex-start;
  margin-right: 30%;
}
</style>
    
    
    
  