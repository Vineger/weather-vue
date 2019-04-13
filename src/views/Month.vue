<template>
  <div>
    <a class="el-button" download="" :href="location + 'week/excel'">导出Excel数据</a>
    <WeatherMonth></WeatherMonth>
  </div>
</template>

<script>
import WeatherMonth from "@/components/month/WeatherMonth";

export default {
  components: { WeatherMonth },
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

