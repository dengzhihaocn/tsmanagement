<template>
  <div class ='biankuang' >

  <div style="height: 50px; display: flex; justify-content: flex-start; width: 80%;">
      
      <div class="m-4" >
          <el-select v-model="value1" placeholder="选择年级" style="width: 150px;top: 10px; " >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
          </div>
      <div class="m-4" >
          <el-select v-model="value1" placeholder="选择专业" style="width: 150px;top: 10px; " >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
          </div>
      <div class="m-4" >
          <el-select v-model="value1" placeholder="选择班级" style="width: 150px;top: 10px; " >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
          </div>
      <div class="flex gap-4">
          <div class="sub-title my-2 text-sm text-gray-600" style="display: flex;" >
              <el-autocomplete
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  clearable
                  class="inline-input w-50"
                  placeholder="搜索学生"
                  @select="handleSelect"
                  style="top: 10px;"
              />
          </div>
          </div>  
        </div>  
    <div >
      <div class="title" style="margin: 20px;">成绩表</div>
      <el-table :data="tableData" border >
      <el-table-column prop="date" label="课程名称"  />
      <el-table-column prop="date" label="授课班级" width="180" />
      <el-table-column prop="date" label="授课学生" width="180" />
      <el-table-column prop="name" label="可修学分" width="180" />
      <el-table-column prop="name" label="平时成绩" width="180" />
      <el-table-column prop="name" label="期末成绩" width="180" />
      <el-table-column prop="name" label="总成绩" width="180" />
      </el-table>
  </div>
</div>
      
  



</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

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
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },

  ]

const value = ref(new Date())
const value1 = ref([])
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

//sousuo

interface RestaurantItem {
value: string
link: string
}

const state1 = ref('')
const state2 = ref('')

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
const results = queryString
  ? restaurants.value.filter(createFilter(queryString))
  : restaurants.value
// call callback function to return suggestions
cb(results)
}
const createFilter = (queryString: string) => {
return (restaurant: RestaurantItem) => {
  return (
    restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  )
}
}
const loadAll = () => {
return [
  { value: 'vue', link: 'https://github.com/vuejs/vue' },
  { value: 'element', link: 'https://github.com/ElemeFE/element' },
  { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
  { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
  { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
  { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
  { value: 'babel', link: 'https://github.com/babel/babel' },
]
}

const handleSelect = (item: RestaurantItem) => {
console.log(item)
}

onMounted(() => {
restaurants.value = loadAll()
})

</script>

<style>
.right div {
  margin-left: 1px;
}
.el-avatar {
  height: 120px;
  width: 120px;
}
.el-avatar .el-avatar--circle {
  top: 30px;

}
.el-card {
  height: 100%;
  width: 100%;
  color: #ffffff99;

}
.biankuang {
  border : 3px solid rgba(233, 232, 232, 0.642);
  box-shadow: 5px 3px 3px rgb(165, 165, 168);
  background-color: #ffffff92;
  margin: 20px;
  padding: 20px;
  

}
.title {
    font-weight:600 ;
    color: #05050594;

  }



</style>