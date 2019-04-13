<template>
  <div id="app">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>您尚未登陆，无法使用该功能，请先登陆</span>
      <span slot="footer">
        <el-button type="primary" @click="handlerSignin">登陆</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    location() {
      return this.$store.state.baseUrl;
    },
    state() {
      return this.$store.state.user_state;
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handlerSignin() {
      this.dialogVisible = false;
      this.$router.push({name: 'signin'});
    }
  },
  mounted() {
    let message = this.$message;
    let store = this.$store;

    this.$router.beforeEach((to, from, next) => {
      if (to.name == 'display' && this.state == false) {
        this.dialogVisible = true;
        next(false);
      } else {
        next();
      }
    })

    this.$notify({
      title: "欢迎(。・∀・)ノ",
      message: this.$createElement("i", "欢迎进入天气统计分析系统"),
      position: "bottom-right"
    });

    this.$axios
      .get(this.location + "now")
      .then(function(response) {
        store.commit("set_weather_now", response.data);
      })
      .catch(function() {
        message.error("服务出现了一些错误(っ °Д °;)っ");
      });

    this.$axios
      .get(this.location + "week")
      .then(function(response) {
        store.commit("set_weather_week", response.data);
      })
      .catch(function() {
        message.error("服务出现了一些错误(っ °Д °;)っ");
      });

    this.$axios
      .get(this.location + "month")
      .then(function(response) {
        store.commit("set_weather_month", response.data);
      })
      .catch(function() {
        message.error("服务出现了一些错误(っ °Д °;)っ");
      });
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
body {
  margin: 0 0 0 0;
}
.el-header {
  padding: 0 0 0 0 !important;
}
.auto-height {
  height: 100%;
}
</style>

