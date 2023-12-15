<template>
    资源库
</template>
    
<style>

</style>
<script >
 
import { ElIcon } from 'element-plus';
export default {
    methods:
    {
        
    },
    components: {
        ElIcon
    },
    data(){
        return{
            test:""
        }
    },
    mounted(){
        axios.get("http://127.0.0.1:5000/").then(res=>{
            this.test = res.data
            console.log(res)
            console.log(res.data)
        })
    }
}
</script>

  