<template>
    <div>我是班级成员</div>
    <el-descriptions title="学生信息">
    <el-descriptions-item label="姓名">邓</el-descriptions-item>
    <el-descriptions-item label="学号">18100000000</el-descriptions-item>
    <el-descriptions-item label="专业">Suzhou</el-descriptions-item>
    <el-descriptions-item label="班级">Suzhou</el-descriptions-item>
    <el-descriptions-item label="班主任">20</el-descriptions-item>
  </el-descriptions>
  <div>班级成员</div>
  <el-table :data="tableData" border style="width: 95%; margin: auto" >
      <el-table-column prop="date" label="学号"/>
      <el-table-column prop="Mon" label="姓名" width="180" />
      <el-table-column prop="Tues" label="头像" width="180" />
      <el-table-column prop="Wed" label="职务" width="180" />
      <el-table-column prop="Thur" label="联系方式" width="180" />
    </el-table>
</template>
<script></script>