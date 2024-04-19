<template>
  <div>
  <el-header style="text-align: right; font-size: 12px" >
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px" ><setting /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>用户中心</el-dropdown-item>
                  <el-dropdown-item>帮助文档</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>

    <el-container style="margin: 0px;">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu unique-opened=false >
            <el-sub-menu v-for="(group, index) in meundata" :key="index" :index="group.groupname">
              <template #title>
                <el-icon><component :is="group.tubiao"></component></el-icon>{{ group.groupname }}
              </template>
                <el-menu-item-group v-for="(items, itemsIndex) in group.items" :key="itemsIndex" :index="itemsIndex"  >
                  <router-link :to="items.path"><el-menu-item :class="{ active: avti === items.name }" @click="() => (avti = items.name )">{{ items.name }}</el-menu-item></router-link>
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
  import { ref, onMounted, computed , shallowRef } from 'vue'
  import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
  import axios from 'axios';

  const meundata = ref([])

  const rootlive = ref()

  async function feche(){
    try{
        const response = await axios.get("http://localhost:6060/findlever");
        console.log("wozai")
        rootlive.value = response.data
        console.log(rootlive.value)
        if (response.data == 1) {
          meundata.value = [
              { 
                groupname:"我的课程",
                tubiao: shallowRef(Message),
                items: [
                  {name : '课程表', path: '/s/coursetable'},
                  {name : '选课', path: '/s/selection'},
                  {name : '成绩', path: '/s/gpa'},
                  {name : '考勤', path: '/s/attendance'},
                ],
              },
              { 
                groupname:"我的班级",
                tubiao: shallowRef(IconMenu),
                items: [
                  {name : '班级信息', path: '/s/menber'},
                ],
              },
              { 
                groupname:"我的作业",
                tubiao: shallowRef(IconMenu),
                items: [
                  {name : '我的作业', path: '/s/task'},
                  {name : '我的考试', path: '/s/test'},
                ],
              },
              { 
                groupname:"我的校园",
                tubiao: shallowRef(IconMenu),
                items: [
                  {name : '校园活动', path: '/s/ativity'},
                  {name : '我的表白墙', path: '/s/wall'},
                ],
              },
              { 
                groupname:"用户",
                tubiao: shallowRef(Setting),
                items: [
                  {name : '个人中心', path: '/s/user'},
                ],
              },
              
            ]
         }else {
          meundata.value = [
              { 
                groupname:"我的课程",
                tubiao: shallowRef(Message),
                
                items: [
                  {name : '课程表', path: '/t/coursetable'},
                  {name : '选课', path: '/t/selection'},
                  {name : '成绩', path: '/t/gpa'},
                  {name : '考勤', path: '/t/attendance'},
                ],
              },
              { 
                groupname:"我的班级",
                tubiao: shallowRef(IconMenu),
                items: [
                  {name : '班级信息', path: '/t/menber'},
                ],
              },
              { 
                groupname:"我的作业",
                tubiao: shallowRef(IconMenu),
                items: [
                  {name : '我的作业', path: '/t/task'},
                  {name : '我的考试', path: '/t/test'},
                ],
              },
              { 
                groupname:"我的校园",
                tubiao: shallowRef(IconMenu),
                items: [
                  {name : '校园活动', path: '/t/ativity'},
                  {name : '我的表白墙', path: '/t/wall'},
                ],
              },
              { 
                groupname:"用户",
                tubiao: shallowRef(Setting),
                items: [
                  {name : '个人中心', path: '/t/user'},
                ],
              },
              
            ]}
    }catch(error){console.error(error);}
    }

  onMounted(feche);

  const avti = ref(null);

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

  a {
    text-decoration: none;
    color: rgb(21, 27, 102);
  }

  .active {
    text-decoration: none;
    color: rgb(196, 181, 181)  }
  .el-scrollbar__view{
    color: rgb(196, 181, 181)

  }


  </style>
  