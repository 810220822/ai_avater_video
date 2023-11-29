<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose">
        <template v-for="menuItem in menuItems">
            <el-menu-item :index="menuItem.index" @click="clickMenu(menuItem.route, menuItem.special)">
                <el-icon  :style="{'color': menuItem.special ? '#FFD700' : ''}"> 
                    <component :is="menuItem.icon" />
                </el-icon>
                <template #title>
                    <transition name="special-animation" v-if="menuItem.special">
                        <div class="special-content">{{ menuItem.title }}</div>
                    </transition>
                    <div v-else>{{ menuItem.title }}</div>
                </template>

            </el-menu-item>
        </template>
    </el-menu>
</template> 
<style> .el-menu-vertical-demo:not(.el-menu--collapse) {
     width: 200px;
     min-height: 400px;
 }

 .special-content {
  background: linear-gradient(to right, #FFD700, #FF8C00); /* 设置线性渐变的背景色 */
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; /* 将文字颜色设为透明 */
  font-weight: bold;
  animation: color-animation 2s infinite; /* 添加动画效果，2s 无限循环 */
}
.special-icon{
    color:  #e8d466; /* 设置与标题相同的线性渐变背景色 */
  /*-webkit-background-clip: text;  将背景色应用于文字 */
  -webkit-text-fill-color: transparent; /* 将文字颜色设为透明 */
}


</style>
<script>
import { ElIcon } from 'element-plus';
export default {
    methods:
    {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) { console.log(key, keyPath); },
        clickMenu(path, special) {
            if (special) {
                // 执行特殊菜单项的逻辑，例如打开新页面
                // window.open('https://www.baidu.com', '_blank');
                window.location.href = 'https://www.baidu.com';

            } else {
                this.$router.push(path);
            }
        }
    },
    components: {
        ElIcon
    },
    data() {
        return {
            menuItems: [
                {
                    index: "1",
                    route: "/index",
                    icon: "House",
                    title: "首页"
                },
                {
                    index: "2",
                    route: "/createVideo",
                    icon: "VideoPlay",
                    title: "创作视频",
                    special: true // 添加 special 属性
                },
                {
                    index: "3",
                    route: "/index",
                    icon: "Notebook",
                    title: "创意写作"
                },
                {
                    index: "4",
                    route: "/user",
                    icon: "VideoCamera",
                    title: "Avater"
                },
                {
                    index: "5",
                    route: "/index",
                    icon: "Mic",
                    title: "声音克隆"
                },
                {
                    index: "6",
                    route: "/user",
                    icon: "Files",
                    title: "资源库"
                },
            ]
        };
    },
};
</script>