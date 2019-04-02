<template>
  <el-tabs>
    <el-tab-pane
      :lazy="'true'"
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
    Temperature: () => import("./Temperature"),
    Rainfall: () => import("./Rainfall"),
    AirPressure: () => import("./AirPressure"),
    Humidity: () => import("./Humidity")
  }
};
</script>

<style scoped>
</style>
