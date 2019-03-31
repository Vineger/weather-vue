<template>
  <v-chart :options="option" class="chart-position"/>
</template>

<style scoped>
/**
 * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
 * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
 */
.echarts {
  height: 450px;
  width: 800px;
}
.chart-position {
  margin: auto;
  margin-bottom: 100px;
}
</style>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/title"
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/toolbox";

export default {
  props: ["xAxis", "series", "legend", "title"],
  components: {
    "v-chart": ECharts
  },
  data() {
    return {
      option: {
        title: {
          text: this.title
        },
        legend: {
          data: this.legend
        },
        xAxis: {
          type: "category",
          data: this.xAxis
        },
        yAxis: {
          type: "value"
        },
        series: this.series
      }
    };
  }
};
</script>
