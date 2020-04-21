<template>
  <div class="home">
    <home-banner></home-banner>
    <home-header></home-header>
    <home-nav :nav_data="nav_data"></home-nav>
    <div class="main">
      <div class="submain">
        <news-text :news_text_data="news_text_data"></news-text>
        <news-pic :news_pic_data="news_pic_data"></news-pic>
        <news-three :news_three_data='news_three_data'></news-three>
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
      ],
      news_pic_data: [
        {
          title: "总统表态：向中国索赔不可接受",
          from: "新京报",
          img: "https://p3.pstatp.com/list/pgc-image/RwfXWS89t8zeTK",
          comment: "6",
          time: "",
          type: -1
        }
      ],
      news_three_data: [
        {
          title: "《清平乐》里的求不得、爱别离……",
          from: "中国妇女报",
          img_1: "https://p3.pstatp.com/list/pgc-image/RwMIG8063VXjPW",
          img_2: "https://p3.pstatp.com/list/pgc-image/RwMIG8V9lpB1m9",
          img_3: "https://p3.pstatp.com/list/pgc-image/RwMIG97JClxFy",
          comment: "17",
          time: "2小时前",
          type: -1
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  margin-top: 80px;
}
.submain {
  margin: 0 15px;
}
</style>
