<template>
  <el-date-picker
    v-model="value"
    type="daterange"
    align="right"
    unlink-panels
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    value-format='yyyy_MM_dd'
    :picker-options="pickerOption"
    @change="changeEvent">
  </el-date-picker>
</template>

<script>
export default {
  data() {
    return {
      pickerOption: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }],
        disabledDate(time) {
          let date = new Date();
          date.setFullYear(2019, 2, 11);
          return time.getTime() > Date.now() || time.getTime() < date.getTime();
        }
      },
      value: '',
    }
  },
  methods: {
    changeEvent() {
      this.$store.commit('set_display_request_arg', this.value);
    }
  }
}
</script>

<style scoped>

</style>
