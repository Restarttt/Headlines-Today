<template>
  <!-- 三张图模块 -->
  <div class="news-three">
    <div class="news_three"    @click="go()">
      <h3>{{news_three_data.name}}</h3>
      <div class="news_img">
        <img :src="news_three_data.img1" alt />
        <img :src="news_three_data.img2" alt />
        <img :src="news_three_data.img3" alt />
      </div>
      <div class="abstrcat">
        <i v-if="news_three_data.type == 0">置顶</i>
        <i v-if="news_three_data.type == 1">热</i>
        <span v-if="news_three_data.author">{{news_three_data.author}}</span>
        <span>评论 {{news_three_data.comment}}</span>
        <span span v-if="news_three_data.time">{{news_three_data.time}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news-three",
  props: {
    news_three_data: {
      type: Object,
      default: {}
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    go() {
      this.$router.push("/detail");
    }
  }
};
</script>
<style  scoped>
/* <!-- 三张图模块 --> */
.news-three {
  width: 100%;
  /* margin: 0 15px; */
  border-bottom: 1px solid #f4f5f6;
  padding: 15px 0;
}
.news_three {
  width: 100%;
}
h3 {
  font-size: 17px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 图片 */
.news_img {
  width: 100%;
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
}
img {
  width: 32.666%;
}
.abstrcat {
  margin-top: 5px;
}
i {
  font-size: 9px;
  padding: 0 2px;
  border: 1px solid rgba(248, 89, 89, 0.5);
  color: #f85959;
  border-radius: 3px;
  margin-right: 5px;
  font-weight: 500;
}
span {
  font-size: 10px;
  color: #999;
  margin: 0 4px;
}
</style>
