<template>
  <div class="home">
    <home-banner></home-banner>
    <home-header></home-header>
    <home-nav :nav_data="nav_data"></home-nav>
    <div class="main">
      <div class="all" v-for="(item,index) of all" :key="index">
        <news-three :news_three_data="item" v-if="item.img3"></news-three>
        <news-pic :news_pic_data="item" v-else-if="item.img1"></news-pic>
        <news-text :news_text_data="item" v-else></news-text>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from "../../components/home-header";
import HomeBanner from "../../components/home-banner";
import HomeNav from "../../components/home-nav";
import NewsText from "../../components/news-text";
import NewsPic from "../../components/news-pic";
import NewsThree from "../../components/news-three";
import AJAX from "../../config/ajax";
import axios from "axios";

export default {
  components: {
    HomeHeader,
    HomeBanner,
    HomeNav,
    NewsText,
    NewsPic,
    NewsThree
  },

  data() {
    return {

    };
  },

  computed: {
    nav_data() {
      console.log(this.$store.state.name);
      return this.$store.state.name;
    },
    all() {
      return this.$store.state.num;
    }
  },
  methods: {},
  mounted() {
    // axios.get("https://www.shuipingguo.com/news/").then(res => {
    //   this.all = res.data.data;
    //   console.log(this.all);
    // });
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  margin-top: 80px;
}
.all {
  margin: 0 15px;
}
</style>
