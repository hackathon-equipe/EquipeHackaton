<script setup>
defineProps({
 comando: {
   type: Object,
   required: true
 }
})
</script>
<template>
       <div class="help-area">
           <div class="help-blocoTexto">
               <ul>
                   <li class="help-titulo">DIGITE</li>
                   <li v-for="(text, index) in comando" :key="index">{{text.comando}}</li>
               </ul>
           </div>
           <div>
               <ul>
                   <li class="help-titulo">PARA VER</li>
                   <li v-for="(text, index) in comando" :key="index">{{text.nome}}</li>
               </ul>
           </div>
           <span class="closeButton" @click="$emit('openArea')">X</span>
       </div>
</template>
<style scoped>
@keyframes animationHelp {
   0% {
       height: 0px;
       padding: 0px;
   }
   100% {
       height: 350px;
   }
}
@keyframes animationCloseButton{
   0%, 90%{
       opacity: 0;
   }
   100%{
       opacity: 1;
   }
}
.closeButton{
   animation: animationCloseButton .55s;
}
.help-area{
   padding: 75px;
   display: flex;
   width: 100vw;
   height: 350px;
   background-color: #181818;
   position: absolute;
   color: #989B95;
   bottom: 0;
   font-weight: 600;
   gap: 50px;
   animation: animationHelp .5s;
}
.help-area span{
   cursor: pointer;
   font-size: 18px;
   position: absolute;
   right: 40px;
   bottom: 300px;
}
.help-area ul{
   list-style: none;
}
.help-titulo{
   font-weight: 300;
}
.help-blocoTexto{
   margin-left: 4%;
}
</style>

