<template>
  <div>
    <el-row>
      <WeatherCard></WeatherCard>
    </el-row>
    <el-row>
      <WeatherCarousel></WeatherCarousel>
    </el-row>
  </div>
</template>

<script>
import WeatherCard from "@/components/week/WeatherCard";
import WeatherCarousel from "@/components/week/WeatherCarousel";

export default {
  components: { WeatherCarousel, WeatherCard }
};
</script>

<style scoped>
</style>
