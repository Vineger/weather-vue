<template>
  <el-row>
    <el-col :span="10">
      <WeatherCard></WeatherCard>
    </el-col>
    <el-col :span="10">
      <TimeLine></TimeLine>
    </el-col>
  </el-row>
</template>

<script>
import WeatherCard from "@/components/home/WeatherCard";
import TimeLine from "@/components/home/TimeLine";

export default {
  name: "home",
  components: { WeatherCard, TimeLine }
};
</script>
