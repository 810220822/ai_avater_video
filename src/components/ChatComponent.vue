<template>
  <div class="chat-layout">


    <el-main>
       <el-scrollbar class="display" :view-style="{ height: height }">
        <div v-for="(item, index) in messages" :key="index" :class="['message-item', item.from]">
          <el-rich-text class="message-content" v-html="item.content"></el-rich-text>
        </div>
      </el-scrollbar>
    </el-main>

    <div class="input-box2">
      <div class="input-items">
        <el-button @click="onQuestion('学主题')" class="link-btn">
          学主题
        </el-button>
        <el-button @click="onQuestion('学特点')" class="link-btn">
          学特点
        </el-button>
        <el-button @click="onQuestion('学风格')" class="link-btn">
          学风格
        </el-button>
        <el-button @click="onQuestion('学内容')" class="link-btn">
          学内容
        </el-button>
        <el-button @click="onQuestion('写剧本')" class="link-btn">
          写剧本
        </el-button>
      
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

export default {
  components: {
    ElScrollbar,
    ElButton,
    ElImage,
    ElInput,

  },
  data() {
    return {
      messages: [],
      inputValue: '',
      height: '100%'
    };
  },
  methods: {
    onQuestion(question) {
      // 处理点击问题的逻辑
    },
    onSend() {
      // 处理发送消息的逻辑
    }
  }
};
</script>
  
<style >
.chat-layout {
  border: 2px solid rgb(220, 230, 232);
  border-radius: 15px;
  background-color: rgb(247, 248, 250);
  height: 100%;

  display: flex;
  flex-direction: column;
}

.display {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;


  box-sizing: border-box;
  overflow-y: auto;

}

.message-item {
  max-width: 70%;
  margin: 10rpx;
  padding: 10rpx;
  border-radius: 10rpx;
  font-size: 28rpx;
  line-height: 1.5;
}

.message-content {
  max-width: 70vw;

  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-all;
}

.message-item.user {
  background: #5f75bc;
  color: #fff;
  align-self: flex-end;
  margin-left: 30%;
}

.message-item.assistant {
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
  padding: 20rpx;
  box-sizing: border-box;
  overflow-y: auto;
}

.container {
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid blue;
  height: 100%;
  width: 100%;

  overflow-y: auto;

}
.input-items{
 margin-bottom: 10px;
}
.input-box2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  /* width: 550px; */

  /* box-sizing: border-box; */
  padding: 10px;

  /* position:fixed; */
  bottom: 0px;

}

.input-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;


}

.input-items {
  display: flex;
  flex-direction: row;
}

.input2 {
  display: flex;
  min-height: 60rpx;
  max-height: 360rpx;
  border: none;
  border-radius: 2px;
  padding: 10rpx 20rpx;
  font-size: 28rpx;
  background-color: #f3f3f3;
  line-height: 1.5;
  resize: none;
  width: 100%;
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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
    
    
    
  