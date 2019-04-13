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
    month() {
      return this.$store.state.weather_month;
    }
  },
  data() {
    return {
      legend: ["温度", "最高温度", "最低温度"],
      xAxis: ['1','2','3','4','5','6','7','8','9','10','11','12','13',
      '14','15','16','17','18','19','20','21','22','23','24','25','26'
      ,'27','28','29','30','31'],
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
    let tem = this.month["weatherDates"].map(item => { return item["tem"].substr(0, 4) });
    let temMax = this.month["weatherDates"].map(item => { return item["temMax"].substr(0, 4) });
    let temMin = this.month["weatherDates"].map(item => { return item["temMin"].substr(0, 4) });
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
