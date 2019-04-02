<template>
  <div>
    <el-row>
      <el-col>
        <WeatherCard></WeatherCard>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11">
        <TimeLine></TimeLine>
      </el-col>
      <el-col :offset="1" :span="10">
        <InfoCollapse></InfoCollapse>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 50px;
}
</style>


<script>
import WeatherCard from "@/components/home/WeatherCard";
import TimeLine from "@/components/home/TimeLine";
import InfoCollapse from "@/components/home/InfoCollapse";

export default {
  name: "home",
  components: { WeatherCard, TimeLine, InfoCollapse },
    mounted() {
    this.$axios
      .get(this.$store.state.baseUrl + "now")
      .then(function(response) {
        this.$store.commit("set_weather_now", response.data);
        console.log(data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
