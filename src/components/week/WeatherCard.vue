<template>
    <el-col :span="12" :offset="6">
      <el-card>
        <div v-for="(value, key, index) in weather" :key="index">
        {{value + ':' + value}}
        </div>
      </el-card>
    </el-col>
</template>

<script>
export default {
  data() {
    return {
      weather: ""
    };
  }
};
</script>

<style scoped>
</style>
