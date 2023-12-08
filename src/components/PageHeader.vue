<template >
    <el-breadcrumb class="breadcrumb" separator="/" style="background-color:rgb(247, 248, 250) ;">
        <el-breadcrumb-item v-for="item in breadcrumb" :key="item.index">
            <router-link :to="item.route">{{ item.label }}</router-link>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
  
 
<style>
.breadcrumb{
    padding-left: 15px;
}
.text-large {
    font-size: 18px;
}

.font-600 {
    font-weight: 600;
}

.mr-3 {
    margin-right: 0.75rem;
}

.text-sm {
    font-size: 14px;
}

.mr-2 {
    margin-right: 0.5rem;
}
</style>
<script >

import { ElIcon } from 'element-plus';
import { ElNotification as notify } from 'element-plus'
const onBack = () => {
    notify('返回')
}
export default {
    methods:
    {

    },
    components: {
        ElIcon
    },
    props: {
        breadcrumb: {
            type: Array,
            default: () => []
        },

    }
}
</script>

  