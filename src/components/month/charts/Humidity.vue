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
    month () {
      return this.$store.state.weather_month
    }
  },
  data () {
    return {
      legend: ['相对湿度'],
      xAxis: ['1','2','3','4','5','6','7','8','9','10','11','12','13',
      '14','15','16','17','18','19','20','21','22','23','24','25','26'
      ,'27','28','29','30','31'],
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
      data: this.month['weatherDates'].map((item) => { return item['rhu'].substr(0, 4) }),
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
