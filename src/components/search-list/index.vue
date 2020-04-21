<template>
  <div class="search-list">
    <!-- 最上面的文字 -->
    <div class="list_title">
      <div class="title_l">
        <img
          src="https://lf1-ttcdn-tos.pstatp.com/obj/card-system/26-hotlist/dist_browser/images/img_title-3x.f09da03a.png"
          alt
          width="61px"
          height="16px"
        />
      </div>
      <span class="title">每分钟更新一次</span>
    </div>
    <!-- 新闻列表 -->
    <div class="list_news">
      <div class="list">
        <ul>
          <li v-for="(item,index) of list_data" :key="index">
            <div class="list_l">
              <span class="num">{{item.num}}</span>
              <span class="headline">{{item.name}}</span>
              <i v-if="item.num <= 3"></i>
            </div>
            <div class="list_r">
              <span class="sum">{{item.max}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="more">
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    list_data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
// 顶部
.search-list {
  margin-top: 50px;
}
.list_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title_l {
  width: 61px;
  height: 16px;
}
.title {
  color: #999;
  font-weight: 500;
}
// 新闻列表
.list_news {
  margin-top: 20px;
  width: 100%;
}
li {
  border-bottom: 1px solid #f3f4f5;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  font-size: 16px;
  font-weight: 500;
}
span.headline {
  padding: 0 15px;
}
i{
  width: 15px;
  height: 14px;
  display: inline-block;
  background: url(https://s3a.pstatp.com/toutiao/feoffline/search/resource/tt_search_runtime/images/icon_xin_3x.5b4253c7.png) no-repeat;
  background-size: cover;
}
</style>
