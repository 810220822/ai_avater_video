<template>
    <div class="editor-container"> <!-- editor-container 自适应浏览器，宽高撑满屏幕-->

        <div class="editor-row tools">

            <div>

                <el-button class="tool-button" type="primary" text>更长</el-button>
                <el-button class="tool-button" type="primary" text>更短</el-button>
                <el-button class="tool-button" type="primary" text>专业化</el-button>
                <el-button class="tool-button" type="primary" text>娱乐化</el-button>
                <el-divider direction="vertical" />
                <el-button class="tool-button" type="primary" text bg><el-icon>
                        <Picture />
                    </el-icon>AI作图</el-button>
                <el-button class="tool-button" type="primary" text bg><el-icon>
                        <Mic />
                    </el-icon>播放台词</el-button>  
                    <el-button class="tool-button" type="primary" text bg><el-icon>
                        <VideoPlay />
                    </el-icon>视频编辑</el-button>
                <el-divider direction="vertical" />
            </div>
            <div>
                <el-button class="tool-button" type="primary">

                    <el-icon>
                        <Document />
                    </el-icon></el-button>
                <el-button class="tool-button">

                    <el-icon>
                        <Delete />
                    </el-icon></el-button>
            </div>


        </div>
        <!-- 基本信息 basic-info-->
        <span class="editor title">简介</span>
        <div class="editor-row abstract">

            <div class="basic-info row">
                <span class="editor-label">标题</span>
                <div class="basic-info row">
                    <el-input class="editor-el-input title" v-model="draftEditor.title" maxlength="50" show-word-limit>
                    </el-input>
                    <span class="editor tip">{{ draftEditor.creater }}</span>
                    <span class="editor tip">{{ draftEditor.updatetime }}</span>
                </div>


            </div>

            <div class="basic-info row">

                <span class="editor-label">内容</span>
                <div class="basic-info row">
                    <el-input class="editor-el-input" v-model="draftEditor.abstract" maxlength="150"
                        show-word-limit></el-input>
                </div>
            </div>


        </div>

        <div class="editor title collapse" @click="toggleCollapse" :class="{ 'expanded': !isCollapsed }">
            <span> 角色 </span>
            <el-icon v-if="isCollapsed">
                <ArrowRight />
            </el-icon>
            <el-icon v-else>
                <ArrowDown />
            </el-icon>
        </div>
        <div class="editor-row roles" :class="{ 'collapsed': isCollapsed }">

            <div class="basic-info button">
                <el-radio-group style="width: 150px;" v-for="role in draftEditor.roles" :key="role.roleid"
                    v-model="selectedRoleId" @change="updateSelectedRole(temp)">

                    <el-radio-button style="padding-top: 5px;width: 130px;" :label="role.roleid" :value="role.roleid">{{
                        role.name
                    }}</el-radio-button>
                </el-radio-group>

            </div>
            <div class="basic-info basic" v-if="selectedRole">

                <div class="basic-info row">

                    <span class="editor-label short">姓名</span>
                    <div class="basic-info row">
                        <el-input class="editor-el-input" v-model="selectedRole.name" maxlength="20"
                            show-word-limit></el-input>
                    </div>
                </div>
                <div class="basic-info row">

                    <span class="editor-label short">性别</span>
                    <div class="basic-info row">
                        <el-input class="editor-el-input" v-model="selectedRole.sex" maxlength="20"
                            show-word-limit></el-input>
                    </div>
                </div>
                <div class="basic-info row">

                    <span class="editor-label short">年龄</span>
                    <div class="basic-info row">
                        <el-input class="editor-el-input" v-model="selectedRole.age" maxlength="20"
                            show-word-limit></el-input>
                    </div>
                </div>
                <div class="basic-info row">

                    <span class="editor-label short">风格</span>
                    <div class="basic-info row">
                        <el-input class="editor-el-input" v-model="selectedRole.style" maxlength="20"
                            show-word-limit></el-input>
                    </div>
                </div>
            </div>
            <div class="basic-info states" v-if="selectedRole.states.length > 0">
                <div class="basic-info-state" v-for="state in selectedRole.states" :key="state.stateid">
                    <img :src="state.img_url" alt="状态图" class="thumbnail" />
                    <!-- <img :src="state.img_url" alt="状态图" /> -->
                    <div class="basic-info row">

                        <span class="editor-label short">状态</span>
                        <div class="basic-info row">
                            <el-input class="editor-el-input" v-model="state.state" maxlength="20"
                                show-word-limit></el-input>
                        </div>
                    </div>
                    <div class="basic-info row">

                        <span class="editor-label short">描述</span>
                        <div class="basic-info row nopadding">
                            <el-input class="editor-el-input" v-model="state.desc" maxlength="20"
                                show-word-limit></el-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-divider style="margin: 0px;" />

        <span class="editor title">大纲</span>
        <!-- program-list -->
        <div class="editor-row  program">
            <div v-for="item in draftEditor.program" :key="item.scene">
                <div class="editor-row roles">
                    <img class="thumbnail" :src="item.img_url" alt="状态图" @click="showImagePopup(item)" />

                    <div class="editor-row">
                        <div class="basic-info row">
                            <span class="editor-label">场景</span>
                            <div class="basic-info row">
                                <span class="editor-label">{{ item.sceneid }}</span>

                            </div>
                        </div>
                        <div class="basic-info row">
                            <span class="editor-label">描述</span>
                            <div class="basic-info row">

                                <el-input class="editor-el-input title" v-model="item.scene" maxlength="500"
                                    show-word-limit>
                                </el-input>
                            </div>
                        </div>
                        <div class="basic-info row">
                            <span class="editor-label">角色</span>
                            <div class="basic-info row">

                                <el-tree-select v-model="item.roles" :data="rolesOptions" @node-click="onRoleChange"
                                    multiple :render-after-expand="false" show-checkbox />

                            </div>
                        </div>
                        <div class="basic-info row">
                            <span class="editor-label">描述</span>
                            <div class="basic-info row">
                                <el-input class="editor-el-input title" v-model="item.atmosphere" maxlength="500"
                                    show-word-limit>
                                </el-input>
                            </div>
                        </div>
                        <div class="basic-info row">
                            <span class="editor-label">台词</span>
                            <div class="basic-info row">
                                <el-input class="editor-el-input title" v-model="item.lyric" maxlength="500"
                                    show-word-limit>
                                </el-input>
                            </div>
                        </div>
                    </div>

                </div>


                <el-divider />
            </div>

        </div>
    </div>
