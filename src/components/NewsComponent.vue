
<template>
    <div class="container-child" >
        <div class="list">
            <div class="icons">

                <!-- 一排icon按钮 -->
                <div class="icon" v-for="icon in icons" :key="icon.id">

                    <!-- icon 图标 -->
                    <el-button class="icon-button" @click="updateData(icon)" bg="false" size="large">

                        <img :src="getIconPath(icon.iconUrl)" alt="icon" class="icon-image" @click="updateData(icon)">

                        {{ icon.name }}
                    </el-button>

                </div>
            </div>
            <div height="100%" style="flex:1;overflow-y: auto;">
                <div class="hot-list">
                <div class="model-title">
                    热榜
                </div>

                <div class="news-item" v-for="item in hotList" :key="item.id">
                    <!-- 标题 -->
                    <div class="news-title">{{ item.id }}.{{ item.title }}</div>
                    <!-- 浏览量 -->
                    <div class="news-views-count">{{ item.count }}</div>
                    <!-- 详细按钮 -->
                    <el-button  class="detail-button" @click="selectItem(item)" type="primary" link>分析</el-button >
                    <!-- 进入按钮 -->
                    <el-icon class="enter-button" @click="openLink(item.link)"><ArrowRight /></el-icon>
                </div>
            </div>
            <div class="history-list">
                <div class="model-title">
                    近期热榜
                </div>

                <div class="news-item" v-for="item in historyList" :key="item.id">
                    <!-- 标题 -->
                    <div class="news-title">{{ item.id }}.{{ item.title }}</div>
                    <!-- 浏览量 -->
                    <div class="news-views-count"> {{ item.count }}</div>
                    <!-- 详细按钮 -->
                    <el-button  class="detail-button" @click="selectItem(item)" type="primary" link>分析</el-button >
                    <!-- 进入按钮 -->
                    <el-icon class="enter-button" @click="openLink(item.link)"><ArrowRight /></el-icon>
                    
                </div>
            </div>
            </div>
            
        </div>
        <div class="robot" style="flex:0 0 auto;overflow-y: hidden;">
            <div class="model-title">
                写作助手
            </div>
            <div class="chat-robot" stretch>
                <div class="chat-history">
                <!-- 历史聊天记录 -->
                <div v-for="message in chatHistory" :key="message.id" class="message">
                    {{ message.content }}
                </div>
            </div>
            <div class="input-box">
                <!-- 输入框 -->
                <input type="text" v-model="inputText" class="text-input">
                <!-- 发送按钮 -->
                <button class="send-button" @click="sendMessage">发送</button>
                <!-- 清除按钮 -->
                <button class="clear-button" @click="clearHistory">清除</button>
            </div>
            </div>
           
        </div>
    </div>
</template>
<style>
.chat-robot{
    background-color: rgb(247, 248, 250);
    width: 100%;
    height: 100%;
}
.news-item{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   align-items: center; 

    border-bottom: 1px solid rgb(247, 248, 250);
    margin-top: 7px;
    margin-bottom: 7px;
 
}
.model-title {
    font-size: 15px;
    font-weight: bold;
    margin-left: 13px;
    margin-top: 7px;
   
}

.news-title {
    font-size: 15px;
   
    margin-left: 13px;
    /* margin-top: 7px; */
    width: 80%;
}

.icons {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: center;

}

.icon {
    /* 图标样式 */
    width: 130px;

}

.icon-image {
    width: 30px;
    height: 30px;
    margin-right: 7px;
}

.icon-button {
    /* 图标按钮样式 */

    max-height: 180px;
    width: 120px;


    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
}

.chat-history {
    /* 聊天记录样式 */
}

.message {
    /* 消息样式 */
}

.input-box {
    /* 输入框样式 */
}

.text-input {
    /* 文本输入框样式 */
}

.send-button {
    /* 发送按钮样式 */
}

.clear-button {
    /* 清除按钮样式 */
}

.robot {
    border-left: 1px solid rgb(247, 248, 250);
    border-bottom: 1px solid rgb(247, 248, 250);
    /* background-color: rgb(247, 248, 250) */
    width: 30%;
    height: 100%;
}

.history-list {}

.hot-list {}

.list {
    display: flex;
    flex-direction: column;
    width: 70%;
}

.container-child {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100%;
    /* background-color: aquamarine; */
}



.container {
    display: flex;
    flex-direction: column;
}
</style>
<script>
import { Search } from '@element-plus/icons-vue';

