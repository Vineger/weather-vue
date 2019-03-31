<template>
  <AreaLine 
    :title="title"
    :legend="legend"
    :xAxis="xAxis"
    :series="series"></AreaLine>
</template>

<script>
import AreaLine from '@/components/charts/AreaLine'

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
        areaStyle: {}
      },
      xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  },
  computed: {
    week() {
      return this.$store.state.weather_week;
    }
  },
  mounted() {
    this.series.data = this.week['weatherMap'].map((item) => {return item['pre']});
  },
}
</script>

<style scoped>

</style>
