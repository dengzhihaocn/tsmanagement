<template>
  <div>
  <el-header style="text-align: right; font-size: 12px" >
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px"
                ><setting
              /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>
    <el-container class="layout-container-demo" style="margin: 0px;">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><message /></el-icon>我的课程
              </template>
              
                <el-menu-item-group>
                  <router-link :to="gggg('coursetable')"><el-menu-item index="1-1">课程表</el-menu-item></router-link>
                  <router-link :to="gggg('selection')"><el-menu-item index="1-2">选课</el-menu-item></router-link>
                  <router-link :to="gggg('gpa')"><el-menu-item index="1-3">成绩</el-menu-item></router-link>
                  <router-link :to="gggg('attendance')"><el-menu-item index="1-4">考勤</el-menu-item></router-link>
              </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>我的班级
              </template>
                <el-menu-item-group>
                  <router-link to="/s/menber"><el-menu-item index="2-1">班级信息</el-menu-item></router-link>
              </el-menu-item-group>
              
            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <el-icon><icon-menu /></el-icon>我的作业
              </template>
                  <el-menu-item-group>
                    <router-link to="/s/task"><el-menu-item index="3-1">我的作业</el-menu-item></router-link>
                    <router-link to="/s/test"><el-menu-item index="3-2">我的考试</el-menu-item></router-link>
                </el-menu-item-group>
              
            </el-sub-menu>

            <el-sub-menu index="4">
              <template #title>
                <el-icon><icon-menu /></el-icon>我的校园
              </template>
                <el-menu-item-group>
                  <router-link to="/s/ativity"><el-menu-item index="4-1">校园活动</el-menu-item></router-link>
                  <router-link to="/s/wall"><el-menu-item index="4-2">表白墙</el-menu-item></router-link>
              </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="5">
              <template #title>
                <el-icon><setting /></el-icon>用户管理
              </template>
                <el-menu-item-group>
                  <router-link to="/s/user"><el-menu-item index="5-1">个人中心</el-menu-item></router-link>
                  
                </el-menu-item-group>
              
            </el-sub-menu>

            
          </el-menu>
        </el-scrollbar>
      </el-aside>
  
      <el-container>

  
        <el-main>
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
  import axios from 'axios';
  import { useRouter } from 'vue-router';



  const router = useRouter()

  let identity;

  let hasExecuted = false; // 标志变量，用于跟踪 functionA 是否已经执行过

  async function functionA() {
    // 这里是 functionA 的逻辑
    // 如果 hasExecuted 已经是 true，则不执行任何操作
    if (hasExecuted) {
      console.log('Function A has already been executed');
      return;
    }
    const data = new FormData();
    data.append("username","13812345678")
    data.append("password","password123")
    axios.post('http://localhost:6060/login',data)
    const response = await axios.get('http://localhost:6060/find')
    identity = response.data
    // 这里是 functionA 的实际逻辑
    console.log('Function A completed');
    hasExecuted = true; // 将 hasExecuted 设置为 true，以便我们知道它已经执行过了
  }



  /**/
  async function gggg(path) {
    // 如果 functionA 还没有执行，则等待它完成
    if (!hasExecuted) {
      await functionA();
    }
    console.log("identity")
    console.log(identity)
    if ( 2 == 2) {
      path = "/s/" + path
      console.log("wobudengyu")
      console.log("path")
      console.log(path)
      return path
    }else{
      path = "/t/" + path
      console.log("=")
      console.log("path")
      console.log(path)
      return path
    }
    
    
    
  }
    
  </script>
  
  <style scoped>
  .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
  .router-link-active {
    text-decoration: none;
    color: rgb(4, 0, 255);
  }
  a {
    text-decoration: none;
    color: rgb(21, 27, 102);
  }
  </style>
  