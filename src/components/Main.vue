<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
          <li><router-link to="/home">{{ name }}</router-link></li>
          <li @click="logout()"><router-link to="">注销</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar.vue'
  import Util from '../util/util.js'

  export default {
    components: { 'sidebar': Sidebar },
    data: function() {
      return {
          name: Util.getCookie('name')
      }
    },
    methods: {
      logout() {
          Util.delCookie('name');
          Util.delCookie('token');
          window.location.reload();
      }
    }
  }
</script>


