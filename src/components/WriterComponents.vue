<template>
    <div class="grid-container">

        <!-- 元素 1 -->
        <div class="grid-header">


            <el-row class="grid-search" justify="center">

                <el-input v-model="inputtext" placeholder="输入查询内容..." class="input-with-select">

                    <template #append>
                        <el-button> <el-icon>
                                <Search />
                            </el-icon></el-button>
                    </template>
                </el-input>

            </el-row>



        </div>
        <div class="div-tabs">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
                <el-tab-pane label="新闻热点" name="新闻热点"></el-tab-pane>
                <el-tab-pane label="爆款热卖" name="爆款热卖"></el-tab-pane>
                <el-tab-pane label="爆剧剧本" name="爆剧剧本"></el-tab-pane>
                <el-tab-pane label="草稿箱" name="草稿箱"></el-tab-pane>
            </el-tabs>
        </div>
        <div>
                       
 <!--点击tabs的页签，要显示对应的自定义控件。和本控件同在components文件夹下，分别是NewsComponent.vue,SellComponent.vue,DramaComponent.vue,BoxComponent.vue -->
  <!-- 新闻热点控件 -->
  <NewsComponent v-if="activeName === '新闻热点'" />
    <!-- 爆款热卖控件 -->
    <SellComponent v-if="activeName === '爆款热卖'" />
    <!-- 爆剧剧本控件 -->
    <DramaComponent v-if="activeName === '爆剧剧本'" />
    <!-- 草稿箱控件 -->
    <BoxComponent v-if="activeName === '草稿箱'" />
           
        </div>
        <div class="tab-content">
           
        </div>
    </div>
</template>
<style>
.tab-content {
    margin-top: 16px;
}

.grid-container {
    /* padding-left: 15px;padding-right: 15px; */
    display: flex;
    flex-direction: column;
    width: 100%;

}
.div-tabs{
    background-color: rgb(247, 248, 250);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.grid-search {
    width: 60%;
    background-color: rgb(247, 248, 250);
}

.grid-header {


    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    width: 100%;
    background-color: rgb(247, 248, 250);
}



.demo-tabs {
    padding-left: 0px;
    /* background-color: rgb(247, 248, 250); */
    /* width:50%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;

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
import SellComponent from "./SellComponents.vue";
import DramaComponent from "./DramaComponents.vue";
import BoxComponent from "./BoxComponents.vue";


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
