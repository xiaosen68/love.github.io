<template>
  <div id="canvas-wrap">
        <canvas id="canvas">

        </canvas>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    data () {
        return {
            screenWidth:document.body.offsetWidth,
            screenHeight: document.body.offsetHeight
        }
    },
    mounted(){
     this.getCanvas();
     var that=this;
     window.onresize=function(){
         that.screenWidth=document.body.offsetWidth;
     }
       
    },
    watch:{
        "screenWidth":function(newval,oldval){
            if(newval!==oldval){
                this.getCanvas();
            }
        }
    },
    methods:{
        getCanvas(){
        let canvas = document.querySelector('#canvas')
        let ctx = canvas.getContext('2d')
        canvas.width = this.screenWidth;
        canvas.height = this.screenHeight;
        let diralGraient = ctx.createRadialGradient(this.screenWidth/2, this.screenHeight/2, 300, this.screenWidth/2, this.screenHeight/2, this.screenWidth);
        diralGraient.addColorStop(0,"rgba(0,0,0,0)");
        diralGraient.addColorStop(0.4,"rgba(0,0,0,0.9)");
        diralGraient.addColorStop(1,"rgba(0,0,0,1)");
        ctx.fillStyle = diralGraient;
        ctx.arc(this.screenWidth/2,this.screenHeight/2,2*this.screenWidth,0,2*Math.PI);
        ctx.fill();
        }
    },
}
</script>

<style scoped>
#canvas-wrap{
    position: relative;
    z-index: 10;
}
#canvas{
  position: absolute;
  top: 0;
  left:0;
  /* z-index: 100; */
}

</style>