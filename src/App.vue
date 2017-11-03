<template>
<div id="#app">

  <keep-alive>
  <compoment v-bind:is='currentview'></compoment>
  </keep-alive>
  </div>
</template>

<script>
  import Mai from './Main.vue'
  import Login from './Login.vue'
  import auth from './auth/auth'

   export default {
        name: 'app',
        
        beforeCreate(){
          //如果没有token的话需要重新登录
          if(!auth.authenticated){
             this.currentview = 'Login';
          }else{
            this.currentview = 'Mai';
          }
        },
        components: {
            Login,
            Mai
        }
    }
</script>


