<template>
  <el-menu 
    mode="horizontal"
    :default-active="'1'"
    text-color="#000000"
    @select="handleSelect">
    <el-menu-item index="1">天气分析系统</el-menu-item>
    <el-menu-item v-if="!this.state" index="2" style="float:right; margin-right:30px">注册</el-menu-item>
    <el-menu-item v-if="!this.state" index="3" style="float:right">登陆</el-menu-item>
    <el-menu-item v-if="this.state" index="4" style="float:right">{{this.name}}</el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu {
  font-weight: 600;
}
</style>


<script>
export default {
  computed: {
    state() {
      return this.$store.state.user_state;
    },
    name() {
      return this.$store.state.user_name;
    }
  },
  methods: {
    handleSelect(key) {
      if (key == 1) {
        this.$router.push({ name: "signup" });
      } else if (key == 2) {
        this.$router.push({ name: 'signin'});
      }
    }
  }
}
</script>
