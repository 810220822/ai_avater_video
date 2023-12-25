
<template>
    <el-button type="primary" @click="handleClick">
        post
    </el-button>
</template>
<style></style>
<script>
import { backendURL } from '@/utils/api.js';

export default {

    mounted() {

    },
    methods:
    {
        handleClick() {
            var url = backendURL + '/WriterChatting';
            // this.$http.get(backendURL + '/WriterChatting')
            this.$http({
                method: 'post',
                url: url,
                data:  JSON.stringify({ result: ['value'] }),
                headers: {
                    'Content-Type': 'application/json',
                    'x-requested-with': 'XMLHttpRequest'  
                }

            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    components: {


    },
    data() {
        return {

        };
    },
}
</script>