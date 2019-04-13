<template>
  <div>
    <el-row>
      <Alert></Alert>
    </el-row>
    <el-row>
      <el-card class="card-size card-position">
        <DatePicker class="picker-position"></DatePicker>
        <div class="button-position" @click="clickEvent">
          <a href="javascript:;" class="el-button">下载文件</a>
        </div>
      </el-card>
    </el-row>
 </div>
</template>

<script>
import DatePicker from '@/components/display/DatePicker'
import Alert from '@/components/display/Alert'

export default {
  components: { DatePicker, Alert },
  computed: {
    arg() {
      return this.$store.state.display_request_arg;
    },
    url() {
      return this.$store.state.baseUrl;
    }
  },
  methods: {
    clickEvent() {
      if(this.arg.length == undefined) {
          this.$notify({
            title: '警告',
            message: '请先选择想要获取的数据日期范围',
            type: 'warning'
          });
      } else {
        console.log(this.url + 'custom/' + this.arg[0] + '/' + this.arg[1]);
        window.open(this.url + 'custom/' + this.arg[0] + '/' + this.arg[1], '_blank');
      }
    }
  },
}
</script>

<style scoped>
a {
  text-decoration:none;
}
.button-position {
  margin-top: 75px
}
.card-size {
  height: 280px;
  width: 600px;
}
.card-position {
  margin: 0 auto;
  margin-top: 45px;
  text-align: center;
}
.picker-position {
  margin-top: 30px
}
.el-row {
  margin-bottom: 10px 
}
</style>
