<template>
  <div :class="['draft-item', { 'selected': draft.isSelected }]" @click="selectItem(item)">
    <div class="draft-item-row">{{ draft.title }}</div>
    <div class="draft-item-row">{{ draft.creater }}</div>
    <div class="draft-item-row">{{ draft.abstract }}</div>

    <div class="draft-item-row">{{ draft.updatetime }}</div>

  </div>
</template>
<style scoped>
.draft-item.selected {
  background-color: rgb(121, 187, 255,0.65);
  /* 选中项的背景颜色为浅蓝色 */
}

.draft-item {
  background-color: white; /* 未选中时的背景颜色为白色 */
  /* 背景色为白色 */
  border-radius: 5px;
  /* 圆角为 5px */
  padding: 10px;
  /* 内边距为 10px */
  cursor: pointer;
  /* 鼠标样式为手型 */
  transition: background-color 0.3s;
  /* 过渡动画，添加颜色变化效果 */
  margin: 10px;
  
  min-width: 170px;
  /* 内容主次样式 */
  .draft-item-row:first-child {

    margin-bottom: 7px;
  }

  .draft-item-row:not(:first-child):not(:last-child) {
    color: gray;
    margin-bottom: 7px;
    word-break: break-all;
  }

  .draft-item-row:not(:first-child) {
    color: gray;

    font-size: smaller;
  }

}

/* 鼠标悬停样式 */
.draft-item:hover {
  background-color: lightgray;
}
</style>
 
<script>
export default {
  props: ['draft'],
  data() {
    return { 
      selected :true
    };
  },
  methods: {
    openLink(link) {
      window.open(link)
    },
    selectItem(draft) {
      
      this.$emit('select-draft', draft)
    }
  }
}
</script>
