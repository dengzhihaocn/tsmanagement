<template>
  <div class ='biankuang1' style="background-color:  #82a9c692;" >
    <el-descriptions title="教师信息" >
    <el-descriptions-item label="姓名:">邓</el-descriptions-item>
    <el-descriptions-item label="工号:">18100000000</el-descriptions-item>
    <el-descriptions-item label="专业:">Suzhou</el-descriptions-item>
    <el-descriptions-item label="班级:">Suzhou</el-descriptions-item>
    <el-descriptions-item label="学生人数:">20</el-descriptions-item>
  </el-descriptions></div>
  <div class ='biankuang' >
  <div>班级成员</div>
  <el-table :data="tableData" border style="width: 95%; margin: auto" >
      <el-table-column prop="date" label="学号"/>
      <el-table-column prop="Mon" label="姓名" width="180" />
      <el-table-column prop="Tues" label="头像" width="180" />
      <el-table-column prop="Wed" label="职务" width="180" />
      <el-table-column prop="Thur" label="联系方式" width="180" />
    </el-table>

  </div>
</template>
<script></script>

<style>
.biankuang1 {
  border : 3px solid #82a9c692;
  box-shadow: 5px 3px 3px rgb(165, 165, 168);
  background-color: #ffffff92;
  
  margin: 20px;
  padding: 20px;
  

}
.el-descriptions__cell {
  background-color:  #82a9c692;
}
.biankuang {
  border : 3px solid rgba(233, 232, 232, 0.642);
  box-shadow: 5px 3px 3px rgb(165, 165, 168);
  background-color: #ffffff92;
  margin: 20px;
  padding: 20px;
  padding-top: 0px;
}

</style>