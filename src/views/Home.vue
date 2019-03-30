<template>
  <el-row>
    <el-col :span="8">
      <WeatherCard></WeatherCard>
    </el-col>
    <el-col :span="10" :offset="2">
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
