<template>
    <div class="icon" :key="icon.id">
      <!-- icon 图标 -->
      <el-button class="icon-button" @click="updateData(icon)" bg="false" size="large"
          :class="{ 'clicked': icon.id === selectedIcon }">
  
          <img :src="getIconPath(icon.iconUrl)" alt="icon" class="icon-image" @click="updateData(icon)">
  
          {{ icon.name }}
      </el-button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['icon', 'selectedIcon', 'updateData', 'getIconPath'],
  }
  </script>

<style  >
.icon-button {
    /* 添加你想要的样式 */
}

.icon-button.clicked {
    /* 添加你想要的被点击时的样式 */
    background-color: #edf5fe;
    border: 1px solid #dceafa;
}

.icon {
    width: 130px;
    display: inline-block;
}

.icon-image {
    width: 30px;
    height: 30px;
    margin-right: 7px;
}

.icon-button {
    max-height: 180px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
}
</style>

