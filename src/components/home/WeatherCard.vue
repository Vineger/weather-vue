<template>
  <el-card>
    <el-row>
      <el-col :span="12">
        <el-tag size="medium">温度</el-tag>
        <span>{{" : " + weather.tem + "℃"}}</span>
      </el-col>
      <el-col :span="12">
        <el-tag type="medium">体感温度</el-tag>
        <span>{{" : " + weather.tigan + "℃"}}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-tag size="medium">最高温度</el-tag>
        <span>{{" : " + weather.temMax + "℃"}}</span>
      </el-col>
      <el-col :span="12">
        <el-tag size="medium">最高温度</el-tag>
        <span>{{" : " + weather.temMin + "℃"}}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-tag size="medium">气压</el-tag>
        <span>{{" : " + weather.prs + "Pa"}}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-tag size="medium">海平面气压</el-tag>
        <span>{{" : " + weather.prsSea + "Pa"}}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-tag size="medium">相对湿度</el-tag>
        <span>{{" : " + weather.rhu + "%"}}</span>
      </el-col>
      <el-col :span="12">
        <el-tag size="medium">风力</el-tag>
        <span>{{" : " + weather.windpower + "级"}}</span>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  computed: {
    weather() {
      return this.$store.state.weather_now;
    }
  },
  mounted: function() {
    this.$axios
      .get(this.$store.state.baseUrl + "now")
      .then(function(response) {
        this.$store.commit("set_weather_now", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 15px;
}
</style>
