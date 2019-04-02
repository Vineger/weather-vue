<template>
  <el-card>
    <el-table :data="weather" style="width: 100%">
      <el-table-column prop="tem" label="温度"></el-table-column>
      <el-table-column prop="temMax" label="最高温度"></el-table-column>
      <el-table-column prop="temMin" label="最低温度"></el-table-column>
      <el-table-column prop="tigan" label="体感温度"></el-table-column>
      <el-table-column prop="prs" label="气压"></el-table-column>
      <el-table-column prop="prsSea" label="海平面气压"></el-table-column>
      <el-table-column prop="vap" label="水汽压"></el-table-column>
      <el-table-column prop="rhu" label="相对湿度"></el-table-column>
      <el-table-column prop="windpower" label="风力级别"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  computed: {
    weather() {
      return [this.$store.state.weather_now];
    }
  },
};
</script>

<style scoped>
</style>
