<template>
  <div id="app">
    <el-container class="auto-height">
      <el-aside width="20%">
        <AsideNav></AsideNav>
      </el-aside>
      <el-container>
        <el-header>
          <HeadNav></HeadNav>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideNav from "@/components/AsideNav";
import HeadNav from '@/components/HeadNav';

export default {
  components: { AsideNav, HeadNav },
};
</script>

<style>
.el-header {
  padding: 0 0 0 0 !important;
}
.auto-height {
  height: 100%;
}
</style>

