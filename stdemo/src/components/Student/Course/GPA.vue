<template>
    <el-descriptions title="学生信息">
    <el-descriptions-item label="姓名">邓</el-descriptions-item>
    <el-descriptions-item label="学号">18100000000</el-descriptions-item>
    <el-descriptions-item label="专业">Suzhou</el-descriptions-item>
    <el-descriptions-item label="总学分/毕业学分">
      <el-tag size="small">30/30</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="挂科数">20</el-descriptions-item>
  </el-descriptions>
    
    <div style="text-align: right">
        <el-text>选择年度：</el-text>
        <el-select v-model="value" placeholder="  年度" style="width: 240px">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        />
        </el-select>
    </div>
    <div>
        成绩表
        <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="课程名称" width="180" />
        <el-table-column prop="name" label="可修学分" width="180" />
        <el-table-column prop="name" label="平时成绩" width="180" />
        <el-table-column prop="name" label="期末成绩" width="180" />
        <el-table-column prop="name" label="总成绩" width="180" />
        <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
    <div>
        挂科科目
        <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="课程名称" width="180" />
        <el-table-column prop="name" label="可修学分" width="180" />
        <el-table-column prop="name" label="平时成绩" width="180" />
        <el-table-column prop="name" label="期末成绩" width="180" />
        <el-table-column prop="name" label="总成绩" width="180" />
        <el-table-column prop="address" label="Address" />
        </el-table>
    </div>

    <el-button type="primary" @click="">打印</el-button>
  </template>
  
  <script lang="ts" setup>
  //import { Right } from '@element-plus/icons-vue/dist/types';
  import { ref } from 'vue'

  const value = ref('')
  const options = [
    {
        value: 'Option1',
        label: '第一学年',
    },
    {
        value: 'Option2',
        label: '第二学年',
        disabled: true,
    },
    {
        value: 'Option3',
        label: '第三学年',
    }
    ]

  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },

  ]
  </script>
  <style>
  .el-select_tags {
    right: 0;

  }
  .el-table {
    top: 0px;
    width: 90%;
    bottom: 30px;

  }
 </style>
  