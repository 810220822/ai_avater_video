<template>
    <div class="writer-container" style="">
        <!-- writer-container 自动撑满浏览器，宽高自适应 -->
        <div class="writer-header">
            <!-- writer-header 第一行，固定不动，在控件的顶部。高度50px -->
            <div class="writer-search" justify="center"> 
                <el-input v-model="inputtext" placeholder="输入查询内容..." class="input-with-select">

                    <template #append>
                        <el-button @click="onSearch"> <el-icon>
                                <Search />
                            </el-icon></el-button>
                    </template>
                </el-input> 
            </div>  
        </div>
        <div class="writer-tabs">
            <!-- writer-header 第二行，在控件的顶部，仅靠writer-header，固定不动。高度30px -->
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
                <el-tab-pane label="新闻热点" name="新闻热点"></el-tab-pane>
                <el-tab-pane label="爆款热卖" name="爆款热卖"></el-tab-pane>
                <el-tab-pane label="爆剧剧本" name="爆剧剧本"></el-tab-pane>
                <el-tab-pane label="草稿箱" name="草稿箱"></el-tab-pane>
            </el-tabs>
        </div>
        <div class="writer-components">
            <!-- writer-components 第三行，自适应浏览器大小，自动撑满剩余控件，背景色红色 -->
            <!-- 新闻热点控件 -->
            <NewsComponent v-if="activeName === '新闻热点'" ref="news"/>
            <!-- 爆款热卖控件 -->
            <SellComponent v-if="activeName === '爆款热卖'" ref="sells"/>
            <!-- 爆剧剧本控件 -->
            <DramaComponent v-if="activeName === '爆剧剧本'" ref="books"/>
            <!-- 草稿箱控件 -->
            <BoxComponent v-if="activeName === '草稿箱'" ref="boxes"/>
           
        </div>
        <div style="font-size: 55px;"></div>
    </div>
</template>
<style>
.writer-components {
    display: block;
  height: 100%;
  width: 100%;
  
    overflow-y: hidden;
 margin-bottom: 35px;
}

.writer-container {
    display: flex;
    flex-direction: column;
    height: 100%;
   
    overflow: auto;
}

.writer-header {


    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    width: 100%;
    background-color: rgb(247, 248, 250);
    height: 38px;
}

.writer-tabs {
    background-color: rgb(247, 248, 250);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    height: 45px;


    display: flex;
    flex-direction: column;

}

.writer-search {
    width: 60%;
    background-color: rgb(247, 248, 250);

    display: flex;
    flex-direction: column;

}





.demo-tabs {
    padding-left: 0px;
    /* background-color: rgb(247, 248, 250); */
    /* width:50%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    width: 40%;
    margin: 0 auto
}

.demo-tabs .el-tabs__nav-wrap {
    justify-content: center !important;
}

.demo-tabs>.el-tabs__content {

    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    background-color: white;
    width: 100%;


    display: flex;

    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
}
</style>

<script>
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';

import NewsComponent from "./NewsComponent.vue";
import SellComponent from "./SellComponent.vue";
import DramaComponent from "./DramaComponent.vue";
import BoxComponent from "./BoxComponent.vue";


const inputtext = ref('');
const radio1 = ref('新闻热点')
const activeName = ref('新闻热点')
export default {

    mounted() {

    },
    methods:
    {
        getComponentName(tabName) {
            switch (tabName) {
                case "新闻热点":
                    return "NewsComponent";
                case "爆款热卖":
                    return "SellComponent";
                case "爆剧剧本":
                    return "DramaComponent";
                case "草稿箱":
                    return "BoxComponent";
                default:
                    return "";
            }
        },
        handleClick(tab) {
            this.activeTab = tab.name;

        },
        onSearch() {
            this.$refs.news.setSearch(this.inputtext)
            this.$refs.books.setSearch(this.inputtext)
            this.$refs.sells.setSearch(this.inputtext)
        }
    },
    components: {

        Search,
        NewsComponent,
        SellComponent,
        DramaComponent,
        BoxComponent,
    },
    data() {
        return {
            inputtext: '',
            radio1: '新闻热点',
            activeName: '新闻热点',
            selectedIcon: '',
            icons: ['logo', 'logo', 'logo', 'logo'],
        };
    },
}
</script>
