<template>
  <div id="content">
    <div id="login">
      <h2>登录</h2>
      <p>{{ error }}</p>
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          v-model="info.username"
        >
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          v-model="info.password"
        >
      </div>
      <button @click="submit()">登录</button>
      <!-- 触发模态框 -->
      <a class="" data-toggle="modal" data-target="#myModal">注册</a>
      <!-- 模态框（Modal） -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                &times;
              </button>
              <h4 class="modal-title" id="myModalLabel">
                注册
              </h4>
            </div>
            <div class="modal-body">
              <div>账号：<input type="text" name="username"/></div>
              <div>密码：<input type="password" name="pwd"/></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭
              </button>
              <button type="button" class="btn btn-primary" @click="regist()">
                注册
              </button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
    </div>
    <div id="regist">
    </div>
  </div>
</template>

<script>
import auth from '../auth/auth'

export default {
  name: 'login',
  data() {
    return {
      info: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    submit() {
      var info = {
        username: this.info.username,
        password: this.info.password
      }
      auth.login(this, info)
    },
    regist() {
      console.log("//TODO");
    }
  }
}
</script>
