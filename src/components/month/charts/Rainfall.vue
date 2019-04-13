<template>
  <AreaLine 
    :title="title"
    :legend="legend"
    :xAxis="xAxis"
    :series="series"
    :yAxis="yAxis"></AreaLine>
</template>

<script>
import AreaLine from '@/components/basicCharts/AreaLine'

export default {
  components: { AreaLine },
  data() {
    return {
      title: '降雨量变化',
      legend: ['降雨量'],
      series: {
        name: '降雨量',
        type: 'line',
        data: [],
        areaStyle: {},
        markPoint: {
          data: [
            {type: 'max', name: '最大值'}
          ]
        }
      },
      xAxis: ['1','2','3','4','5','6','7','8','9','10','11','12','13',
      '14','15','16','17','18','19','20','21','22','23','24','25','26'
      ,'27','28','29','30','31'],
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} mm'
        }
      }
    }
  },
  computed: {
    month() {
      return this.$store.state.weather_month;
    }
  },
  mounted() {
    this.series.data = this.month['weatherDates'].map((item) => {return item['pre'].substr(0, 5)});
  },
}
</script>

<style scoped>

</style>
