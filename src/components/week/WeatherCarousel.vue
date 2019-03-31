<template>
  <el-tabs>
    <el-tab-pane label="温度变化">
      <Temperature></Temperature>
    </el-tab-pane>
        <el-tab-pane label="降雨量">
      <Rainfall></Rainfall>
    </el-tab-pane>
    <el-tab-pane label="气压变化">
      <AirPressure></AirPressure>
    </el-tab-pane>
    <el-tab-pane label="相对湿度变化">
      <Humidity></Humidity>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  components: {
    Temperature: () => import("./Temperature"),
    Rainfall: () => import('./Rainfall'),
    AirPressure: () => import('./AirPressure'),
    Humidity: () => import('./Humidity')
  }
};
</script>

<style scoped>
</style>
