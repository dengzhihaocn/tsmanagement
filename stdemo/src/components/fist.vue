<template>
  <div class="login">
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="身份" prop="identity">
        <el-select v-model="ruleForm.identity">
          <el-option label="教师" value="2" />
          <el-option label="学生" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="证件号" prop="idCard">
        <el-input v-model="ruleForm.idCard" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" />
      </el-form-item>
      <el-form-item label="班级" prop="tclass">
        <el-cascader :options="options" :show-all-levels="true" v-model="ruleForm.tclass" style="width: 100%;" />
      </el-form-item>

      <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import axios from 'axios';
import { useRouter } from 'vue-router';


const router = useRouter()

const options= ref([
  {
    
    label: '商学院',
    children: [
      {
        label: '金融专业',
        children: [
          {
            value: '1班',
            label: '1班',
          },
          {
            value: '2班',
            label: '2班',
          },
        ],
      },
    ]}])

interface RuleForm {
  name: string
  identity: string
  idCard: string
  email: string
  tclass: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  identity: '',
  idCard: '441581199905142476',
  email: '123@12.com',
  tclass: '',
})

const shenfen = (rule: any, value: any, callback: any) => {
if (value ==''){
    callback(new Error("选择身份"))
  }
  callback()
}

const emai = (rule: any, value: any, callback: any) => {
if (!(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(value)){
    callback(new Error("请输入邮箱"))
    
  }
  callback()
}

const shenfenzhen = (rule: any, value: any, callback: any) => {
if (!(/^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/).test(value)){
    callback(new Error("请输入身份证号码"))
  }
  callback()
}


const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入名字', trigger: 'blur' },
  ],
  identity: [
    { required: true,  validator: shenfen, trigger: 'change' },
  ],
  idCard: [
    { required: true, validator:shenfenzhen, trigger: 'blur' },
  ],
  email: [
    { required: true, validator: emai, trigger: 'blur' },
  ],
  tclass: [
    { required: true, message: '请选择班级', trigger: 'change' },
  ],
})

const submitForm = (formEl: FormInstance | undefined) => {
  console.log(formEl)
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      denglu();
    } else {
      return false
    }
  })
}

function denglu (){
  ruleForm.tclass= String(ruleForm.tclass[2])
  const data = ruleForm;
  console.log("wozai")
     axios.post('http://localhost:6060/fistlogin',data).then((res) =>{
      if (res.data.data != null) {
        router.push(res.data.data)
      }
     }).catch((error) => {
         console.error(error);
     })
}

function getsclass() {
  axios.get('http://localhost:6060/3456').then((res) => {
    if (res != null ){
      let data = res.data
      let biglist = []
      data.forEach(element => {
        let yuanxijiedian ={
          label: '' ,
          children: []
          }
        yuanxijiedian.label=element.yuanxi

        const panduan = biglist.some(i => i.label == element.yuanxi)
        if (!panduan) {
          biglist.push(yuanxijiedian)
        }
      });

      for (let i=0; i <biglist.length; i++){
        data.forEach(element => {
        let yuanxijiedian ={
          label: '' ,
          children: [],
          }
        yuanxijiedian.label = element.zhuanye
        if (biglist[i].label == element.yuanxi){
          const panduan = biglist[i].children.some(i => i.label == element.zhuanye)
          if (!panduan) {
            biglist[i].children =   biglist[i].children.concat(yuanxijiedian)
          }else{}
        }

      })

      }
      for (let i=0; i <biglist.length; i++){
        data.forEach(element => {
          

        for (let j=0; j<biglist[i].children.length;j++){
          let yuanxijiedian ={
          value: element.cid ,
          label: element.classTitle + element.banhao,
          }

          if (biglist[i].children[j].label == element.zhuanye){


            if (biglist[i].children[j].children == 1 ){
              biglist[i].children[j].children = yuanxijiedian
            }else {
            biglist[i].children[j].children = biglist[i].children[j].children.concat(yuanxijiedian)
          }
          }


        }
        })
      }
      console.log(biglist)
    
      options.value = biglist
      
    }}
  )
}

getsclass();

</script>
<style scoped lang="less">
.login{
  //background-color: rgb(196, 201, 219);
  width: 50%;
  margin: 10% auto 0;
  border: 5px;

}
</style>
