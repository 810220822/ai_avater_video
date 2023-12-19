<template>
 <div style="display: flex;flex-direction: column;height: 75vh;">
  <div  style="display: flex;flex-direction: column;height: 50%;background-color: red;">
asdf
  </div>
  <div style="display: flex;flex-direction: column;height: 50%;background-color: blue;">
大丰收的发
</div >
 </div>
</template>
                      
<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: [
        { text: '你好！', sent: true },
        { text: '嗨，你好！', sent: false },
        // 更多消息...    
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({ text: this.newMessage, sent: true });
        this.newMessage = ''; // 清空输入框   
      }
    },
  },
};
</script>
<style scoped>
.chat-container {
  border: 1px solid #ccc;
  padding: 10px;
}

.messages {
  margin-bottom: 10px;
  height: 300px;
  /* 根据需要调整 */
  overflow-y: auto;
}

.message {
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.sent {
  align-self: flex-end;
  background-color:
    #e0e0e0;
}

.received {
  align-self: flex-start;
  background-color: #f0f0f0;
}

.input-area {
  display: flex;
}

.input-area input {
  flex-grow: 1;
  margin-right: 10px;
}

.input-area button {
  padding: 5px 10px;
}</style>