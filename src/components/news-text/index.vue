<template>
  <!-- 文字模块 -->
  <div class="news-text">
    <div class="news_title" @click="go()">
      <h3>{{news_text_data.name}}</h3>
      <div class="abstrcat">
        <i v-if="news_text_data.type == 0">置顶</i>
        <i v-if="news_text_data.type == 1">热</i>
        <span v-if="news_text_data.author">{{news_text_data.author}}</span>
        <span>评论 {{news_text_data.comment}}</span>
        <span v-if="news_text_data.time">{{news_text_data.time}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news-text",
  props: {
    news_text_data: {
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
/* 文字模块 */
.news-text {
  width: 100%;
  /* margin: 0 15px; */
}
.news_title {
  border-bottom: 1px solid #f4f5f6;
  padding: 15px 0;
}
h3 {
  font-size: 17px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
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
