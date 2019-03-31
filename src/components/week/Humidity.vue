<template>
  <SimpleLine
    :title="'相对湿度变化'"
    :legend="legend"
    :xAxis="xAxis"
    :series="series"></SimpleLine>
</template>

<script>
import SimpleLine from '@/components/charts/SimpleLine'

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
      series: [],
    }
  },
  mounted () {
    this.series.push({
      type: 'line',
      name: '相对湿度',
      data: this.week['weatherMap'].map((item) => { return item['rhu'] })
    });
  }
}
</script>

<style scoped>

</style>
