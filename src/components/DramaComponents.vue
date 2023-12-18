
<template>
    <div name="container" style="display: flex;flex-direction: row;height: 100%;">
        <!-- container 的高度固定，撑满屏幕 -->
        <div name="div1">
            <!-- div1 高度适应数据，内有500条数据有滚动条 -->
        </div>
        <div name="div2">
            <!-- div2 不随y轴滚动 -->
        </div>
    </div>
</template>
<style></style>
<script>
import { Search } from '@element-plus/icons-vue';

export default {

    mounted() {

    },
    methods:
    {

    },
    components: {


    },
    data() {
        return {

        };
    },
}
</script>