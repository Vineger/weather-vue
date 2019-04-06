<template>
  <StackedLine 
    :series="series" 
    :title="'温度变化曲线'" 
    :legend="legend" 
    :xAxis="xAxis"
    :yAxis="yAxis"></StackedLine>
</template>

<style scoped>
</style>

<script>
import StackedLine from "@/components/basicCharts/Line";

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
      xAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} ℃"
        }
      },
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
    this.series.push(
      {
        name: "温度",
        type: "line",
        data: tem,
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      },
      {
        name: "最高温度",
        type: "line",
        data: temMax,
        markPoint: {
          data: [{ type: "max", name: "最大值" }]
        }
      },
      {
        name: "最低温度",
        type: "line",
        data: temMin,
        markPoint: {
          data: [{ type: "min", name: "最小值" }]
        }
      }
    );
  }
};
</script>
