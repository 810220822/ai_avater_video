<template>
    <div class="box-container">
        <div class="draft-list">
            <DraftListItem v-for="draft in drafts" :key="draft.id" :draft="draft" @select-draft="selectDraft(draft)">
            </DraftListItem>
        </div>
        <div class="draft-editor">
            <DraftEditor style="height: 100%;"></DraftEditor>
        </div>
        <div class="draft-warning">
          
        </div>
    </div>
</template>
<style scoped>
.box-container {
    display: flex;
    height: 100%;
    flex-direction: row;

}

.draft-list {
    flex: 1;
    max-width: 230px;
    overflow-y: auto;
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

<script>
import DraftListItem from '../components/template/DraftListItem.vue';
import DraftItem from '../components/template/DraftItem.vue';
import DraftEditor from '../components/DraftEditor.vue';
 
// sDraftListItem onents/WriterComponents.vue';
export default {
    methods:
    {
        selectDraft(draft) {
            console.log(draft);
        },
    },
    components: {
        DraftListItem, DraftItem,  DraftEditor
    },
    data() {
        return {
            content: '',
            drafts: [
                {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '1标题2',
                    content: '1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: '标题1',
                    content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                }, {
                    title: 'aaaaaaaa标题2',
                    content: '1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
                    time: '2021-01-01 12:00:00',
                },
            ],
           
        }
    }
}
</script>