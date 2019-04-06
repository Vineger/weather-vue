<template>
  <SimpleLine
    :title="'相对湿度变化'"
    :legend="legend"
    :xAxis="xAxis"
    :yAxis="yAxis"
    :series="series"></SimpleLine>
</template>

<script>
import SimpleLine from '@/components/basicCharts/Line'

export default {
  components: {
    SimpleLine
  },
  computed: {
    week () {
      return this.$store.state.weather_week
    }
  },
  data () {
    return {
      legend: ['相对湿度'],
      xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} %'
        }
      },
      series: [],
    }
  },
  mounted () {
    this.series.push({
      type: 'line',
      name: '相对湿度',
      data: this.week['weatherMap'].map((item) => { return item['rhu'] }),
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      }
    });
  }
}
</script>

<style scoped>

</style>
