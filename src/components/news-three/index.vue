<template>
  <!-- 三张图模块 -->
  <div class="news-three">
    <div class="news_three" v-for="(item,index) of news_three_data" :key="index" @click="go()">
      <h3>{{item.title}}</h3>
      <div class="news_img">
        <img :src='item.img_1' alt />
        <img :src='item.img_2' alt />
        <img :src='item.img_3' alt />
      </div>
      <div class="abstrcat">
        <i v-if="item.type == 0">置顶</i>
        <i v-if="item.type == 1">热</i>
        <span v-if="item.form">{{item.from}}</span>
        <span>评论 {{item.comment}}</span>
        <span span v-if="item.time">{{item.time}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news-three",
  props: {
    news_three_data: {
      type: Array,
      default: []
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    go(){
      this.$router.push('/detail')
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
  width:100%;
}
h3 {
  font-size: 17px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 图片 */
.news_img{
  width: 100%;
  display: flex;
  margin-top: 5px;
}
img{
  width: 33.33%;

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
