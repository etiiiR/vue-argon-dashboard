<template>
<div id="app">
  <!-- Sidenav -->
  <Sidebar></Sidebar>
  <!-- Main content -->
  <div class="main-content">
    <!-- Top navbar -->
    <MainContent></MainContent>
    <!-- Page content -->
    <transition name="">
    <router-view></router-view>
    </transition>
  </div>
</div>
</template>
<script>
import Sidebar from "./layout_dashboard/Sidebar.vue";
import MainContent from "./layout_dashboard/Main-Content.vue";
import Header from "./layout_dashboard/Header-layout.vue";
import Footer from "./layout_dashboard/Footer.vue";
import PageContent from "./layout_dashboard/Page_Content.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition,
    Sidebar,
    MainContent,
    Header,
    PageContent,
    Footer
  }
};
</script>
//hallo

<style lang="scss">
</style>
