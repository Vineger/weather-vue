<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item>
      <Bar></Bar>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Bar from "@/components/charts/Bar";

export default {
  components: { Bar }
};
</script>

<style scoped>
</style>
