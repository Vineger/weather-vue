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
    month () {
      return this.$store.state.weather_month
    }
  },
  data() {
    return {
      legend: ['大气压', '海平面大气压', '水汽压'],
      series: [],
      xAxis: ['1','2','3','4','5','6','7','8','9','10','11','12','13',
      '14','15','16','17','18','19','20','21','22','23','24','25','26'
      ,'27','28','29','30','31'],
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} Pa'
        }
      }
    }
  },
  mounted() {
    let prs = this.month["weatherDates"].map(item => { return item['prs'].substr(0, 6) });
    let prsSea = this.month["weatherDates"].map(item => { return item['prsSea'].substr(0, 6) });
    let vap = this.month["weatherDates"].map(item => { return item['vap'].substr(0, 5) });
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
