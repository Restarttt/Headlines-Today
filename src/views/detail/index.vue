<template>
  <div id="detail">
    <detail-banner></detail-banner>
    <detail-title :title_data="title_data"></detail-title>
    <detail-conent></detail-conent>
    <detail-subtitle :subtitle='subtitle'></detail-subtitle>
    <detail-hot :hot_data="hot_data"></detail-hot>
    <detail-search></detail-search>
    <detail-banner></detail-banner>
  </div>
</template>
<script>
import DetailBanner from "../../components/detail-banner";
import DetailTitle from "../../components/detail-title";
import DetailConent from "../../components/detail-conent";
import DetailHot from "../../components/detail-hot";
import DetailSearch from "../../components/detail-search";
import DetailSubtitle from "../../components/detial-subtitle";
export default {
  name: "",
  components: {
    DetailBanner,
    DetailTitle,
    DetailConent,
    DetailHot,
    DetailSearch,
    DetailSubtitle
  },
  data() {
    return {
      subtitle: {
        title: "热门推荐"
      },
      title_data: {
        title: "张文宏：上班开会和关系最差的人坐一起",
        img:
          "https://p3.pstatp.com/thumb/pgc-image/03f6307ae99745119fa95747f9d9e525",
        from: "新华网客户端",
        time: "6小时前",
        comment: "42"
      },
      hot_data: {
        name: "钟南山院士告诫大家：这6种食物尽量少吃，很多家庭日日不离口",
        img_1:
          "http://p1.pstatp.com/list/pgc-image/d27e30fa03fc415585e42f893bc6b3d1",
        img_2:
          "http://p3.pstatp.com/list/pgc-image/dd68c1299c884020b43ac402288782ab",
        img_3:
          "http://p3.pstatp.com/list/pgc-image/56b3120564624fbcbf6a61b3c9d4a1df",
        from: "好看电影极速版",
        comment: 31
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