</template> 
  

<style scoped>
.editor-row.roles {
    flex-direction: row;
    height: auto;
    max-height: 210px;
    /* border: 1px solid rgb(228, 231, 237); */

    transition: max-height 0.3s ease;
    /* 添加过渡效果 */
    max-height: 210px;
    /* 默认展开的最大高度 */
    overflow: hidden;
    /* 超出部分隐藏 */
}

.editor.title.collapse {
    /* border-bottom: 1px solid rgb(228, 231, 237); */
    /* 设置底部边框样式 */
    cursor: pointer;
    /* 鼠标指针样式为手型 */
}

.editor.title.collapse.expanded {
    border-bottom: none;
    /* 移除底部边框样式 */
}

.thumbnail {
    max-width: 200px;
    max-height: 200px;
    object-fit: contain;
    /* 设置适应方式为contain */
    cursor: pointer;
}

.editor.title.collapse .el-icon {
    display: inline-block;
    /* 内联元素块级化 */
    margin-left: 5px;
    /* 设置图标的左边距 */
}


.editor-row.roles.collapsed {
    max-height: 0;
    /* 收起时的高度为0 */
}

.basic-info {
    /* max-height: 150px; */
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 10px;
    background-color: rgb(247, 248, 250);
}

.basic-info.button {
    overflow-x: hidden;
    max-width: 140px;
    justify-content: flex-start;
    border-right: 1px solid rgb(228, 231, 237);
}

