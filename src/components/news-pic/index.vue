<template>
  <!-- 右图模块 -->
  <div class="news-pic">
    <div class="news_pic" @click="go()">
      <div class="news_l">
        <h3>{{news_pic_data.name}}</h3>
        <div class="abstrcat">
          <i v-if="news_pic_data.type == 0">置顶</i>
          <i v-if="news_pic_data.type == 1">热</i>
          <span v-if="news_pic_data.autor">{{news_pic_data.author}}</span>
          <span>评论 {{news_pic_data.comment}}</span>
          <span v-if="news_pic_data.time">{{news_pic_data.time}}</span>
        </div>
      </div>
      <div class="news_r">
        <img :src="news_pic_data.img1" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news-pic",
  props: {
    news_pic_data: {
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
/* 一张图模块 */
.news-pic {
  width: 100%;
  /* margin: 0 15px; */
  border-bottom: 1px solid #f4f5f6;
  padding: 15px 0;
}
.news_pic {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
/* 左边 */
.news_l {
  margin-top: 5px;
  width: 62%;
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
/* 右图 */
.news_r {
  width: 35%;
  display: inline-block;
}
</style>