export default {

    mounted() {

    },
    methods:
    {
        selectIcon(icon) {
            this.selectedIcon = icon;
        },
        getIconPath(iconName) {
            return require(`@/assets/logo/${iconName}.png`);
        },
        updateData(icon) {
            // 更新热榜和近期热榜的数据
        },
        selectItem(item) {
            // 选择热榜或近期热榜的项目，写作助手自动输入一条信息
        },
        openLink(link) {
            // 在新的标签页中打开链接
        },
        sendMessage() {
            // 发送消息，将输入的文本添加到聊天记录中
        },
        clearHistory() {
            // 清除聊天记录
        }
    },
    components: {


    },
    data() {
        return {
            selectedIcon: '',
            icons: [
                { id: 1, iconUrl: 'xiaohongshu', name: '小红书' },
                { id: 2, iconUrl: 'zhihu', name: '知乎' },
                { id: 3, iconUrl: 'douban', name: '豆瓣' },
                { id: 4, iconUrl: 'douyin', name: '抖音' },
                { id: 5, iconUrl: 'weibo', name: '微博' },

            ],
            hotList: [
                { id: 1, title: '热榜1的标题名称', count: 100, link: 'https://twitter.com/home' },
                { id: 2, title: '热榜2的标题名称', count: 200, link: 'https://twitter.com/home' },
                { id: 3, title: '热榜3的标题名称', count: 300, link: 'https://twitter.com/home' }
            ],
            historyList: [
                { id: 1, title: '近期热榜1的标题名称', count: 1000, link: 'https://twitter.com/home' },
                { id: 2, title: '近期热榜2的标题名称', count: 2000, link: 'https://twitter.com/home' },
                { id: 3, title: '近期热榜3的标题名称', count: 3000, link: 'https://twitter.com/home' },
                { id: 1, title: '近期热榜1的标题名称', count: 1000, link: 'https://twitter.com/home' },
                { id: 2, title: '近期热榜2的标题名称', count: 2000, link: 'https://twitter.com/home' },
                { id: 3, title: '近期热榜3的标题名称', count: 3000, link: 'https://twitter.com/home' },
                { id: 1, title: '近期热榜1的标题名称', count: 1000, link: 'https://twitter.com/home' },
                { id: 2, title: '近期热榜2的标题名称', count: 2000, link: 'https://twitter.com/home' },
                { id: 3, title: '近期热榜3的标题名称', count: 3000, link: 'https://twitter.com/home' },
                { id: 1, title: '近期热榜1的标题名称', count: 1000, link: 'https://twitter.com/home' },
                { id: 2, title: '近期热榜2的标题名称', count: 2000, link: 'https://twitter.com/home' },
                { id: 3, title: '近期热榜3的标题名称', count: 3000, link: 'https://twitter.com/home' },
                { id: 1, title: '近期热榜1的标题名称', count: 1000, link: 'https://twitter.com/home' },
                { id: 2, title: '近期热榜2的标题名称', count: 2000, link: 'https://twitter.com/home' },
                { id: 3, title: '近期热榜3的标题名称', count: 3000, link: 'https://twitter.com/home' },
                { id: 1, title: '近期热榜1的标题名称', count: 1000, link: 'https://twitter.com/home' },
                { id: 2, title: '近期热榜2的标题名称', count: 2000, link: 'https://twitter.com/home' },
                { id: 3, title: '近期热榜3的标题名称', count: 3000, link: 'https://twitter.com/home' },
                { id: 1, title: '近期热榜1的标题名称', count: 1000, link: 'https://twitter.com/home' },
                { id: 2, title: '近期热榜2的标题名称', count: 2000, link: 'https://twitter.com/home' },
                { id: 3, title: '近期热榜3的标题名称', count: 3000, link: 'https://twitter.com/home' },
                { id: 1, title: '近期热榜1的标题名称', count: 1000, link: 'https://twitter.com/home' },
                { id: 2, title: '近期热榜2的标题名称', count: 2000, link: 'https://twitter.com/home' },
                { id: 3, title: '近期热榜3的标题名称', count: 3000, link: 'https://twitter.com/home' },
                { id: 1, title: '近期热榜1的标题名称', count: 1000, link: 'https://twitter.com/home' },
                { id: 2, title: '近期热榜2的标题名称', count: 2000, link: 'https://twitter.com/home' },
                { id: 3, title: '近期热榜3的标题名称', count: 3000, link: 'https://twitter.com/home' },
            ],
            chatHistory: [
                { id: 1, content: '历史聊天记录1' },
                { id: 2, content: '历很抱歉，由于输入的' },
                { id: 2, content: '历史聊天记录2' },
                { id: 3, content: '历史聊天记录3' }
            ],
            inputText: ''

        };
    },
}
</script>