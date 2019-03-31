<template>
  <StackedLine 
    :series="series" 
    :title="'温度变化曲线'" 
    :legend="legend"
    :xAxis="xAxis"></StackedLine>
</template>

<style scoped>
</style>

<script>
import StackedLine from "@/components/charts/StackedLine";

export default {
  components: {
    StackedLine
  },
  computed: {
    week() {
      return this.$store.state.weather_week;
    }
  },
  data() {
    return {
      legend: ["温度", "最高温度", "最低温度"],
      xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      series: []
    };
  },
  mounted() {
    let tem = this.week["weatherMap"].map(item => { return item["tem"] });
    let temMax = this.week["weatherMap"].map(item => { return item["temMax"] });
    let temMin = this.week["weatherMap"].map(item => { return item["temMin"] });
    this.series.push({
      name: "温度",
      type: "line",
      data: tem
    },{
      name: "最高温度",
      type: "line",
      data: temMax
    },{
      name: "最低温度",
      type: "line",
      data: temMin
    });
  }
};
</script>
