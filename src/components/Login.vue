<template>
  <div id="content">
    <div id="login" class="container">
      <h2>登录</h2>
      <p>{{ error }}</p>
      <form class="form-horizontal" role="form">
        <div class="form-group">
          <label for="username" class="col-sm-2 control-label">账号：</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="username" placeholder="请输入账号" v-model="info.username">
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-sm-2 control-label">密码：</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password" placeholder="请输入密码" v-model="info.password">
          </div>
        </div>
        <div class="form-group">
            <div class="checkbox">
              <label>
                <input type="checkbox">请记住我
                <button type="submit" class="btn btn-default" @click="submit()">登录</button>
                <!-- 触发模态框 -->
                <a class="" data-toggle="modal" data-target="#myModal">注册</a>
              </label>
            </div>
        </div>
      </form>
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
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="uN" class="col-sm-2 control-label">账号：</label>
                <div class="col-sm-10">
                  <input type="text" id="uN" class="form-control" name="username"/>
                </div>
              </div>
              <div class="form-group">
                <label for="pWD" class="col-sm-2 control-label">密码：</label>
                <div class="col-sm-10">
                  <input type="password" id="pWD" class="form-control" name="pwd"/>
                </div>
              </div>       
            </form>
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
