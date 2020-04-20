<template>
  <div class="news-text">
    <div class="news_title" v-for="(item,index) of news_text_data" :key="index">
      <h3>{{item.title}}</h3>
      <div class="abstrcat">
        <i>置顶</i>
        <span>{{item.from}}</span>
        <span>评论  {{item.comment}}</span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news-text",
  props: {
    news_text_data: {
      type: Array,
      default: []
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style  scoped>
.news-text {
  width: 100%;
  padding: 15px 15px;
  border-bottom: 1px solid #f4f5f6;
}
h3 {
  font-size: 17px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
}
.abstrcat{
  margin-top: 5px;
}
i {
  font-size: 9px;
  padding: 1px  2px;
  border: 1px solid rgba(248, 89, 89, 0.5) ;
  color: #f85959;
  border-radius: 5px;
  margin-right: 10px;
}
span{
  font-size: 10px;
  color: #999;
  margin: 0 4px;

}
</style>
