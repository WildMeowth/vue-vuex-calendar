<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期：</label>
        <input type="date" class="form-control" v-model="date" placeholder="Date" />
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input type="number" class="form-control" v-model="totalTime" placeholder="Hours" />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input type="text" class="form-control" v-model="comment" placeholder="Comment" />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn -danger">取消</router-link>
  </div>
</template>

<script>
import Util from '../util/util.js'
export default {
  name: 'LogTime',
  data() {
    return {
      date: '',
      totalTime: 0,
      comment: ''
    }
  },
  methods: {
    save() {
        const userName = Util.getCookie('name');
        var plan;
        try{
          console.log("--------------");
            plan = {
              name: userName,
              avatar: require("../assets/"+userName+".jpg"),
              date: this.date,
              totalTime: parseInt(this.totalTime),
              comment: this.comment
            };
        }catch(e){
            plan = {
              name: userName,
              avatar: require("../assets/default.png"),
              date: this.date,
              totalTime: parseInt(this.totalTime),
              comment: this.comment
            };
        }
        this.$store.dispatch('savePlan', plan);
        this.$store.dispatch('addTotalTime', parseInt(this.totalTime));
        this.$router.go(-1);
    }
  }
}
</script>