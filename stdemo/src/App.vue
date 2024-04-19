<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import router from './router';



export default {
  name: 'App',
  components: {
    HelloWorld,
    router,
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-block-end: 0px;
  margin-bottom: 0px;
}

</style>
