<template>
    <div class="books-item" :key="item.id">
        <!-- books-image-div 是一个图片展示的div,在item组件的左侧 -->
        <div class="books-image-div">
            <!-- item.img_url 的值是图片的路径，可以正常下载的话显示图，不可以正常下载，显示src\assets\title-logo.png -->
            <!-- <img style="width: 100px" :src="item.img_url" alt="icon" class="books-image"> -->
            <img style="width: 100px" src="../../assets/icons/none.png" />
        </div>
        <!-- books-views-detail 在item组件的右侧，分行展示书的其他全部信息 -->
        <div class="books-views-detail">
            <!-- books-views-detai-row 是一个分行展示的div ，里面所有元素都展示在一行中 -->
            <div class="books-views-detai-row">
                <!-- 标题 -->
                <div class="books-news-title" @click="openLink(item.link)">{{ item.id }}.{{ item.title }}</div>
                <!-- 浏览量 -->
                <div class="books-views-count">近1月销量：{{ item.count }}</div>
                <el-button class="detail-button" @click="selectItem(item)" type="primary" link>
                    分析<el-icon>
                        <ArrowRight />
                    </el-icon>
                </el-button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['item'],
    methods: {
        openLink(link) {
            window.open(link)
        },
        selectItem(item) {
            this.$emit('select-item', item)
        }
    }
}
</script>
<style>
.books-item {
    /* display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;*/
    border-bottom: 3px solid rgb(247, 248, 250);
    margin-top: 7px;

    margin-right: 20px;
    display: flex;
    align-items: center;
}

.books-image-div {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.books-image {
    width: 100%;
    height: 100%;
}

.books-views-detail {
    flex: 1;
}

.books-views-detai-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.books-news-title {

    display: flex;

    text-align: left;
    color: #579ff8;
    cursor: pointer;

    font-size: 14px;

    /* margin-left: 13px; */

}

.books-detail-button {}

.books-views-content {
    color: gray;
    font-size: smaller;
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.books-views-count {
    color: gray;
    font-size: smaller;
    text-align: left;
    /* width: 20%; */
    text-wrap: nowrap;
}</style>