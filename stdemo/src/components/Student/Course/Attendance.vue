<template>
    <div style="text-align:left; margin-top: 20px; bottom: 20px;" ><el-button type="primary" round>我要请假</el-button></div>
    请假记录
    <el-table :data="tableData" border style="width: 95%; margin: auto" >
      <el-table-column prop="date" label="时间"/>
      <el-table-column prop="Mon" label="科目" width="130" />
      <el-table-column prop="Tues" label="原因" width="130" />
      <el-table-column prop="Wed" label="审批老师" width="130" />
      <el-table-column prop="Thur" label="假条状态" width="130" />
      <el-table-column prop="Fir" label="修改按钮" width="130" />
    </el-table>
    <div>异常记录</div>
    <el-table :data="tableData" border style="width: 95% ; margin: auto" >
      <el-table-column prop="date" label="时间"/>
      <el-table-column prop="Mon" label="科目" width="130" />
      <el-table-column prop="Tues" label="异常原因" width="130" />
    </el-table>
    

</template>
<script lang="ts" setup>

const tableData = [
    {
      date: '1',
    },
]
</script>