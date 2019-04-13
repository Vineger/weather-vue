<template>
  <div id="app">
    <el-container class="auto-height">
      <el-aside width="20%">
        <AsideNav></AsideNav>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideNav from "@/components/AsideNav";

export default {
  name: "app",
  components: { AsideNav },
  computed: {
    location() {
      return this.$store.state.baseUrl;
    }
  },
  mounted() {
    let message = this.$message;
    let store = this.$store;

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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

