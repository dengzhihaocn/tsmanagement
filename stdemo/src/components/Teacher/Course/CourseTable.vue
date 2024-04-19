<template>
    <div style="background-color: #ecf5ff; border-radius:10px;padding-bottom: 10px;padding-top: 5px; width: 81%; margin: auto; margin-top: 1%; ">
      <div class="title">课程表</div>
      <el-table :cell-style="cellStyle" :data="tableData" :span-method="objectSpanMethod" header-align="center" border style="width: 99%; margin: auto; border-radius:10px;"  >
        <el-table-column prop="time" label="时间段"/>
        <el-table-column prop="date" label="节次"/>
        <el-table-column prop="Mon" label="周一" width="130" />
        <el-table-column prop="Tues" label="周二" width="130" />
        <el-table-column prop="Wed" label="周三" width="130" />
        <el-table-column prop="Thur" label="周四" width="130" />
        <el-table-column prop="Fir" label="周五" width="130" />
        <el-table-column prop="Str" label="周六" width="130" />
        <el-table-column prop="Sun" label="周日" />
      </el-table>
    </div>

    <div style="margin: 2%;">      
      <el-button type="primary" :icon="Plus" @click="showlog=true">增加</el-button>
      <el-button type="primary" :icon="EditPen">修改</el-button>
      <AddCourse :title1="titi" :show="showlog" @sss="dshowlog" />
    </div>
  </template>
  
  <script lang="ts" setup>
  //import { Discount } from '@element-plus/icons-vue/dist/types';
  import type { TableColumnCtx } from 'element-plus'
  import { Plus, EditPen} from '@element-plus/icons-vue'
  import AddCourse from '@/components/hooks/AddCourse.vue';
  import { ref , reactive } from 'vue';
  import axios from 'axios';

  const showlog = ref(false)


  const dshowlog = () =>{
    showlog.value = false;

   };

  const titi = '添加课程'


  interface User {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
  }

  interface SpanMethodProps {
  row: User
  column: TableColumnCtx<User>
  rowIndex: number
  columnIndex: number
  }

  interface Dictionary {
    date: number;
    time: string;
    Mon: string;
    Tues: string;
    Wed: string;
    Thur: string;
    Fir: string;
    Str: string;
    Sun: string;
  }

  const tableData = ref([{event1 : {teachingTime : {},courseName : {},teachingRoom: {},teachingClass : {}	}}]);
  const objectSpanMethod = ref();

//表格格式


async function ceshi ():Promise<string[]> {
    const item =(await axios.get("http://localhost:6060/sqlCoursess")).data
    return new Promise<string[]>((resolve, reject) => {
      if (item.course == null) {
        
        resolve(item);
      }
       resolve(item.course);
    })
  }


//填入表格数据函数
async function createDataList() {
  const list: Dictionary[] = [];
    for (let i = 0; i < 10; i++) {
      const date = i + 1;
      if (date < 4) {
        list.push({ date, time: '早上', Mon: '', Tues: '', Wed: '', Thur: '', Fir: '', Str: '', Sun: '' });
      } else if (date < 8) {
        list.push({ date, time: '中午', Mon: '', Tues: '', Wed: '', Thur: '', Fir: '', Str: '', Sun: '' });
      } else {
        list.push({ date, time: '晚上', Mon: '', Tues: '', Wed: '', Thur: '', Fir: '', Str: '', Sun: '' });
      }
    }
    let list1
    
    const course = await ceshi();
    
    if (course == null){
      
      return list1
    }
    
    for (let i = 0; i < course.length; i++) {
      const event1 = course[i]
    
      let event =  event1.teachingTime
      let start,xq,content
      
      if (typeof event === "string" ){
        list1 = JSON.parse(event);
      }else{
        list1 = event
      }
      

      list1.forEach( cours =>{

        start =  cours.start-1
        xq =  Number(cours.xq)
        content =  event1.courseName + '\n' + event1.teachingRoom + '\n' +'第'+ cours.start +'-'+cours.end+'节' + '\n' + event1.teachingClass	
        if (xq === 1) {
            list[start].Mon = content
          }else if( xq === 2) {
            list[start].Tues = content
          }else if( xq === 3) {
            list[start].Wed = content
          }else if( xq === 4) {
            list[start].Thur = content
          }else if( xq === 5) {
            list[start].Fir = content
          }else if( xq === 6) {
            list[start].Str = content
          }else{
            list[start].Sun = content
          }
      })
    }

  return list;    
}

createDataList().then((res) => {
  tableData.value = res

  
}
)

let xq_list = []
//填入xq表格数据函数
async function createDataxqList() {
  const list: Dictionary[] = [];
    let list1    
    const course = await ceshi();
    for (let i = 0; i < course.length; i++) {
      const event1 = course[i]
    
      let event =  event1.teachingTime
      
      if (typeof event === "string" ){
        list1 = JSON.parse(event);
      }else{
        list1 = event
      }

      list1.forEach( cours =>{

        xq_list.push(cours)
      })
    }
    return xq_list
}

createDataxqList().then((res) => {
  objectSpanMethod.value = ({
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  xq_list = res

  for (let i = 0; i < xq_list.length; i++) {
    
    if (columnIndex === 0) { 
      if (rowIndex % 4 === 0) {
        return {
          rowspan: 4,
          colspan: 1,
        }
      } else {
        return {
          rowspan: 0,
          colspan: 0,
        }
      }
    }
      
    if (columnIndex === Number(xq_list[i].xq)+1) {


      if (rowIndex === xq_list[i].start-1) {
        return {
          rowspan: xq_list[i].end - xq_list[i].start+1,
          colspan: 1,
        }
      }else if (rowIndex <= xq_list[i].end-1&&xq_list[i].start-1 < rowIndex ) {
        return {
          rowspan: 0,
          colspan: 0,
          
        }
      }
      }
  }

}})



//选中表格
  const cellStyle = ({row, column, rowIndex, columnIndex}) => {
    if(columnIndex > 1){
      const value  = row[column.property]
        if(value) {
          return {
            'text-align':'center',
            'border-radius':'4%',
            'font-weight':'500',
            'color': 'var(--el-table-header-text-color)',
            'background-color': '#ecf5ff98',
            'margin-top': '10%',
        }

        }
      }}


    </script>


  <style>
  .el-table .el-table__cell {
    text-align: center;
    white-space: pre-line;
    
  }
  .el-table .cell {
    white-space: pre-line;
  }
  .title {
    font-weight:600 ;
    color: #05050594;

  }


  
</style>