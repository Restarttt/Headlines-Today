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
      // all:[],
      // nav_data: [
      //   {
      //     name: "精选",
      //     type: 0
      //   },
      //   {
      //     name: "热点",
      //     type: 1
      //   },
      //   {
      //     name: "社会",
      //     type: 2
      //   },
      //   {
      //     name: "鱼类",
      //     type: 3
      //   },

      //   {
      //     name: "科技",
      //     type: 4
      //   },
      //   {
      //     name: "体育",
      //     type: 5
      //   },
      //   {
      //     name: "财经",
      //     type: 6
      //   },
      //   {
      //     name: "军事",
      //     type: 7
      //   },
      //   {
      //     name: "国际",
      //     type: 8
      //   },

      //   {
      //     name: "时尚",
      //     type: 9
      //   },
      //   {
      //     name: "旅游",
      //     type: 11
      //   }
        // {
        //   name: "汽车",
        //   type: 1
        // },

        // {
        //   name: "房产",
        //   type: 1
        // },
        // {
        //   name: "家居",
        //   type: 1
        // },

        // {
        //   name: "推荐",
        //   type: 0
        // },
        // {
        //   name: "视频",
        //   type: 1
        // }
      // ]
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
