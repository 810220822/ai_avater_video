<template>
    <div class="chat-container">
        <div class="messages" ref="messagesContainer">
            <!-- messages  message 的宽度有70% received 靠左显示，蓝色底色，sent 靠右显示，灰色底色；自动滚动到最新的一条message-->
            <div v-for="(message, index) in messages" :key="index" class="message"
                :class="{ 'sent': message.sent, 'received': !message.sent }">
                {{ message.text }} </div>
        </div>
        <div class="input-area">
            <!-- input-area 背景黑色，有阴影，固定在chat-container 的底部，在所有层之上 -->
            <input v-model="newMessage" type="text" placeholder="输入对话内容...." />
            <button @click="sendMessage">发送</button>
        </div>
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
                this.scrollMessagesToBottom();
            }
        },
        scrollMessagesToBottom() {
            // 滚动消息到底部
            this.$nextTick(() => {
                const messagesContainer = this.$refs.messagesContainer;
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            });
        },
    },
};
</script>
<style scoped>
.chat-container {
    /* border: 1px solid #ccc; */
    padding: 10px;

    /* height: 100%; */
    
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.messages {
    /* flex: 1; */
    height: 75vh;
  overflow-y: auto;
  padding: 10px;
   
}

.message {
    
    
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 70%;
    margin: 10px;
    padding: 10px;
 
    max-width: 70%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
}

.sent {
    align-self: flex-end;
  background-color: #ccc;
}

.received {
    align-self:self-start;
  background-color: #0084ff;
}

.input-area {
     
    display: flex;
  align-items: center;
  padding: 10px;
  background-color: #acacac;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.2);
}

.input-area input {
    flex-grow: 1;
    margin-right: 10px;
}

.input-area button {
    padding: 5px 10px;
}
</style>