<template>
    <el-dialog :model-value="show" :title="title1" @close = "emit('sss')">
      <el-form :model="form" :rules="rules"  :inline="true" >
        <el-form-item label="课程名称" prop='course_name'>
          <el-input v-model="form.course_name" autocomplete="off" />
        </el-form-item>
        
        <el-form-item label="课程教室" prop='teaching_room'>
          <el-input v-model="form.teaching_room" autocomplete="off" />
        </el-form-item>
        <el-form-item label="教授班级" prop='teaching_class' >
          <Selectclass  v-model="form.teaching_class" style="width: 90%;"/>
        </el-form-item>
        <el-form-item label="教授老师" prop='teacher'>
          <el-input v-model="form.teache" autocomplete="off" disabled />
        </el-form-item>
        <el-form-item label="开始周数" prop="start_week">
          <el-input v-model="form.start_week" autocomplete="off" />
        </el-form-item>
        <el-form-item label="结束周数" prop="end_week">
          <el-input v-model="form.end_week" autocomplete="off" />
        </el-form-item>
        
        <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :key="index"
            :prop="'domains.' + index "
            >
            <el-form-item label="星期" porp="xq">
                <el-input v-model="domain.xq" autocomplete="off" style="width: 80px;"/>
            </el-form-item>
            <el-form-item label="开始节次" prop="start">
                <el-input v-model="domain.start" autocomplete="off" style="width: 80px;"/>
            </el-form-item>
            <el-form-item label="结束节次" porp="end" >
            <el-input v-model="domain.end" autocomplete="off" style="width: 80px;"/>

            <el-button v-if="index !== 0" class="mt-2" style="width: 30px;" :icon="Close" @click.prevent="removeDomain(domain)"></el-button>
            <el-button v-if="index === 0" style="width: 30px; visibility: hidden" ></el-button>
            </el-form-item>
            
    </el-form-item>


      </el-form>
      <template #footer>
        <span class="dialog-footer">
            <el-button @click="addDomain">新增节次</el-button>
            <el-button @click="emit('sss')" >取消</el-button>
            <el-button @click="addbutton" >新增</el-button>
            
          
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>
  import { reactive ,ref ,defineProps } from 'vue';
  import type { FormInstance, FormRules } from 'element-plus'
  import axios from "axios";
  import { Close } from '@element-plus/icons-vue'
  import Selectclass from './Selectclass.vue'

  const formRef = ref<FormInstance>()
  const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string}>({
  domains: [
    {
      
      xq: '',
      start: '',
      end: '',
    },
  ],
  email: '',
})



interface DomainItem {
  xq: string
  start: string
  end: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    xq: '',
    start: '',
    end: '',
  })
  console.log(dynamicValidateForm.domains)
}


const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
  
  const emit = defineEmits(['sss' , 'feche' ,'isssellect'])


 

  
  const props = defineProps({
        show: {
          type:Boolean,
          default:false,
      },
        title1: {
            type:String,
            required: true,
      },
  });
  
  
  
  
  const form = reactive({
    course_name:'',
    teaching_room:'',
    teaching_class:'',
    teache:'',
    start_week:'',
    end_week:'',
    
  });
  
  
  const rules = {
    course_name : [{ required: true, trigger: 'blur' , message: '请填写课程名称'}],
    teaching_room: [{ required: true, trigger: 'blur' , message: '请填写教室地点'}],
    teaching_class: [{ required: true, trigger: 'blur' , message: '请填写教授班级'}],
    start_week: [{ required: true, trigger: 'blur' , message: '请填写标开始周数'}],
    end_week: [{ required: true, trigger: 'blur' , message: '请填写标结束周数'}],
    teache : [{ required: true, trigger: 'blur', message: '请填写教师名称'}],
  };
  
  
  const former = ref<FormInstance>()

  
  
  function addbutton (){
    let issselect= 0
    if (props.title1 == '添加选课'){
     issselect= 1
    }else{ issselect = 0}
    console.log('is')
    console.log(issselect)
      const data = {
        courseName: form.course_name,
        teachingRoom: form. teaching_room,
        teacher: form.teache,
        teachingClass: form.teaching_class,
        startWeek: Number(form.start_week),
        endWeek: Number(form.end_week),
        teachingTime: JSON.stringify(dynamicValidateForm.domains),
        issselect: issselect,

             ctime: '2024-05-06',
         };
         axios.post('http://localhost:6060/AddCourse', data).then((response) =>{
             console.log(response.data);
             emit('sss');
             emit('feche')
         }).catch((error) => {
             console.error(error);
             
         }
         )
  };

  axios.get('http://localhost:6060/usernamee')
  

  function getCookie(name: string): string | null {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key.trim() === name) {
      return decodeURIComponent(value || '');
    }
  }
  return null;
}

// 使用这个函数来读取名为'name'的cookie的值
const nameCookieValue = getCookie('name');
if (nameCookieValue) {
  form.teache = nameCookieValue,
  console.log('Cookie value for "name" is:', nameCookieValue);
} else {
  console.log('No cookie named "name" found.');
}
  
  
  </script>