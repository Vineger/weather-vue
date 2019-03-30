<template>
  <el-tabs type="border-card">
    <el-tab-pane label="温度变化">
      <Temperature></Temperature>
    </el-tab-pane>
    <el-tab-pane label="配置管理"></el-tab-pane>
    <el-tab-pane label="角色管理"></el-tab-pane>
    <el-tab-pane label="定时任务补偿"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  components: {
    Temperature: () => import("./Temperature")
  }
};
</script>

<style scoped>
</style>