.basic-info.basic {
    max-width: 210px;
    overflow-x: hidden;
    border-right: 1px solid rgb(228, 231, 237);
}

.basic-info.states {
    overflow-x: scroll;
    flex-direction: row;
    overflow-y: hidden;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
}

.basic-info-state {
    max-width: 210px;
    min-width: 200px;
    padding: 0px 1px;

}

.editor.title.collapse {
    font-size: 15px;
    font-weight: bold;
    padding-right: 50px;
    width: 97%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.editor.title {
    font-size: 15px;
    font-weight: bold;
    padding: 10px 7px;
    width: 100%;

}

.editor-label.short {
    width: 40px;
}

.editor-label {
    width: 60px;
    font-size: smaller;
    color: #666;
    text-align: center;
}

.editor-row {
    padding: 3px 10px;
    display: flex;
    flex: 1;
    flex-direction: column;
    font-family: "Microsoft YaHei", sans-serif;
}

.editor-row.abstract {
    align-items: center;
    text-align: center;
    /* vertical-align: middle; */
    max-height: 110px;
}

.basic-info.row.nopadding {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    overflow-y: hidden;
    padding: 0px 0px;
}

.basic-info.row {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    overflow-y: hidden;
    padding: 2px 0px;
}

.editor.tip {
    font-size: xx-small;
    text-wrap: nowrap;
    margin-left: 15px;
    color: gray;
}

.editor-el-input {

    /* width: 80%; */
    margin: 3px;
    align-items: center;
    text-align: center;
    display: flex;
    font-style: italic;
    color: rgb(77, 15, 36);
}

/** el-input disabled时的文字颜色*/
.el-input.is-disabled .el-input__inner {
    color: #d61616;
}

.editor-el-input.title {
    /* width: 100%; */
    margin: 0px;
    font-style: italic;
}

.editor-row.tools {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px; */
    background-color: #f0f0f0;
    max-height: 33px;
    padding: 10px 0px;
    width: 100%;
}




.editor-row.program {
    flex: 1;
    overflow-y: auto;
    height: 100%;
    /* 减去工具栏高度 */
    padding: 10px;


    display: flex;
    flex-direction: column;

    margin-bottom: 35px;
}

.editor-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;

    :deep(.el-input__wrapper) {
        box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
        cursor: default;

        .el-input__inner {
            cursor: default !important;
        }
    }

    :deep(.el-textarea__inner) {
        box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
        resize: none;
        cursor: default;
    }

    :deep(.el-radio-button__inner) {
        width: 120px;
    }

    background-color: rgb(247, 248, 250);

}



.tool-button {
    margin-right: 5px;
}
</style>
<script >



