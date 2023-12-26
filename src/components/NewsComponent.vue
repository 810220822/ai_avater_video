
<template>
    <div class="writer-news-container">
        <div class="writer-news-list">
            <div class="writer-news-icons">
                <!-- writer-news-icons 高度30px，在顶部，固定不动，宽度100% -->
                <!-- 一排icon按钮 -->
                <div class="icon" v-for="icon in icons" :key="icon.id">

                    <!-- icon 图标 -->
                    <el-button class="icon-button" @click="updateData(icon)" bg="false" size="large"
                        :class="{ 'clicked': icon.id === selectedIcon }">

                        <img :src="getIconPath(icon.iconUrl)" alt="icon" class="icon-image" @click="updateData(icon)">

                        {{ icon.name }}
                    </el-button>

                </div>
            </div>
            <div class="news-list" style="height: 100%;">
                <div class="hot-list">
                    <div class="model-title">
                        热榜
                    </div>

                    <div class="news-item" v-for="item in hotList" :key="item.id">
                        <!-- 标题 -->
                        <div class="news-title" @click="openLink(item.link)">{{ item.id }}.{{ item.title }}</div>



                        <!-- 浏览量 -->
                        <div class="news-views-count">浏览量：{{ item.count }}</div>
                        <!-- 详细按钮 -->
                        <el-button class="detail-button" @click="selectItem(item)" type="primary" link>
                            分析<el-icon>
                                <ArrowRight />
                            </el-icon>

                        </el-button>
                        <!-- 进入按钮 -->

                    </div>
                    <div class="model-tip">
                        更新于：2023年12月20日 17:04:51
                    </div>
                </div>
                <div class="history-list">
                    <div class="model-title">
                        近期热榜
                    </div>

                    <div class="news-item" v-for="item in historyList" :key="item.id">
                        <!-- 标题 -->
                        <div class="news-title" @click="openLink(item.link)">{{ item.id }}.{{ item.title }}</div>


                        <!-- 浏览量 -->
                        <div class="news-views-count">浏览量：{{ item.count }}</div>
                        <!-- 详细按钮 -->
                        <el-button class="detail-button" @click="selectItem(item)" type="primary" link>
                            分析<el-icon>
                                <ArrowRight />
                            </el-icon>

                        </el-button>


                    </div>
                    <div class="model-tip">
                        只展示最新 100 条榜单历史
                    </div>
                    <div style="height: 1px;">
                    </div>
                </div>
            </div>

        </div>
        <div class="writer-news-robot">
            <!-- writer-news-robot 宽度占25%，高度适应屏幕后不变，显示在右边边-->
            <div class="model-title">
                写作助手
            </div>
            <div class="chat-robot">
                <ChatComponent ref="chatComponent" />

            </div>
        </div>
    </div>
</template>
<style>
.icon-button {
    /* 添加你想要的样式 */
}

.icon-button.clicked {
    /* 添加你想要的被点击时的样式 */
    background-color: #edf5fe;
    border: 1px solid #dceafa;
}


.news-title {

    display: flex;

    text-align: left;
    color: #579ff8;
    cursor: pointer;

    font-size: 14px;
    flex-grow: 1;
    margin-left: 13px;
    width: 80%;
}


.detail-button {
    /* width: auto; */
    margin-left: 10px;
    /* 调整分析按钮的左侧间距 */
}

.news-views-count {
    color: gray;
    font-size: smaller;
    margin-right: 10px;
    /* 调整浏览量的右侧间距 */

}

.news-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(247, 248, 250);
    margin-top: 7px;
    margin-bottom: 7px;
    margin-right: 20px;

    width: 100%;
}

.chat-robot {
    display: flex;
    width: 100%;
    height: 100%;

    flex: 1;
    flex-direction: column;

    overflow: auto;

}

.writer-news-robot {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    width: 25%;
}

.writer-news-container {
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.writer-news-list {
    display: flex;
    flex-direction: column;
    width: 65%;
}

.scroll-list {
    height: 70vh;
    overflow-y: auto;
}

.news-list {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: column;

    overflow: auto;
    align-items: center;


}

.hot-list,
.history-list {
    margin-bottom: 5px;
    align-items: center;


    width: 80%;
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



.writer-news-icons {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: center;
    width: 100%;
}

.icon {
    width: 130px;
    display: inline-block;
}

.icon-image {
    width: 30px;
    height: 30px;
    margin-right: 7px;
}

.icon-button {
    max-height: 180px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
}
</style>
<script>
import { ArrowRight } from '@element-plus/icons-vue';
import ChatComponent from "./ChatComponent.vue";
import { listURL } from '@/utils/api.js';
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
                    listtype: "news",
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

        ChatComponent
    },

    data() {
        return {
            selectedIcon: null,
            selectedIcoName: '',
            icons: [
                { id: 1, iconUrl: 'xiaohongshu', name: '小红书' },
                { id: 2, iconUrl: 'zhihu', name: '知乎' },
                { id: 3, iconUrl: 'douban', name: '豆瓣' },
                { id: 4, iconUrl: 'douyin', name: '抖音' },
                { id: 5, iconUrl: 'weibo', name: '微博' },

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