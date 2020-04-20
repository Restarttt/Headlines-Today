<template>
  <div class="zh">
    <home-header></home-header>
    <home-banner></home-banner>
    <home-nav :nav_data="nav_data"></home-nav>
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
    return {
      nav_data: [
        {
          name: "推荐",
          type: 0
        },
        {
          name: "视频",
          type: 1
        },
        {
          name: "热点",
          type: 1
        },
        {
          name: "社会",
          type: 1
        },
        {
          name: "娱乐",
          type: 1
        },
        {
          name: "军事",
          type: 1
        },
        {
          name: "科技",
          type: 1
        },
        {
          name: "汽车",
          type: 1
        },
        {
          name: "房产",
          type: 1
        },
        {
          name: "家居",
          type: 1
        },
        {
          name: "体育",
          type: 1
        },
        {
          name: "财经",
          type: 1
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
