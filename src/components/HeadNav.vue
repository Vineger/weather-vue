<template>
  <el-menu mode="horizontal" :default-active="'3'" @select="handleSelect">
    <el-menu-item v-if="!this.state" index="1">注册</el-menu-item>
    <el-menu-item v-if="!this.state" index="2">登陆</el-menu-item>
    <el-menu-item v-if="this.state" index="3">{{this.name}}</el-menu-item>
  </el-menu>
</template>

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
