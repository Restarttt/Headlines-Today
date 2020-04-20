<template>
  <div class="zh">
    <home-banner></home-banner>
    <home-header></home-header>
    <home-nav :nav_data="nav_data"></home-nav>
    <div class="main">
      <news-text :news_text_data="news_text_data"></news-text>
      <news-pic></news-pic>
      <news-three></news-three>
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
      ],
      news_text_data: [
        {
          title: "助力战“疫”复工复产 习近平为当前网信工作指明方向",
          from: "人民网",
          comment: "14",
          time: "1小时前",
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
.main{
  width: 100%;
  margin: 80px 15px 0 15px;
}
</style>
