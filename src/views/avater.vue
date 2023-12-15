<template>
    avater
</template>
    
<style>

</style>
<script >
 
import { ElIcon } from 'element-plus';
import axios from 'axios'
export default {
    methods:
    {
        
    },
    components: {
        ElIcon
    },    data(){
        return{
            test:""
        }
    },
    mounted(){
        axios.get("http://localhost:5000/").then(res=>{
            this.test = res.data
            console.log(res)
            console.log(res.data)
        })
    }
}
</script>

  