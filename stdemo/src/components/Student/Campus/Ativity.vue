<template>
    <div style="float: left;">
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
                    <el-icon><calendar /></el-icon>
                    <span>日程</span>
                    </span>
                </template>
                    <el-calendar v-model="value" />
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
.el-calendar {
    height: 200px;
    width: 90%;
}
.el-calendar-table .el-calendar-day {
            height: 30px;
          }
.el-button-group .el-button {
    width: 50px;
}
.el-tabs__content {
    height: 100%;
    width: 100%;
}


</style>