<template>
    <div class="index-layout">

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
        <div class="index-data-table">
            <el-table :data="tableData" class="index-el-table">
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="kind" label="分类"></el-table-column>
                <el-table-column prop="modifiedTime" label="修改时间"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button link type="primary" size="small">
                            详情
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 第三行：列表 -->
        <div class="index-data-footer">
      
        </div>
    </div>
</template>
    
<style>
.index-layout {
    display: flex;
    flex-direction: column;
   
    padding-left: 15px;
    padding-right: 15px;
    height: 100%;
}

.search-input {
    display: flex;
    justify-content: flex-end;
    height: 40px;
}

.search-bar {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
    width: 300px;
    height: 40px;
}

.search-input {
    width: 400px;
    height: 40px;
}

.first-row {
    display: flex;
   
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 5px;
    height: 40px;
    
}

.button-row {
    margin-bottom: 10px;
}

.index-data-table {
    display: flex;
    flex-direction: column;
   

    width: 100%;

    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 5px;
    margin-bottom: 35px;
    
}

.index-el-table {
    display: flex;
    flex: 1;
    overflow-y: auto;
    max-height: 100%;
}

.index-data-footer {
    display: flex;
    flex-direction: column;
  height: 35px;
   overflow-y: auto;
    
}
</style>
<script >

import { ElIcon } from 'element-plus';
import { VideoPlay, Picture, Microphone, Mic, Shop, Cpu, Folder, User, Search } from '@element-plus/icons-vue'
 
 

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
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, , {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名999',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名999',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名999',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名999',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名999',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: '工程名',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                }, {
                    name: 'aaaaaaaaaaaaaaa工程名999',
                    kind: '工程文件',
                    modifiedTime: '2023年12月8日 18:30:54',
                },
            ],
        };
    },
}
</script>

  