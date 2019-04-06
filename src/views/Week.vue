<template>
  <div>
    <a class="el-button" download="" :href="location + 'week/excel'">导出Excel数据</a>
    <WeatherWeek></WeatherWeek>
  </div>
</template>

<script>
import WeatherWeek from "@/components/week/WeatherWeek";

export default {
  components: { WeatherWeek },
  computed: {
    location() {
      return this.$store.state.baseUrl
    }
  }
};
</script>

<style scoped>
a {
  text-decoration:none;
}
</style>
