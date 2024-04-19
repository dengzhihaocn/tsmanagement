<template>
  <div class="login">
      <h3>登录界面</h3>
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon class="demo-ruleForm">
          <el-form-item prop="username">
          <el-input size="large" v-model="ruleForm.username" placeholder="请输入用户名" >
              <template #prefix>
                  <el-icon :size="20"><User/></el-icon>
              </template>
          </el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
          <el-input v-model="ruleForm.password" placeholder="请输入密码">
              <template #prefix>
                  <el-icon :size="20"><Lock/></el-icon>
              </template>
          </el-input>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { User, Lock }  from "@element-plus/icons-vue"
import { useRouter } from 'vue-router';
import axios from 'axios';

const ruleFormRef = ref<FormInstance>()

const router = useRouter()



const validatePass = (rule: any, value: any, callback: any) => {
if (value === '') {
  callback(new Error('请输入密码'))
} else {
  callback()
}
}


const ruleForm = reactive({
username: '',
password: '',
})



const submitForm = (formEl: FormInstance | undefined) => {
if (!formEl) return
formEl.validate((valid) => {
  if (valid) {
      
      router.push("/index")
     axios.post('http://localhost:8080/dengluyanzhengjiekou',ruleForm).then((response) =>{
         console.log(response.data);
         console.log("1");
         router.push("/index")
         
     }).catch((error) => {
         console.error(error);
         console.log("2");
         
         
     })

  } else {
    ElMessage.error('请加钱')
  
    return false
  }
})
}


</script>

<style scoped lang="less">
.login{
  //background-color: rgb(196, 201, 219);
  width: 400px;
  margin: 200px auto 0;
  border: 1px;
  border-style: solid;
  :deep(.el-input_inner){
      height: 50px;
      background-color: rgb(76, 0, 255);
  }
  :deep(.el-button--primary){
      width: 100%;
  }
}
</style>