<template>
  <div class="zh">
    <home-header></home-header>
    <home-banner></home-banner>
    <home-nav></home-nav>
  </div>
</template>

<script>
import HomeHeader from "../../components/home-header";
import HomeBanner from "../../components/home-banner";
import HomeNav from "../../components/home-nav";

export default {
   components: {
    HomeHeader,
    HomeBanner,
    HomeNav
  },

  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
