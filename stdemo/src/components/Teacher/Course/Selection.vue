<template>
  
    <div style="background-color: #ecf5ff; border-radius:10px;padding-bottom: 10px;padding-top: 5px; width: 96%; margin: auto; margin-top: 1%;">
    <div class="title">全部选课</div>
    <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 98%; margin: auto;  border-radius:20px">
        <el-table-column prop="date" label="课程名称" />
        <el-table-column prop="name" label="可修学分" sortable width="180" />
        <el-table-column prop="name" label="授课老师" width="180" />
        <el-table-column prop="name" label="授课地点" width="180" />
        <el-table-column prop="name" label="授课时间" width="180" />
        <el-table-column prop="name" label="报名名额" width="180" />
    </el-table>
    </div>
    <div style="background-color: #ecf5ff; border-radius:10px;padding-bottom: 10px;padding-top: 5px; width: 90%; margin: auto; margin-top: 1%;">
    <div class="title">我发布的课程</div>
    <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 98%; margin: auto;">
        <el-table-column prop="date" label="课程名称" />
        <el-table-column prop="name" label="可修学分" sortable width="180" />
        <el-table-column prop="name" label="授课老师" width="180" />
        <el-table-column prop="name" label="授课地点" width="180" />
        <el-table-column prop="name" label="授课时间" width="180" />
        <el-table-column prop="address" label="报名" width="180"  >
            <template #default="sconpe">
            <el-button type="primary" @click=""  >报名情况</el-button>
         </template>
        </el-table-column>
    </el-table>
    </div>
    <div style="margin: 2%;">
      
      <el-button type="primary" :icon="Plus" @click="showlog=true">增设选课</el-button>
      <el-button type="primary" :icon="EditPen">编辑选课</el-button>

      <AddCourse :title1="titi" :show="showlog" @sss="dshowlog" @isssellect = "1"/>

    </div>
</template>


<script lang="ts" setup>
import { Plus, EditPen} from '@element-plus/icons-vue'
import AddCourse from '@/components/hooks/AddCourse.vue';
import { ref } from 'vue';

const showlog = ref(false)

const titi = '添加选课'

const dshowlog = () =>{
  showlog.value = false;
  };

interface User {
  date: string
  name: string
  address: string
}



const tableData: User[] = [
  {
    date: '2016-05-03',
    name: '3',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: '4',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style>
    .title {
    font-weight:600 ;
    color: #05050594;

    }


</style>