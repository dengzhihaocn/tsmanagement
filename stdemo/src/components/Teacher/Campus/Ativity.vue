<template>
    <div style="float: left;" class ='biankuang'>
    <el-row>
        <el-col el-col v-for="(o, index) in 20" :key="o" :span="15" :offset="index >= 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <div style="float: left">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
                </div>
                <div style="padding: 1px" >
                    <h4>活动名称</h4>
                    <p>预览。。。。。：</p>
                
                </div>
                <div class="bottom">
                    <el-button text class="button">活动详情</el-button>
            </div>
            </el-card>
        </el-col>
    </el-row>
    
    </div>
    <el-affix :offset="120">
        <div style="float: right; height: 80px; width: 350px;">
            <el-tabs type="border-card" class="demo-tabs" style="height: 400px;">
                <el-tab-pane>
                <template #label >
                    <span class="custom-tabs-label">
                    <el-icon></el-icon>
                    <span>日程</span>
                    </span>
                </template>
                    
                </el-tab-pane>
                <el-tab-pane label="行程">行程</el-tab-pane>
                    </el-tabs>
    </div>
  </el-affix>
    


</template>
<script lang="ts" setup>

import { ref } from 'vue'
const value = ref(new Date())

</script>

<style>
.right div {
    margin-left: 1px;
}
img {
    height: 120px;
    width: 120px;
    left: 0px;
}
.el-card {
    height: 100%;
    width: 100%;

}


.el-button-group .el-button {
    width: 50px;
}
.el-tabs__content {
    height: 100%;
    width: 100%;
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