<template>
    <div>
      <div class="music-list">
          <p>
            <span class="music-button" @click="getMusicList">正在播放</span>
            <span class="music-button">我的收藏</span>
            <span class="music-button">排行榜/歌单</span>
            <span class="music-button">搜索音乐</span>
          </p>
          <div class="music-list-wrap">
              <div v-for="(music,index) in musicList" :key="'d'+index">{{music.data.songname}}</div>
          </div>
      </div>
      <div class="music-lry"></div>
  </div>
</template>

<script>
/* eslint-disable */
const musicAPI = require("music-api-next")
export default {
data () {
    return {
        musicList:[]
    }
},
mounted(){

},
methods:{
    getMusicList(){
        this.$http.get('/getMusic/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8%C2%ACice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923').then(req=>{
           if(req.status===200){
               this.musicList = req.data.songlist;
           }
           console.log(req);
        })
    }
}
}
</script>

<style scoped>
.music-list-wrap{
height: 400px;
overflow: scroll;
}

.music-list{
    width:80%;
    text-align: left;
    padding:20px 40px;
}
.music-lry{

}
@media screen and (max-width:998px){
    .music-list{
    width:100%;
    }
}
.music-button{
    display:inline-block;
    background:rgba(0,0,0,0);
    border:1px solid rgba(255,255,255,0.3);
    padding:0 15px;
    margin: 0 10px;
    font-size: 14px;
    line-height: 32px;
    color:rgba(255,255,255,0.8)
}
.music-button:hover{
    border:1px solid rgba(255,255,255,0.8);
}
</style>