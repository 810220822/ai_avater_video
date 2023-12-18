
<template>
    <div v-for="(icon, index) in icons" :key="index" @click="selectIcon(icon)">
        <img :src="getIconPath(icon)" :class="{ 'selected': selectedIcon === icon, 'unselected': selectedIcon !== icon }"
            alt="Icon">
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
        selectIcon(icon) {
            this.selectedIcon = icon;
        },
        getIconPath(iconName) {
            return require(`@/assets/logo/${iconName}.png`);
        }
    },
    components: {


    },
    data() {
        return {
            selectedIcon: '',
            icons: ['logo', 'logo', 'logo', 'logo'],
        };
    },
}
</script>