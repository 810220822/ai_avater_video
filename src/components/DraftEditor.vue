<template>
    <div class="editor-container">
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
            <div style="min-width: 120px;">
                <el-button class="tool-button" type="primary" @click="onSave">

                    <el-icon>
                        <Document />
                    </el-icon></el-button>
                <el-button class="tool-button" @click="onDelete">

                    <el-icon>
                        <Delete />
                    </el-icon></el-button>
            </div>


        </div>

        <div class="editor-container  row" style="display: flex;flex-direction: row;">
            <div class="editor-container col1"> <!-- editor-container 自适应浏览器，宽高撑满屏幕-->

                <span class="editor title">简介</span>
                <div class="editor-row abstract">
                    <div class="editor tip"
                        style="width:100%;display: flex;justify-content:flex-end; align-items:center;padding-right: 60px;color: rgb(196,197,201);">
                        <el-button link disabled :loading="saved" plain>{{ saved_tip }}</el-button>
                        {{
                            draftEditor.updatetime }}
                    </div>
                    <div style="width: 100%;display: flex; align-items: center;margin-right: 20px;">
                        <el-form :model="draftEditor" class="editor-row abstract el-form">
                            <div class="basic-info row">

                                <el-form-item prop="title" label="标题" style="width: 100%;" :rules="[
                                    {
                                        required: true,
                                        message: '标题为必填项',
                                        trigger: 'blur',
                                    },

                                ]">
                                    <el-input v-model="draftEditor.title" maxlength="50" required show-word-limit>
                                    </el-input>

                                </el-form-item>

                            </div>
                            <div class="basic-info row">

                                <el-form-item prop="abstract" label="内容" style="width: 100%;" :rules="[
                                    {
                                        required: true,
                                        message: '内容为必填项',
                                        trigger: 'blur',
                                    },

                                ]">
                                    <el-input v-model="draftEditor.abstract" maxlength="200" required show-word-limit />
                                </el-form-item>
                            </div>
                        </el-form>

                    </div>

                </div>
                <div style="display: flex;justify-self: space-between;align-items: center;">
                    <span class="editor title">大纲</span>
                    <el-button @click="addProgram" type="primary" link>
                        新增场景</el-button>
                </div>



                <div class="editor-row  program">
                    <div v-for="item in draftEditor.program" :key="item.sceneid">
                        <div class="editor-row roles">
                            <img class="thumbnail" :src="item.img_url" alt="状态图" @click="showImagePopup(item)" />

                            <div class="editor-row">
                                <div class="basic-info row">
                                    <span class="editor-label">场景</span>
                                    <div class="basic-info row" style="justify-content: space-between;">
                                        <span class="editor-label">{{ item.sceneid }}</span>
                                        <el-button plain link @click="onDeleteProgram(item)">
                                            <el-icon>
                                                <Delete />
                                            </el-icon>删除场景</el-button>
                                    </div>
                                </div>
                                <div class="basic-info row">
                                    <span class="editor-label">描述</span>
                                    <div class="basic-info row">

                                        <el-input @blur="onSave" class="editor-el-input title" v-model="item.scene"
                                            maxlength="500" show-word-limit>
                                        </el-input>
                                    </div>
                                </div>
                                <div class="basic-info row">
                                    <span class="editor-label">角色</span>
                                    <div class="basic-info row">

                                        <el-tree-select v-model="item.roles" :data="rolesOptions" multiple
                                            :render-after-expand="false" show-checkbox @change="onSave" />

                                    </div>
                                </div>
                                <div class="basic-info row">
                                    <span class="editor-label">描述</span>
                                    <div class="basic-info row">
                                        <el-input @blur="onSave" class="editor-el-input title" v-model="item.atmosphere"
                                            maxlength="500" show-word-limit>
                                        </el-input>
                                    </div>
                                </div>
                                <div class="basic-info row">
                                    <span class="editor-label">台词</span>
                                    <div class="basic-info row">
                                        <el-input @blur="onSave" class="editor-el-input title" v-model="item.lyric"
                                            maxlength="500" show-word-limit>
                                        </el-input>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <el-divider />
                    </div>
                    <div style="display: flex;
                    justify-content: center;
                    align-items: center;">

                    </div>
                </div>
            </div>

            <el-divider direction="vertical" style="height: 100%;" />
            <div
                style="display: flex; flex-direction: column;width: 310px;height: 100%;overflow-y: auto;margin-bottom: 55px;">

                <div style="display: flex;justify-self: space-between;align-items: center;">

                    <span class="editor title" style=""> 角色 </span>

                    <el-button style="display: flex;justify-content: center;
                    align-items: center;margin: 10px 15px;" @click="addRole" type="primary" link>新增角色</el-button>
                </div>


                <el-collapse v-model="activeNames" v-for="role in draftEditor.roles" :key="role.roleid">
                    <el-collapse-item :title="role.name" :name="role.roleid">

                        <div>

                            <div class="basic-info states">

                                <div class="basic-info-state" v-for="state in role.states" :key="state.stateid"
                                    v-if="role.states.length > 0">
                                    <img :src="state.img_url" alt="状态图" class="thumbnail" />
                                    <div class="basic-info row" style="display: flex;justify-content: center;">
                                        <el-button plain link @click="onDeleteState(role, state)">
                                            <el-icon>
                                                <Delete />
                                            </el-icon>删除状态</el-button>
                                    </div>
                                    <div class="basic-info row">

                                        <span class="editor-label short">状态</span>
                                        <div class="basic-info row">
                                            <el-input @blur="onSave" class="editor-el-input" v-model="state.state"
                                                maxlength="20" show-word-limit></el-input>
                                        </div>
                                    </div>
                                    <div class="basic-info row">

                                        <span class="editor-label short">描述</span>
                                        <div class="basic-info row nopadding">
                                            <el-input @blur="onSave" class="editor-el-input" v-model="state.desc"
                                                maxlength="20" show-word-limit></el-input>
                                        </div>
                                    </div>
                                </div>
                                <div type="primary" style="display: flex;justify-content: center;
                    align-items: center;margin: 10px 15px;height: 120px;min-width: 60px;word-break: break-all;
                    border:1px solid rgb(220, 230, 232);color:  rgb(76, 76, 77); padding: 10px;"
                                    @click="addRoleState(role.roleid)">增加状态</div>

                            </div>
                            <div class="basic-info basic">

                                <div class="basic-info row">

                                    <span class="editor-label short">姓名</span>
                                    <div class="basic-info row">
                                        <el-input @blur="onSave" class="editor-el-input" v-model="role.name" maxlength="20"
                                            show-word-limit></el-input>
                                    </div>
                                </div>
                                <div class="basic-info row">

                                    <span class="editor-label short">性别</span>
                                    <div class="basic-info row">
                                        <el-input @blur="onSave" class="editor-el-input" v-model="role.sex" maxlength="20"
                                            show-word-limit></el-input>
                                    </div>
                                </div>
                                <div class="basic-info row">

                                    <span class="editor-label short">年龄</span>
                                    <div class="basic-info row">
                                        <el-input @blur="onSave" class="editor-el-input" v-model="role.age" maxlength="20"
                                            show-word-limit></el-input>
                                    </div>
                                </div>
                                <div class="basic-info row">

                                    <span class="editor-label short">风格</span>
                                    <div class="basic-info row">
                                        <el-input @blur="onSave" class="editor-el-input" v-model="role.style" maxlength="20"
                                            show-word-limit></el-input>
                                    </div>
                                </div>
                                <div class="basic-info row">


                                    <div class="basic-info row" style="display: flex;justify-content: flex-end;">
                                        <el-button plain link @click="onDeleteRole(role)">
                                            <el-icon>
                                                <Delete />
                                            </el-icon>删除角色</el-button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </el-collapse-item>
                </el-collapse>


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
    /* border-right: 1px solid rgb(228, 231, 237); */
}

