<template>
  <el-menu default-active="1" class="auto-height">
    <el-menu-item index="1" @click="today">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="2" @click="last_week">
      <i class="el-icon-document"></i>
      <span slot="title">上周数据</span>
    </el-menu-item>
    <el-menu-item index="3" @click="last_month">
      <i class="el-icon-setting"></i>
      <span slot="title">上月数据</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    today: function() {
      this.$router.push({ name: "home" });
    },
    last_week: function() {
      this.$router.push({ name: "week" });
    },
    last_month: function() {
      this.$router.push({ name: "month" });
    }
  }
};
</script>

<style>
.auto-height {
  height: 100%;
}
</style>
