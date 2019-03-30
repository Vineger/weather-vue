<template>
  <StackedLine 
    :series="series" 
    :title="'温度变化曲线'" 
    :legend="legend"></StackedLine>
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
      xAxis: "",
      series: []
    };
  },
  mounted() {
    let tem = this.week["weatherMap"].map(item => {
      return item["tem"];
    });
    let temMax = this.week["weatherMap"].map(item => {
      return item["temMax"];
    });
    let temMin = this.week["weatherMap"].map(item => {
      return item["temMin"];
    });
    this.series.push({
      name: "温度",
      type: "line",
      data: tem
    });

    this.series.push({
      name: "最高温度",
      type: "line",
      data: temMax
    });

    this.series.push({
      name: "最低温度",
      type: "line",
      data: temMin
    });
  }
};
</script>
