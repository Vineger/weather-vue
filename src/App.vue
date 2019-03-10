<template>
  <div id="app">
    <el-container>
      <el-header>
        <HeaderNav></HeaderNav>
      </el-header>
      <el-aside width="21%">
        <AsideNav></AsideNav>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from "@/components/home/HeaderNav";
import AsideNav from "@/components/home/AsideNav";

export default {
  name: "app",
  components: {
    HeaderNav,
    AsideNav
  }
};
</script>

<style>
.el-header {
  padding: 0 0 0 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0 0 0 0;
}
</style>
