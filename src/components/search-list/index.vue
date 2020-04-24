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
              <span
                :class="{'num_1':item.num <= 3,'num_2':item.type===2,}"
              >{{item.num}}</span>
              <span class="headline">{{item.name}}</span>
              <i class="new" v-if="item.num <= 3"></i>
              <i class="hot" v-if="item.type === 8"></i>
            </div>
            <div class="list_r">
              <span class="sum">{{item.max}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="more">
        <span>更多热搜</span>
        <img
          src="https://sf1-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/arrow-right-3x.85440730.png"
          width="16px"
          height="16px"
        />
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
.new {
  width: 15px;
  height: 14px;
  display: inline-block;
  background: url(https://s3a.pstatp.com/toutiao/feoffline/search/resource/tt_search_runtime/images/icon_xin_3x.5b4253c7.png)
    no-repeat;
  background-size: cover;
}
.hot {
  width: 15px;
  height: 14px;
  display: inline-block;
  background: url(https://s3a.pstatp.com/toutiao/feoffline/search/resource/tt_search_runtime/images/icon_re_3x.346eff2a.png)
    no-repeat;
  background-size: cover;
}

span.sum {
  font-weight: 400;
  font-size: 12px;
  color: #999;
}
// 排行前三的样式
.num_1 {
  color: #f04142;
}
.num_2 {
  color: #999;
}
// 更多
.more {
  height: 42.6px;
  line-height: 42.6px;
  text-align: center;
}
.more span {
  font-size: 14px;
  color: #000;
}
.more img {
  width: 16px;
  height: 16px;
  margin-left: 2px;
  vertical-align: sub;
}
</style>
