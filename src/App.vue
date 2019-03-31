<template>
  <div id="app">
    <el-container class="auto-height">
      <el-aside width="20%">
        <AsideNav></AsideNav>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideNav from "@/components/AsideNav";

export default {
  name: "app",
  components: {
    AsideNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%
}
body {
  margin: 0 0 0 0;
}
.el-header {
  padding: 0 0 0 0 !important;
}
.auto-height {
  height: 100%;
}
</style>
<style scoped>
</style>

