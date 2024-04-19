<template>
    <div>我是选课表</div>
    <div>可选课程</div>
    <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
        <el-table-column prop="date" label="课程名称" width="180"/>
        <el-table-column prop="name" label="可修学分" sortable width="180" />
        <el-table-column prop="name" label="授课老师" width="180" />
        <el-table-column prop="name" label="授课地点" width="180" />
        <el-table-column prop="name" label="授课时间" width="180" />
        <el-table-column prop="name" label="报名名额" width="180" />
        <el-table-column prop="address" label="报名" >
            <template #default="sconpe">
            <el-button type="primary" @click="">报名</el-button>
         </template>
        </el-table-column>
        
    </el-table>
    <div>已选课程</div>
    <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 90%; margin: auto;">
        <el-table-column prop="date" label="课程名称" />
        <el-table-column prop="name" label="可修学分" sortable width="180" />
        <el-table-column prop="name" label="授课老师" width="180" />
        <el-table-column prop="name" label="授课地点" width="180" />
        <el-table-column prop="name" label="授课时间" width="180" />
    </el-table>
</template>


<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'

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