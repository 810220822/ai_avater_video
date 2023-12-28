<template>
    <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="0">
            <img style="width: 100px" src="../assets/title-logo.png" alt="生成易" />
        </el-menu-item>
        <div class="right-items">

            <el-menu-item index="1" style="float: right;color: white;">
                <el-icon>
                    <User />
                </el-icon>
                <span>用户</span>
            </el-menu-item>
            <el-menu-item index="2" style="float: right;color: white;" @click="logout">
                退出登录
            </el-menu-item>
        </div>

    </el-menu>
</template>
    
<style>
.flex-grow {
    flex-grow: 1;
}
.right-items {
  display: flex;
  align-items: center;
 
}
.el-menu-demo {

    width: 100%;
    background-color: rgb(0, 143, 190);

    height: 55px;
    display: flex;
    justify-content: space-between;
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
        },
        logout() {
            console.log('退出登录');
        }
    },
    components: {
        ElIcon
    },
}
</script>

  