import { Delete, VideoPlay, Picture, ArrowRight, ArrowDown } from '@element-plus/icons-vue'
import { ElButton, ElMessageBox } from 'element-plus'
import { h } from 'vue'
export default {
    methods:
    {
        showImagePopup(item) {
            const imageNode = h('img', {
                src: item.img_url,
                alt: '预览图片',
                style: {

                },
            });
            const regenerateButtonNode = h(
                ElButton,
                {
                    onClick: () => this.regenerateImage(item),
                },
                '重新生成'
            );

            const contentNode = h('div', [
                h('div', { style: { marginBottom: '10px' } }, imageNode),
                h('div', regenerateButtonNode),
            ]);
            ElMessageBox.confirm(
                contentNode,
                '预览',
                {
                    confirmButtonText: 'OK',


                    center: true,
                }
            )
                .then(() => {

                })
                .catch(() => {

                })
        },
        regenerateImage(item) {
            // 重新生成图片的逻辑
            console.log('重新生成图片')
            console.log(item)
            console.log(this.draftEditor)
        },
        findRoleById(roleId) {
            // 在 `draftEditor.roles` 中根据 `roleId` 查找对应的角色信息
            for (const role of this.draftEditor.roles) {
                for (const state of role.states) {
                    if (state.roleid === roleId) {
                        return state;
                    }
                }
            }
            return null;
        },
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
        },
        getRoles(roles) {
            const roleNames = roles.map((role) => {
                const matchedRole = this.draftEditor.roles.find((r) => r.roleid === role.rolecode);
                return matchedRole ? matchedRole.name : '';
            });
            return roleNames.join(', ');
        },
        updateSelectedRole(temp) {
            // 处理选中角色变化的逻辑代码

            // this.selectedRoleId  = 
        },
        onRoleChange(data) {
            // 处理选中项变化的逻辑

        },
    },
    watch: {

    },
    computed: {
        rolesOptions() {
            const options = [];
            for (const role of this.draftEditor.roles) {
                const roleOption = {
                    label: role.name,
                    value: role.roleid,
                    children: [],
                };
                for (const state of role.states) {
                    const stateOption = {
                        label: role.name + '-' + state.state,
                        value: state.stateid,
                    };
                    roleOption.children.push(stateOption);
                }
                options.push(roleOption);
            }

            return options;
        },

        selectedRole() {
            var role = this.draftEditor.roles.find(role => role.roleid === this.selectedRoleId)

            return role;
        }
    },
    mounted() {

    },
    components: {
        Delete, VideoPlay, Picture, ArrowRight, ArrowDown, ElButton
    },
    props: {

    },
    data() {
        return {
            activeTab: '', // 添加activeTab属性
            selectedRoleId: 1,
            isCollapsed: true,
            selectvalue: [],
            draftEditor: {

                title: '标题1',
                abstract: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                updatetime: '2021-01-01 12:00:00',
                creater: 'admin',
                roles: [{
                    name: '11111女主',
                    roleid: 1,
                    sex: '女',
                    age: 18,
                    style: '流行',
                    states: [{
                        state: '年轻1',
                        stateid: '11',
                        desc: '描述一下',
                        img_url: require('../assets/icons/none.png')
                    }, {
                        state: '中年1',
                        stateid: '12',
                        desc: '描述一下',
                        img_url: require('../assets/icons/none.png')
                    },
                    ],
                }, {
                    name: '女主',
                    roleid: 2,
                    sex: '女',
                    age: 18,
                    style: '流行',
                    states: [{
                        state: '年轻',
                        stateid: '21',
                        desc: '描述一下',
                        img_url: require('../assets/icons/none.png')
                    }, {
                        state: '中年',
                        stateid: '22',
                        desc: '描述一下',
                        img_url: require('../assets/icons/none.png')
                    },
                    ],
                },
                ],
                program: [
                    {
                        sceneid: 1,
                        scene: '场景描述场景描述场景描述',
                        roles: ['11', '12'],
                        img_url: require('../assets/icons/none.png'),
                        atmosphere: "气氛描述啊大是大非",
                        lyric: '第一句台词。第二局台词。第三节台词。',
                    },
                     {
                        sceneid: 2,
                        scene: '场景描述场景描述场景描述',
                        roles: ['21', '12'],
                        img_url:  require('../assets/icons/none.png'),
                        atmosphere: "气氛描述啊大是大非",
                        lyric: '第一句台词。第二局台词。第三节台词。',
                    }, {
                        sceneid: 3,
                        scene: '场景描述场景描述场景描述',
                        roles: ['11', '22'],
                        img_url:  require('../assets/icons/none.png'),
                        atmosphere: "气氛描述啊大是大非",
                        lyric: '第一句台词。第二局台词。第三节台词。',
                    },
                ]
            },

        }
    },
    mounted() {

    }
}
</script>

  