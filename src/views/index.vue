<template>
    <div style="padding-left: 15px;padding-right: 15px;">
        <!-- 第二行：按钮 <el-icon><UploadFilled /></el-icon>-->
        <div class="first-row">
            <div class="button-row">
                <el-button type="primary" plain> <el-icon>
                        <Folder />
                    </el-icon>输出视频</el-button>
                <el-button type="primary" plain><el-icon>
                        <Cpu />
                    </el-icon>工程文件</el-button>
                <el-button type="primary" plain> <el-icon>
                        <VideoPlay />
                    </el-icon>视频</el-button>
                <el-button type="primary" plain> <el-icon>
                        <Picture />
                    </el-icon>图片</el-button>
                <el-button type="primary" plain> <el-icon>
                        <Microphone />
                    </el-icon>音频</el-button>
                <el-button type="primary" plain> <el-icon>
                        <User />
                    </el-icon>Avater</el-button>
                <el-button type="primary" plain> <el-icon>
                        <Mic />
                    </el-icon>声音克隆</el-button>
            </div>


            <div class="search-bar">
                <!-- <el-input v-model="inputtext" class="search-input" placeholder="Please Input"  >  <template #prefix>
        <i class="el-icon-search"></i>
      </template></el-input> -->
                <el-input v-model="inputtext" placeholder="输入名称，支持模糊查询" class="search-input" ref="inputRef">

                    <template #append>
                        <el-button> <el-icon>
                                <Search />
                            </el-icon></el-button>
                    </template>
                </el-input>
            </div>
        </div>

        <!-- 第三行：列表 -->
        <div class="data-table">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="name" label="名称"></el-table-column>

                <el-table-column prop="kind" label="分类"></el-table-column>
                <el-table-column prop="modifiedTime" label="修改时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text">分享</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
    
<style>
.search-input {
    display: flex;
    flex: 1;
    /* flex-direction: column-reverse; */
    justify-content: flex-end;
}

.search-bar {
    display: flex;
    /* flex-direction: column-reverse; */
    justify-content: flex-end;
    /* padding-top: 10px; */
    padding-bottom: 10px;
    width: 300px;

}

.search-input {
    width: 400px;
}

.first-row {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
}

.button-row {
    margin-bottom: 10px;
}

.data-table {
    /* max-width: 600px; */
    margin: 0 auto;
}
</style>
<script >

import { ElIcon } from 'element-plus';
import { VideoPlay, Picture, Microphone, Mic, Shop, Cpu, Folder, User, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { reactive } from "vue";
const inputtext = ref('');
// const form2 = reactive({ name: "大是大非" });
export default {

    mounted() {

    },
    methods:
    {

    },
    components: {
        ElIcon,
        VideoPlay,
        Picture,
        Microphone,
        Mic,
        Shop,
        Cpu,
        Folder,
        User,
        Search
    },
    data() {
        return {
            inputtext: '',
            searchText: '',
            tableData: [
                {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                },
            ],
        };
    },
}
</script>

  