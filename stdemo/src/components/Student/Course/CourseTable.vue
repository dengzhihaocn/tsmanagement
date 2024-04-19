<template>
  <div class= "kechengbiao" style="background-color: #ecf5ff; border-radius:10px;padding-bottom: 10px;padding-top: 5px; width: 81%; margin: auto; margin-top: 1%; ">
    <div class="title">课程表</div>
    <el-table :cell-style="cellStyle" :data="tableData" :span-method="objectSpanMethod"  header-align="center" border style="width: 99%; margin: auto; border-radius:10px;"  >
      <el-table-column prop="time" label="时间段"/>
      <el-table-column prop="date" label="节次"/>
      <el-table-column prop="Mon" label="周一" width="130" />
      <el-table-column prop="Tues" label="周二" width="130" />
      <el-table-column prop="Wed" label="周三" width="130" />
      <el-table-column prop="Thur" label="周四" width="130" />
      <el-table-column prop="Fir" label="周五" width="130" />
      <el-table-column prop="Str" label="周六" width="130" />
      <el-table-column prop="Sun" label="周日" width="130"/>
    </el-table>
  </div>



</template>

<script lang="ts" setup>
//import { Discount } from '@element-plus/icons-vue/dist/types';
import type { TableColumnCtx } from 'element-plus'
import { Plus, EditPen} from '@element-plus/icons-vue'
import axios from "axios";


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





  




const props = {

// 课表数据
events: {
type: Array,
default: null
}
}

//表格格式
const data = {
// 课程表数据
timetable: [],
events1: [
  {
    xq: 1,
    title: '形势与政治',
    class: 'sport',
    content: '1-4节' + '\n' + '社会学1班' + '\n' + '5教-402室',
    start: 1,
    end: 4
  },
  {
    xq: 1,
    title: '形势与政治',
    class: 'leisure',
    content: '9-12节' + '\n' + '社会学2班' + '\n' + '5教-401室',
    start: 9,
    end: 10
  },
  {
    xq: 3,
    title: '形势与政治',
    class: 'sport',
    content: '5-6节' + '\n' + '社会学2班' + '\n' + '1教-401室',
    start: 5,
    end: 6
  },
  {
    xq: 4,
    title: '形势与政治',
    class: 'sport',
    content: '1-2节' + '\n' + '社会学1班' + '\n' + '5教-402室',
    start: 1,
    end: 2
  },
  {
    xq: 4,
    title: '形势与政治',
    class: 'sport',
    content: '7-8节' + '\n' + '社会学1班' + '\n' + '5教-402室',
    start: 7,
    end: 8
  },
  {
    xq: 5,
    title: '形势与政治',
    class: 'sport',
    content: '3-4节' + '\n' + '社会学1班' + '\n' + '5教-402室',
    start: 3,
    end: 4
  },
  {
    xq: 5,
    title: '形势与政治',
    class: 'sport',
    content: '5-6节' + '\n' + '社会学1班' + '\n' + '5教-402室',
    start: 5,
    end: 6
  },
  {
    xq: 5,
    title: '形势与政治',
    class: 'sport',
    content: '5-6节' + '\n' + '社会学1班' + '\n' + '5教-402室',
    start: 9,
    end: 10
  }
],
hoverOrderArr: [],
weeks: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
}

//填入表格数据
function createDataList(data: any): Dictionary[] {
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
  for (let i = 0; i < data.events1.length; i++) {
    const start = data.events1[i].start-1
    const xq = data.events1[i].xq
    const content = data.events1[i].title + '\n' +  data.events1[i].content
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
  }
return list;

}

//合并表格
const objectSpanMethod = ({
row,
column,
rowIndex,
columnIndex,
}: SpanMethodProps) => {
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
for (let i in data.events1)
  if (columnIndex === data.events1[i].xq+1) {
    if (rowIndex === data.events1[i].start-1) {
      return {
        rowspan: data.events1[i].end - data.events1[i].start+1,
        colspan: 1,
      }
    }else if (rowIndex <= data.events1[i].end-1&&data.events1[i].start-1 < rowIndex ) {
      
      return {
        rowspan: 0,
        colspan: 0,
        
      }

    }
    
    }
  }

const tableData = createDataList(data);

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

    axios.get('http://localhost:6060/sqlCourse')




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