.basic-info.basic {

    overflow-x: hidden;
    /* border-right: 1px solid rgb(228, 231, 237); */
}

.basic-info.states {
    width: 100%;
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    /* vertical-align: middle; */
    max-height: 140px;
    width: 100%;

}

.editor-row.abstract.form {
    margin-right: 120px;
    padding-right: 120px;
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
    justify-content: flex-start;
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
    background-color: rgb(247, 248, 250);

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

    :deep(.el-collapse) {
        padding-bottom: 2px;
        --el-collapse-border-color: none;
    }

    :deep(.el-collapse-item) {
        /* --el-collapse-border-color: none; */
    }

    :deep(.el-collapse-item__header) {
        background-color: rgb(247, 248, 250);
    }

    :deep(.el-collapse-item__content) {
        background-color: rgb(247, 248, 250);
        border-bottom: 1px solid rgb(221, 224, 231);
    }



}



.tool-button {
    margin-right: 5px;
}
</style>
<script >



import { Delete, VideoPlay, Picture, ArrowRight, ArrowDown } from '@element-plus/icons-vue'
import { ElButton, ElMessageBox, ElNotification } from 'element-plus'
import { h } from 'vue'
import { backendURL } from '@/utils/api.js';
import moment from 'moment';
import { timePanelSharedProps } from 'element-plus/es/components/time-picker/src/props/shared';

