<template>
  <div class="chat-layout">


    <div class="display" ref="messagesContainer">
      <div v-for="(item, index) in messages" :key="index" class="message-item"
        :class="{ 'sent': item.sent, 'received': !item.sent }">
        {{ item.content }}
      </div>

      <div class="link-btn-row" v-if="showButtons">

        <el-button v-for="button in buttonList" :key="button" @click="onQuestion(button)" class="link-btn">
          {{ button }}
        </el-button>

      </div>


      <div class="chat-rotate-box" :class="{ 'rotate': rotate }">
        <span v-if="rorateTxt === '|' && rotate" class="loading-icon">{{ rorateTxt }}</span>
        <!-- <span v-else-if="rorateTxt !== '' || rotate">{{ rorateTxt }}</span> -->
      </div>
    </div>

    <div class="input-box">
      <el-input v-model="inputValue" placeholder="输入想问的" class="input-text"></el-input>
      <el-button @click="onSend()" class="input-btn" type="primary">
        发送
      </el-button>
    </div>

  </div>
</template>
  
<script>

import {  ElButton, ElInput } from 'element-plus';
import { listURL,backendURL } from '@/utils/api.js';




export default {
  components: {

    ElButton,

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
      showButtons: true,
      buttonList: ['写剧本', '写剧本'], // 按钮列表的数据
    };
  },
  methods: {
    //等待
    setWatingRorate: function (rorate) {
      if (rorate == true) {

        this.rorateTxt = "|";
        this.rotate = true;
        this.showButtons = false;

      } else {
        this.rorateTxt = "";
        this.rotate = false;

      }
    },
    setItem(link, title) {
      // 处理传递的 link 和 name 数据
      // 例如：this.link = link; this.name = name;

      // this.messages.push({ content: this.inputValue, sent: true ,from:"user"});
      var message = '分析热点：' + title + ';地址：' + link + '。'
      this.reFreshMessage('user', message, true)

      this.scrollMessagesToBottom();

      this.setWatingRorate(true)

      this.chattingResponds()
    },
    chattingResponds: function () {

      var url = backendURL + "/WriterChatting";
      

      this.$http({
        method: 'post',
        url: url,
        data: { result: this.messages },
        headers: {
          'Content-Type': 'application/json',
          'x-requested-with': 'XMLHttpRequest'
        }

      })
        .then(response => {
          var data = response.data.result;
         
          this.setWatingRorate(false)
        

          this.scrollMessagesToBottom();
          this.intervalResponds(data, 'assistant', false)
        })
        .catch(error => {
          console.error(error);
        }); 
    },
    //播放字符
    intervalResponds(responds, from, sent) {

      var content = '';
      var messages_index = this.messages.length;
      var currentIndex = 0;
      var intervalId = setInterval(() => {
        if (currentIndex >= responds.length) {
          clearInterval(intervalId);
          this.showButtons = true;
          return;
        }
        var endIndex = Math.min(currentIndex + 15, responds.length);
        content += responds.substring(currentIndex, endIndex);
        currentIndex = endIndex;
        if (this.messages.length == messages_index) {
          this.reFreshMessage(from, content, sent);
        } else if (this.messages.length > messages_index) {
          var msg = this.messages;
          msg[messages_index].content = content;
          msg[messages_index].sent = sent;
          this.messages = msg;
          this.scrollMessagesToBottom();
        }
      }, 30);
      this.intervalId = intervalId;
    },
    onQuestion(question) {
      // 处理点击问题的逻辑
     
      console.log(question)
            // 处理传递的 link 和 name 数据
      // 例如：this.link = link; this.name = name;

      // this.messages.push({ content: this.inputValue, sent: true ,from:"user"});
       
      this.reFreshMessage('user', question, true)

      this.scrollMessagesToBottom();

      this.setWatingRorate(true)

      this.chattingResponds()
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
        messagesContainer.scrollTop = messagesContainer.scrollHeight ;
      });
    },
    reFreshMessage(from, content, sent) {
      this.messages.push({ content: content, sent: sent, from: from });


    },
  }
};
</script>
  
<style >
.link-btn {
  margin-bottom: 3px;
  max-width: 20%;
  left: 0px;
  margin-left: 3px;
}

.el-button+.el-button {
  margin-left: 3px;
}

.link-btn-row {
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  justify-content: flex-start;
  flex-wrap: wrap;

}

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

.chat-rotate-box {
  margin: 10px;
  background-color: #000;
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

  margin-right: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  overflow: auto;
  /* ddd */
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

}

.container {
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;


}

.input-items {
  margin-bottom: 10px;
  /* overflow-x: auto; */
  display: flex;
  flex-direction: row;

}



.input-box {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 95%;
  /* box-sizing: border-box; */
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}


.input-btn {
  display: flex;
}

.input-text {
  display: flex;

  padding: 2px;
  font-size: 14px;

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
    
    
    
  