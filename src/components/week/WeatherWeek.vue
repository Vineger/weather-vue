<template>
  <el-tabs>
    <el-tab-pane
      :lazy="Boolean(true)"
      v-for="(item, index) in tabs" 
      :label="item.label"
      :key="index">
      <component :is="item.content"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      active: "Temperature",
      tabs: [
        {
          label: "温度变化",
          content: "Temperature"
        },
        {
          label: "降雨量变化",
          content: "Rainfall"
        },
        {
          label: "气压变化",
          content: "AirPressure"
        },
        {
          label: "相对湿度变化",
          content: "Humidity"
        }
      ]
    };
  },
  components: {
    Temperature: () => import("./charts/Temperature"),
    Rainfall: () => import("./charts/Rainfall"),
    AirPressure: () => import("./charts/AirPressure"),
    Humidity: () => import("./charts/Humidity")
  }
};
</script>

<style scoped>
</style>
