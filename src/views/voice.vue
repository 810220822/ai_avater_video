<template>
    <el-input class="red-text" v-model="inputValue" placeholder="请输入内容"></el-input>
  </template>
  
  <style scoped>
  .red-text .el-input__inner {
    color: red;
  }
  </style>
  <script>
  export default {
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      onInput: function (e) {
        this.inputValue = e.detail.value
      }
    }
  }
  </script>