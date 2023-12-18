
<template>
    <div class="container-child">
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
            <div class="hot-list">
                热榜
                <div class="item" v-for="item in hotList" :key="item.id">
                    <!-- 标题 -->
                    <div class="title">{{ item.title }}</div>
                    <!-- 浏览量 -->
                    <div class="views">浏览量: {{ item.views }}</div>
                    <!-- 详细按钮 -->
                    <button class="detail-button" @click="selectItem(item)">详细</button>
                    <!-- 进入按钮 -->
                    <button class="enter-button" @click="openLink(item.link)">进入</button>
                </div>
            </div>
            <div class="history-list">

                近期热榜
                <div class="item" v-for="item in historyList" :key="item.id">
                    <!-- 标题 -->
                    <div class="title">{{ item.title }}</div>
                    <!-- 浏览量 -->
                    <div class="views">浏览量: {{ item.views }}</div>
                    <!-- 详细按钮 -->
                    <button class="detail-button" @click="selectItem(item)">详细</button>
                    <!-- 进入按钮 -->
                    <button class="enter-button" @click="openLink(item.link)">进入</button>
                </div>
            </div>
        </div>
        <div class="robot">
            写作助手
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
</template>
<style>
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
    /* background-color: blue */
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
                { id: 1, title: '热榜1', views: 100, link: '热榜1的链接' },
                { id: 2, title: '热榜2', views: 200, link: '热榜2的链接' },
                { id: 3, title: '热榜3', views: 300, link: '热榜3的链接' }
            ],
            historyList: [
                { id: 1, title: '近期热榜1', views: 1000, link: '近期热榜1的链接' },
                { id: 2, title: '近期热榜2', views: 2000, link: '近期热榜2的链接' },
                { id: 3, title: '近期热榜3', views: 3000, link: '近期热榜3的链接' }
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