<template>
    <div>
        <svg class="icon" :class="iconClass">
            <use :xlink:href="`#${iconName}`" />
        </svg>
    </div>
</template>

<style scoped>
.icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>

<script>
import House from '../assets/icons/House.svg'
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: '24' // 默认图标大小为 24px
        },
        color: {
            type: String,
            default: 'currentColor' // 默认使用当前文本颜色
        }
    },
    computed: {
        iconName() {
            return `icon-${this.name}`;
        },
        iconClass() {
            return {
                'icon': true,
                [`icon-${this.name}`]: true
            };
        }
    }
};
</script>
  
