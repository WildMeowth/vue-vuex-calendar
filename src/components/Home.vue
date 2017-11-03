<template>
  <div class="jumbotron">
    <h1>任务追踪</h1>
    <p>
      <strong>
        <router-link to="/time-entries">创建一个任务</router-link>
      </strong>
    </p>
  </div>
</template>

<script>
import auth from '../auth/auth'

export default {
  name: 'home',
  data() {
    return {
      date: '',
      totalTime: 0,
      comment: ''
    }
  },
 
  methods:{
      
  }
}
</script>

