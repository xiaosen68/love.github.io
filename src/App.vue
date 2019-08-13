<template>
  <div id="app">
    <CanvasVue></CanvasVue>
    <Header></Header>
    <BackgroundImage></BackgroundImage>
    <router-view class="router-view"/>
  </div>
</template>

<script>
/* eslint-disable */
import Header from './components/Header'
import CanvasVue from './components/Canvas'
import BackgroundImage from './components/BackgroundImage'
export default {
  name: 'App',
  components:{
    Header,
    CanvasVue,
    BackgroundImage
  },
  data () {
    return {
      backgroundBj: [
        '1.jpg', '2.jpg', '3.jpg'
        ]
    }
  },
  mounted(){
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
html,body{
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  width: 100%;
  /* overflow: hidden; */
  /* padding-top:10px; */
  /* margin-top: 60px; */
}
.router-view{
  position:relative;
  z-index: 101;
}
</style>
