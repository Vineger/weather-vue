<template>
  <StackedLine 
    :title="'气压变化'"
    :legend="legend"
    :series="series"
    :xAxis="xAxis"
    :yAxis="yAxis"></StackedLine>
</template>

<script>
import StackedLine from '@/components/basicCharts/Line'

export default {
  components: { StackedLine },
  computed: {
    week () {
      return this.$store.state.weather_week
    }
  },
  data() {
    return {
      legend: ['大气压', '海平面大气压', '水汽压'],
      series: [],
      xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} Pa'
        }
      }
    }
  },
  mounted() {
    let prs = this.week["weatherMap"].map(item => { return item['prs'] });
    let prsSea = this.week["weatherMap"].map(item => { return item['prsSea'] });
    let vap = this.week["weatherMap"].map(item => { return item['vap'] });
    this.series.push({
      name: "大气压",
      type: "line",
      data: prs
    },{
      name: "海平面大气压",
      type: "line",
      data: prsSea
    },{
      name: "水汽压",
      type: "line",
      data: vap
    });
  }
}
</script>

<style>

</style>
