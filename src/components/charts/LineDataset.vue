<template>
  <v-chart :options="option" class="chart-position"/>
</template>

<style>
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
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/toolbox";

export default {
  props: ['dataset'],
  components: {
    "v-chart": ECharts
  },
  data() {
    return {
      option: {
        legend: {},
        tooltip: {},
        dataset: {
          source: this.dataset
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "line" }, { type: "line" }, { type: "line" }]
      }
    };
  }
};
</script>