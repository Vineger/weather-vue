<template>
  <v-chart :options="option" class="chart-position echarts"/>
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
  props: ['legend', 'xAxis', 'series', 'title'],
  components: {
    "v-chart": ECharts
  },
  data() {
    return {
      option: {
        title: {
          text: this.title
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: this.legend
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
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