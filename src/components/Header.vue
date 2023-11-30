<template>
    <el-menu  class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="0">
            <img style="width: 100px" src="/images/element-plus-logo.svg" alt="Element logo" />
        </el-menu-item>

    </el-menu>
</template>
    
<style>
.flex-grow {
    flex-grow: 1;
}

.el-menu-demo {
 
    width: 100%;
   
}

.el-menu-demo .el-menu-item {
  width: auto !important;
  /* 取消菜单项的宽度限制 */
}
</style>
<script >
//   import { ref } from 'vue'

//   const activeIndex = ref('1')
import { ElIcon } from 'element-plus';
export default {
    methods:
    {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) { console.log(key, keyPath); },
        clickMenu(path, special) {
            console.log(key, keyPath);
        }
    },
    components: {
        ElIcon
    },
}
</script>

  