export default {
    methods:
    {
        onDeleteState(role, state) {
            console.log(this.rolesOptions);
            console.log(this.draftEditor);
            this.$confirm('确定删除吗？', '确认删除', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {

                    // 用户点击了确定按钮
                    // 在这里执行删除操作

                    const role_index = this.draftEditor.roles.findIndex(item => item.roleid === role.roleid);


                    const index = this.draftEditor.roles[role_index].states.findIndex(item => item.stateid === state.stateid);

                    if (index !== -1) {

                        this.draftEditor.roles[role_index].states.splice(index, 1); // 从数组中删除找到的对象
                        for (var pi = 0; pi < this.draftEditor.program.length; pi++) {
                            var pro = this.draftEditor.program[pi];
                            for (var ri = 0; ri < pro.roles.length; ri++) {
                                var temprole =  pro.roles[ri];
                                if (temprole === state.stateid) {
                                    pro.roles.splice(ri, 1);
                                }
                            }
                        }
                        this.$message.success('删除成功');
                        this.onSave();
                    }
                })
                .catch(() => {
                    // 用户点击了取消按钮
                    // this.$message.info('取消删除');
                });
        },
        onDeleteRole(role) {
            this.$confirm('确定删除吗？', '确认删除', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {

                    // 用户点击了确定按钮
                    // 在这里执行删除操作
                    const index = this.draftEditor.roles.findIndex(item => item.roleid === role.roleid); // 根据对象属性查找索引、

                    if (index !== -1) {

                        this.draftEditor.roles.splice(index, 1); // 从数组中删除找到的对象

                        for (var pi = 0; pi < this.draftEditor.program.length; pi++) {
                            var pro = this.draftEditor.program[pi];
                            for (var ri = 0; ri < pro.roles.length; ri++) {
                                var temprole =  pro.roles[ri];
                                for(var tempid = 0; tempid < role.states.length; tempid++){
                                    if(temprole === role.states[tempid].stateid){
                                        pro.roles.splice(ri, 1);
                                    }
                                }
                            }
                        }

                        this.$message.success('删除成功');
                        this.onSave();
                    }
                })
                .catch(() => {
                    // 用户点击了取消按钮
                    // this.$message.info('取消删除');
                });
        },
        onDeleteProgram(pro) {

            this.$confirm('确定删除吗？', '确认删除', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {

                    // 用户点击了确定按钮
                    // 在这里执行删除操作
                    const index = this.draftEditor.program.findIndex(item => item.sceneid === pro.sceneid); // 根据对象属性查找索引、

                    if (index !== -1) {

                        this.draftEditor.program.splice(index, 1); // 从数组中删除找到的对象
                        for (var i = 0; i < this.draftEditor.program.length; i++) {
                            this.draftEditor.program[i]['sceneid'] = i + 1;
                        }
                        this.$message.success('删除成功');
                        this.onSave();
                    }
                })
                .catch(() => {
                    // 用户点击了取消按钮
                    // this.$message.info('取消删除');
                });
        },
        addRoleState(roelid) {

            for (var i = 0; i < this.draftEditor.roles.length; i++) {
                if (this.draftEditor.roles[i].roleid == roelid) {

                    var stateid = i.toString() + '_' + (this.draftEditor.roles[i].states.length + 1).toString()


                    console.log(i, this.draftEditor.roles[i].states.length + 1, stateid)
                    var state = {
                        state: '',
                        stateid: stateid,
                        desc: '',
                        img_url: require('../assets/icons/none.png')
                    }
                    this.draftEditor.roles[i].states.push(state);
                    this.onSave();
                }
            }


        },
        addRole() {
            var role = {
                name: '请输入人物姓名',
                roleid: (this.draftEditor.roles.length + 1).toString(),
                sex: '',
                age: null,
                style: '',
                states: [
                ],
            }

            this.draftEditor.roles.push(role);
            this.onSave();
            this.activeNames = [role.roleid];
        },
        addProgram() {
            var pro = {
                sceneid: (this.draftEditor.program.length + 1).toString(),
                scene: '',
                roles: [],
                img_url: require('../assets/icons/none.png'),
                atmosphere: "",
                lyric: ''
            }
            this.draftEditor.program.push(pro);
            this.onSave();
        },
        onDelete() {

            this.$http.get(backendURL + '/delete-data', {
                params: {
                    id: this.draftEditor.id,

                }
            })
                .then(response => {
                    ElNotification({
                        title: '成功',
                        message: '草稿已删除',
                        type: 'success',
                    })

                    // 在需要的时候调用该方法
                    this.$emit('delete-event', this.draftEditor.id);
                })
                .catch(error => {
                    console.error(error);
                    ElNotification({
                        title: '失败',
                        message: error.message,
                        type: 'error',
                    })

                });
        },
        onSave() {

            if (this.draftEditor.title == '' || this.draftEditor.abstract == '') {
                ElMessageBox.alert('请输入必填项');
                return;
            }
            this.saved = true;
            this.saved_tip = '正在保存:';
            const website = this.selectedIcoName;// 替换为你的网站参数

            this.$http.post(backendURL + '/save-data',
                this.draftEditor
            )
                .then(response => {
                    const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
                    this.draftEditor.updatetime = currentTime;

                    this.saved = false;
                    this.saved_tip = '保存时间：';

                    // 在需要的时候调用该方法
                    this.$emit('saved-event', this.draftEditor);
                })
                .catch(error => {
                    console.error(error);
                    ElNotification({
                        title: '失败',
                        message: error.message,
                        type: 'error',
                    })

                });
        },


        newDraft(editor) {
            this.draftEditor = editor;
            this.activeNames = [];

            for (var i = 0; i < this.draftEditor.roles.length; i++) {
                this.activeNames.push(this.draftEditor.roles[i]["roleid"]);

            };

        },
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
            saved_tip: '保存时间：',
            saved: false,
            activeNames: [], // 存储折叠项的状态
            isCollapsed: false,
            selectvalue: [],
            draftEditor: {
                id: '',
                title: '',
                abstract: '',
                updatetime: '--',
                creater: 'admin',
                roles: [
                ],
                program: [
                    {

                    }

                ]
            },

        }
    },
    mounted() {

    }
}
</script>

  