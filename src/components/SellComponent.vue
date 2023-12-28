
<template>
    <div class="writer-sell-container">
        <div class="writer-sell-list">
            <div class="writer-sell-icons">
                <!-- writer-news-icons 高度30px，在顶部，固定不动，宽度100% -->
                <!-- 一排icon按钮 -->
                <div>

                    <WriterTopIcon v-for="icon in icons" :key="icon.id" :icon="icon" :selectedIcon="selectedIcon"
                        :updateData="updateData" :getIconPath="getIconPath"></WriterTopIcon>
                </div>

                <!-- @click="updateData(icon)" bg="false"  -->


            </div>
            <div class="news-list" style="height: 100%;">
                <div class="hot-list">
                    <div class="model-title">
                        热榜
                    </div>
                    <div>
                        <SellItem v-for="item in hotList" :key="item.id" :item="item" @select-item="selectItem">
                        </SellItem>
                    </div>

                    <div class="model-tip">
                        更新于：2023年12月20日 17:04:51
                    </div>
                </div>
                <div class="history-list">
                    <div class="model-title">
                        近期热榜
                    </div>
                    <div>
                        <SellItem v-for="item in historyList" :key="item.id" :item="item" @select-item="selectItem">
                        </SellItem>
                    </div>

                    <div class="model-tip">
                        只展示最新 100 条榜单历史
                    </div>
                    <div style="height: 1px;">
                    </div>
                </div>
            </div>

        </div>
        <div class="writer-sell-robot">
            <!-- writer-news-robot 宽度占25%，高度适应屏幕后不变，显示在右边边-->
            <div class="model-title">
                写作助手
            </div>
            <div class="sell-chat-robot">
                <ChatComponent ref="chatComponent" />

            </div>
        </div>
    </div>
</template>
<style>
.news-list {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: column;

    overflow: auto;
}

.sell-chat-robot {
    display: flex;
    width: 100%;
    height: 100%;

    flex: 1;
    flex-direction: column;

    overflow: auto;

}

.writer-sell-robot {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    width: 25%;
}

.writer-sell-container {
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.writer-sell-list {
    display: flex;
    flex-direction: column;
    width: 65%;
}

.scroll-list {

    overflow-y: auto;
}

.hot-list,
.history-list {
    margin-bottom: 5px;
}



.model-tip {
    font-size: 11px;
    margin-left: 13px;
    color: rgb(76, 76, 77);
    margin-top: 2px;
    margin-bottom: 5px;
    top: 0px;
}

.model-title {
    font-size: 15px;
    font-weight: bold;
    margin-left: 13px;
    margin-top: 15px;
    margin-bottom: 15px;
    height: 20px;

}



.writer-sell-icons {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: center;
    width: 100%;
}
</style>
<script>
import { ArrowRight } from '@element-plus/icons-vue';
import ChatComponent from "./ChatComponent.vue";
import { listURL } from '@/utils/api.js';
import SellItem from './template/SellItem.vue'
import WriterTopIcon from './template/WriterTopIcon.vue'
export default {

    mounted() {
        if (this.icons.length > 0) {
            this.selectedIcon = this.icons[0].id;
            this.selectedIcoName = this.icons[0].name;
            this.updateData(this.icons[0]);
        }


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
            this.selectedIcon = icon.id;
            this.selectedIcoName = icon.name;
            this.getNews(10, 'news');
            this.getNews(100, 'history');
        },
        selectItem(item) {
            // 选择热榜或近期热榜的项目，写作助手自动输入一条信息
            // 通过 $refs 引用 ChatComponent 组件
            const chatComponent = this.$refs.chatComponent;

            // 调用组件的方法传递数据
            chatComponent.setItem(item.link, item.title);
        },
        openLink(link) {
            window.open(link, '_blank');
            // window.location.href = link;
        },
        sendMessage() {
            // 发送消息，将输入的文本添加到聊天记录中
        },
        clearHistory() {
            // 清除聊天记录
        },
        getNews(count, type) {
            console.log(count)
            const website = this.selectedIcoName;// 替换为你的网站参数

            this.$http.get(listURL + '/ListResource', {
                params: {
                    website: website,
                    count: count,
                    searchtxt: this.searchTxt,
                    listtype: "malls",
                }
            })
                .then(response => {
                    console.log(response.data);
                    if (type === 'news') {
                        this.hotList = response.data;
                    } else if (type === 'history') {
                        this.historyList = response.data;
                    }

                })
                .catch(error => {
                    console.error(error);
                });
        },
        setSearch(txt) {

            this.searchTxt = txt;
            this.getNews(10, 'news');
            this.getNews(100, 'history');
        },
    },
    components: {

        ChatComponent, SellItem, WriterTopIcon
    },

    data() {
        return {
            selectedIcon: null,
            selectedIcoName: '',
            icons: [
                { id: 1, iconUrl: 'taobao', name: '淘宝' },
                { id: 2, iconUrl: 'jd', name: '京东' },
                { id: 3, iconUrl: 'pinduoduo', name: '拼多多' },
                { id: 4, iconUrl: 'douyinmall', name: '抖音商城' }

            ],

            hotList: [
            ],
            historyList: [
            ],

            searchText: ''

        };
    },
}
</script>