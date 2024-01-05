<template>
    <div class="box-container" v-loading="initLoading">
        <div    class="draft-list">

            <div>
                <el-input v-model="searchTxt" placeholder="查询草稿" size="small" style="width: 100%;margin: 5px 0px;">

                    <template #append>
                        <el-button @Click="onSearch">
                            <el-icon>
                                <Search />
                            </el-icon>
                        </el-button>
                    </template>
                </el-input>
            </div>

            <DraftListItem ref='draftList' v-for="draft in drafts" :key="draft.id" :draft="draft"
                @select-draft="selectDraft(draft)">
            </DraftListItem>
            <el-button type="primary" @click="newDraftEditor" style="width: 200px;">新增草稿</el-button>
        </div>
        <div class="draft-editor">
            <DraftEditor v-loading="editLoading" ref='draftEditor' style="height: 100%;" @saved-event="savedEditorEvent"
                @delete-event="deleteDraftEvent"></DraftEditor>
        </div>

    </div>
</template>
<script>
import DraftListItem from '../components/template/DraftListItem.vue';
import DraftItem from '../components/template/DraftItem.vue';
import DraftEditor from '../components/DraftEditor.vue';
import { backendURL } from '@/utils/api.js';
import { ElNotification } from 'element-plus';
const { v4: uuidv4 } = require('uuid');
// sDraftListItem onents/WriterComponents.vue';
export default {
    methods:
    {
        deleteDraftEvent(id) {

            for (var i = 0; i < this.drafts.length; i++) {
                if (this.drafts[i].id == id) {

                    this.drafts.splice(i, 1);
                    this.newDraftEditor();
                    return;
                }
            }
        },
        savedEditorEvent(draft) {

          
            for (var i = 0; i < this.drafts.length; i++) {
                if (this.drafts[i].id == draft.id) {

                    this.drafts[i]["title"] = draft.title;
                    this.drafts[i]["updatetime"] = draft.updatetime;
                    this.drafts[i]["creater"] = draft.creater;
                    this.drafts[i]["abstract"] = draft.abstract;
                    return;
                }
            }
            var obj = {
                id: draft.id,
                title: draft.title,
                updatetime: draft.updatetime,
                creater: draft.creater,
                abstract: draft.abstract
            }
            this.drafts.unshift(obj);
        },
        onSearch() {
            this.loadDrafts();
        },
        loadDrafts() {

            var url = backendURL + `/searchDraftlist?keyword=${this.searchTxt}`;
            this.$http.get(url)
                .then(response => {

                    this.drafts = response.data;

                    this.selectDraft(this.drafts[0])

                    this.selectedClass(this.drafts[0].id);
                    this.initLoading = false;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        selectDraft(draft) {

            var url = backendURL + `/loadDraftJson?id=${draft.id}`;
            this.selectedClass(draft.id);
            this.editLoading = true;
            this.$http.get(url)
                .then(response => {

                    this.$refs.draftEditor.newDraft(response.data);

                    this.editLoading = false;

                })
                .catch(error => {
                    console.error(error);

                });
        },
        selectedClass(id) {

            for (var i = 0; i < this.drafts.length; i++) {
                if (this.drafts[i].id == id) {
                    this.drafts[i]['isSelected'] = true;
                }
                else {
                    this.drafts[i]['isSelected'] = false;
                }
            }

        },
        newDraftEditor() {
            const randomUUID = uuidv4();
            const temp_draftEditor =
            {
                id: randomUUID,
                title: '',
                abstract: '',
                updatetime: '--',
                creater: 'admin',
                roles: [

                ],
                program: [

                ]
            };
            this.$refs.draftEditor.newDraft(temp_draftEditor);
        }
    },
    components: {
        DraftListItem, DraftItem, DraftEditor
    },
    created() {
        this.loadDrafts();
    },
    data() {
        return {
            initLoading : true,
            editLoading: false,
            searchTxt: '',
            content: '',
            drafts: [

            ],

        }
    }
}
</script>
<style scoped>
.box-container {
    display: flex;
    height: 100%;
    flex-direction: row;

}

.draft-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    max-width: 230px;
    overflow-y: auto;

    padding-top: 10px;
    background-color: rgb(236, 242, 253);
    margin-bottom: 30px;
}

.draft-editor {
    flex: 1;
    flex-grow: 1;
    overflow-y: auto;
    height: 100%;
}

.draft-warning {
    flex: 1;
    max-width: 230px;
    overflow-y: auto;
}
</style>

