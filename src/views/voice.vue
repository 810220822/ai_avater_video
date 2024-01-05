<template>
  <el-form ref="formRef" :model="dynamicValidateForm"   class="demo-dynamic">
    <el-form-item prop="email" label="标题" :rules="[
        {
          required: true,
          message: '标题为必填项',
          trigger: 'blur',
        },
       
      ]">
      <el-input v-model="dynamicValidateForm.email" />
    </el-form-item>
    <el-form-item prop="email" label="内容" :rules="[
        {
          required: true,
          message: '内容为必填项',
          trigger: 'blur',
        },
       
      ]">
      <el-input v-model="dynamicValidateForm.email" />
    </el-form-item>
 
  </el-form>
</template>

<script  setup>
 
// import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'

const formRef = ref()
const dynamicValidateForm = reactive({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
})

 

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
