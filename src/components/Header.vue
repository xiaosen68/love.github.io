<template>
  <div id="header">

      <img class="logo" src="../assets/logo.png" alt="">
      <ul class="nav-list">
          <li class="nav-item" @click="selectNav(index)" :class="{'select-item':selectItem==index?true:false}"
          v-for="(nav,index) in navList" :key="'a'+index"><router-link :to="nav.to" class="nav-a">{{nav.title}}</router-link></li>
      </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    data () {   
       return{
           selectItem:1,
           navList:[
                {
                    title:'首页',
                    to:'/'
                },
                {
                    title:'博客',
                    to:'/blog'
                },
                {
                    title:'音乐',
                    to:'/music'
                },
                {
                    title:'小说',
                    to:'/story'
                }
            ]
        }
    },
    methods: {
        selectNav(index){
            this.selectItem = index
        }
    }
}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
}
#header{
    position: relative;
    width: 100%;
    text-align: left;
    padding: 16px 10px;
    z-index: 100;
}
.logo{
    width:20px;
    float: left;
    /* vertical-align: middle; */
}
ul,li{
    list-style: none;
}
.nav-item{
    float: left;
    vertical-align: middle;
    padding-bottom: 2px;
    margin: 0 20px;
   } 
.nav-a{
color: white;
text-decoration: none;
}

.nav-item:hover{
 border-bottom:1px solid #feeef1;
}
.nav-list .select-item{
    border-bottom:1px solid pink;
}
.nav-list{
    display: inline-block;
    width:60%;
}

</style>