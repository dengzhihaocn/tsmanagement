
<template>
    <el-cascader :options="options" :show-all-levels="true" v-model="tclass" style="width: 100%;" />
</template>
<script lang="ts" setup>

import { ref } from 'vue'
import axios from 'axios';

let tclass



const options= ref([
  {
    
    label: '商学院',
    children: [
      {
        label: '金融专业',
        children: [
          {
            value: '1班',
            label: '1班',
          },
          {
            value: '2班',
            label: '2班',
          },
        ],
      },
    ]}])


    function getsclass() {
    axios.get('http://localhost:6060/3456').then((res) => {
        if (res != null ){
        let data = res.data
        let biglist = []
        data.forEach(element => {
            let yuanxijiedian ={
            label: '' ,
            children: []
            }
            yuanxijiedian.label=element.yuanxi

            const panduan = biglist.some(i => i.label == element.yuanxi)
            if (!panduan) {
            biglist.push(yuanxijiedian)
            }
        });

        for (let i=0; i <biglist.length; i++){
            data.forEach(element => {
            let yuanxijiedian ={
            label: '' ,
            children: [],
            }
            yuanxijiedian.label = element.zhuanye
            if (biglist[i].label == element.yuanxi){
            const panduan = biglist[i].children.some(i => i.label == element.zhuanye)
            if (!panduan) {
                biglist[i].children =   biglist[i].children.concat(yuanxijiedian)
            }else{}
            }

        })

        }
        for (let i=0; i <biglist.length; i++){
            data.forEach(element => {
            

            for (let j=0; j<biglist[i].children.length;j++){
            let yuanxijiedian ={
            value: element.cid ,
            label: element.classTitle + element.banhao,
            }

            if (biglist[i].children[j].label == element.zhuanye){


                if (biglist[i].children[j].children == 1 ){
                biglist[i].children[j].children = yuanxijiedian
                }else {
                biglist[i].children[j].children = biglist[i].children[j].children.concat(yuanxijiedian)
            }
            }


            }
            })
        }
        console.log(biglist)
        
        options.value = biglist
        
        }}
    )
    }

    getsclass();

</script>
