<template>
  <el-card>
    <!-- <div v-for="(value, key, index) in weather" :key="index">
      {{value + ':' + value}}
    </div> -->
  </el-card>
</template>

<script>
import axios from 'axios'
import url from `../REQUEST_URL.js`

export default {
  data() {
    return {
    }
  },
  methods: {
    abc: function() {
      axios.get();
    },
  }
};
</script>

<style scoped>
</style>
