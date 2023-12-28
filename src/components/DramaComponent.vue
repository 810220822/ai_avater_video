
<template>
  <div class="writer-books-container">
    <div class="writer-books-list">
      <div class="writer-books-icons">
     
        <div>

<WriterTopIcon v-for="icon in icons" :key="icon.id" :icon="icon" :selectedIcon="selectedIcon"
    :updateData="updateData" :getIconPath="getIconPath"></WriterTopIcon>
</div>
      </div>
      <div class="news-list" style="height: 100%;">
        <div class="hot-list">
          <div class="model-title">
            热榜
          </div>
          <div>
            <BooksItem v-for="item in hotList" :key="item.id" :item="item" @select-item="selectItem"></BooksItem>
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
            <BooksItem v-for="item in historyList" :key="item.id" :item="item" @select-item="selectItem"></BooksItem>
          </div>
          <div class="model-tip">
            只展示最新 100 条榜单历史
          </div>
          <div style="height: 1px;">
          </div>
        </div>
      </div>

    </div>
    <div class="writer-book-robot">
      <!-- writer-news-robot 宽度占25%，高度适应屏幕后不变，显示在右边边-->
      <div class="model-title">
        写作助手
      </div>
      <div class="book-chat-robot">
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

.book-chat-robot {
  display: flex;
  width: 100%;
  height: 100%;

  flex: 1;
  flex-direction: column;

  overflow: auto;

}

.writer-book-robot {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 25%;
}



.scroll-list {
  height: 70vh;
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

.writer-books-container {
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.writer-books-list {
  display: flex;
  flex-direction: column;
  width: 65%;
}

.writer-books-icons {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: center;
  width: 100%;
}
</style>
<script>
import ChatComponent from "./ChatComponent.vue";
import { listURL } from '@/utils/api.js';
import BooksItem from './template/BooksItem.vue'
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
          listtype: "books",
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

    ChatComponent,BooksItem,WriterTopIcon
  },

  data() {
    return {
      selectedIcon: null,
      selectedIcoName: '',
      icons: [
        { id: 1, iconUrl: 'jjwxc', name: '晋江' },
        { id: 2, iconUrl: 'qidian', name: '起点中文' },

        { id: 4, iconUrl: 'weread', name: '微信读书' },
        { id: 5, iconUrl: 'qimao', name: '七猫' },

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