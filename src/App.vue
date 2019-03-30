<template>
  <div id="app">
    <el-container>
      <el-aside width="20%">
        <AsideNav></AsideNav>
      </el-aside>
      <el-container>
        <el-header>
          <HeaderNav></HeaderNav>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import AsideNav from "@/components/AsideNav";

export default {
  name: "app",
  components: {
    HeaderNav,
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
}
body {
  margin: 0 0 0 0;
}
.el-header {
  padding: 0 0 0 0 !important;
}
</style>
<style scoped>
</style>

