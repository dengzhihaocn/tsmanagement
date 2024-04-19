<template>
    <div class ='biankuang' >
    <div>教授中课程
    <el-row>
        <el-col el-col v-for="(o, index) in 4" :key="o" :span="6" :offset="index >= 0 ? 1 : 0">
            <el-card :body-style="{ padding: '1px' }" shadow="hover">
                <div style="float: left">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
                </div>
                <div style="padding: 1px">
                <h4>课程名称</h4>
                <p>考试时间：</p>
                <div class="bottom">
                    <el-button text class="button">开始考试</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
    
        
    </el-row>
    </div></div>
    <div class ='biankuang' >
    <div>已结束课程</div>
    <el-row>
        <el-col el-col v-for="(o, index) in 4" :key="o" :span="6" :offset="index >= 0 ? 1 : 0">
            <el-card :body-style="{ padding: '1px' }" shadow="hover">
                <div style="float: left ">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
                </div>
                <div>
                    <div style="padding: 10px">
                <span>课程名称</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <el-button text class="button">查看作业</el-button>
                </div>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>

</div>
    


</template>
<script></script>

<style>
.right div {
    margin-left: 1px;
}
img {
    height: 100px;
    width: 100px;
    left: 0px;

}
.biankuang {
  border : 3px solid rgba(233, 232, 232, 0.642);
  box-shadow: 5px 3px 3px rgb(165, 165, 168);
  background-color: #ffffff92;
  margin: 20px;
  padding: 20px;

  

}
</style>