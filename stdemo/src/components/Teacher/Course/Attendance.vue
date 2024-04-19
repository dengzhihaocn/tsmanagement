<template>
  <div class ='biankuang' >
    <div class="title" style="margin: 10px;">待审批请假</div>
    <el-table :data="tableData" border style="width: 95%; margin: auto" >
      <el-table-column prop="date" label="时间" width="130" />
      <el-table-column prop="Mon" label="科目" width="130" />
      <el-table-column prop="Wed" label="请假学生" width="130" />
      <el-table-column prop="Tues" label="请假事由" />
      <el-table-column prop="Thur" label="假条状态" width="130" />
      <el-table-column prop="Fir" label="审批按钮" width="130" />
    </el-table></div>
    <div class ='biankuang' >
    <div class="title" style="margin: 10px;">已审批假条</div>
    <el-table :data="tableData" border style="width: 95%; margin: auto" >
      <el-table-column prop="date" label="时间" width="130" />
      <el-table-column prop="Mon" label="科目" width="130" />
      <el-table-column prop="Wed" label="请假学生" width="130" />
      <el-table-column prop="Tues" label="请假事由" />
      <el-table-column prop="Thur" label="假条状态" width="130" />
      <el-table-column prop="Fir" label="审批按钮" width="130" />
    </el-table></div>
    <div class ='biankuang' >
    <div style="margin: 10px;">异常记录</div>
    <el-table :data="tableData" border style="width: 95% ; margin: auto" >
      <el-table-column prop="date" label="时间" width="130" />
      <el-table-column prop="Mon" label="科目" width="130" />
      <el-table-column prop="Mon" label="学生" width="130" />
      <el-table-column prop="Tues" label="异常原因"  />
      <el-table-column prop="Fir" label="修改按钮" width="130" />
    </el-table>

  </div>  

</template>
<script lang="ts" setup>

const tableData = [
    {
      date: '1',
    },
]
</script>
<style>
.biankuang {
  border : 3px solid rgba(233, 232, 232, 0.642);
  box-shadow: 5px 3px 3px rgb(165, 165, 168);
  background-color: #ffffff92;
  margin: 20px;
  padding: 20px;
  padding-top: 0px;
}
.title {
    font-weight:600 ;
    color: #05050594;

  }
</style>