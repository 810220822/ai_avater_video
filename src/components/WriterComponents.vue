<template>
    <div class="grid-container">
        <div class="grid-title">
            创意写作
        </div>
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
        <div>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="新闻热点" name="新闻热点">新闻热点</el-tab-pane>
                <el-tab-pane label="爆款热卖" name="爆款热卖">爆款热卖</el-tab-pane>
                <el-tab-pane label="爆剧剧本" name="爆剧剧本">爆剧剧本</el-tab-pane>
                <el-tab-pane label="草稿箱" name="草稿箱">草稿箱</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<style>
.grid-caogaoxiang {
    color: darkblue;
}

.grid-title {
    padding-left: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: large;
}

.input-with-select {
    background-color: var(--el-fill-color-blank);
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
    background-color:  rgb(247, 248, 250);
    padding-top: 8px;
    padding-bottom: 8px;
}

.grid-container {
    /* padding-left: 15px;padding-right: 15px; */
    display: flex;
    flex-direction: column;
    width: 100%;

}

.grid-search-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
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
    background-color:  rgb(247, 248, 250);
}

.grid-tabs {
    background-color: var(--el-fill-color-blank);

    display: flex;

    justify-content: flex-start;
    align-items: center;
    align-content: bottom;
    justify-items: bottom;

 
    padding-left: 15px;

}
.demo-tabs{
    padding-left: 13px;
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

const inputtext = ref('');
const radio1 = ref('新闻热点')
const activeName = ref('新闻热点')
export default {

    mounted() {

    },
    methods:
    {

    },
    components: {

        Search
    },
    data() {
        return {
            inputtext: '',
            radio1: '新闻热点',
            activeName:'新闻热点',
        };
    },
}
</script>
