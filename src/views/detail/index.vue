<template>
  <div id="detail">
    <detail-banner></detail-banner>
    <detail-title :title_data="title_data"></detail-title>
    <detail-conent></detail-conent>
    <detail-subtitle :subtitle="subtitle"></detail-subtitle>
    <detail-hot :hot_data="hot_data"></detail-hot>
    <detail-hot :hot_data="t_data"></detail-hot>
    <detail-like :like_data="like_data"></detail-like>
    <detail-hot :hot_data="wx_data"></detail-hot>
    <detail-subtitle :subtitle="subhead"></detail-subtitle>
    <detail-like :like_data="y_data"></detail-like>
    <detail-hot :hot_data="hot_data"></detail-hot>
    <detail-like :like_data="f_data"></detail-like>
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
import DetailLike from "../../components/detail-like";
export default {
  name: "",
  components: {
    DetailBanner,
    DetailTitle,
    DetailConent,
    DetailHot,
    DetailSearch,
    DetailSubtitle,
    DetailLike
  },
  data() {
    return {
      subtitle: {
        title: "热门推荐"
      },
      subhead: {
        title: "猜你喜欢"
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
      },
      t_data: {
        name: "96：0全票通过，特朗普再获胜利，民众一片欢呼：终于有救了",
        img_1:
          "http://p1.pstatp.com/list/pgc-image/dd3b2c3d7d8a4585bf8e67ce8f88af0f",
        img_2:
          "http://p1.pstatp.com/list/pgc-image/ce60e8cbddf045429321378cf0fc2ac4",
        img_3:
          "http://p3.pstatp.com/list/pgc-image/1b1b9ad58d5b4c37be86b1393324a2fa",
        from: "昆仑基地",
        comment: 2
      },
      wx_data: {
        name: "微信也会泄露隐私？这4个功能如果不关闭，你可能会被“监视”",
        img_1:
          "http://p1.pstatp.com/list/pgc-image/4f50d7a217e749a3a1de20cd275e9ff2",
        img_2:
          "http://p3.pstatp.com/list/pgc-image/ff3f258bc12a43939869b6489c656c23",
        img_3:
          "http://p3.pstatp.com/list/pgc-image/e20a79701e6a46cfa5211deb33b26d7d",
        from: "国产大番薯",
        comment: ""
      },
      like_data: {
        name: "美国科学家终于还武汉清白，说出了病毒来源",
        img:
          "http://p9.pstatp.com/list/dfic-imagehandler/56500326-3492-41ff-b4d2-da285ec27e6e",
        from: "焱书敏",
        comment: 589
      },
      y_data: {
        name: "疫情下的常熟方塔街",
        img:
          "http://p1.pstatp.com/list/tos-cn-i-0000/f40ee646140f4ea7b805aea62614e22c",
        from: "中了个任5",
        comment: 16
      },
      f_data: {
        name: "北美航司再砍一轮！美联航UA大规模砍掉5月中国航班！",
        img:
          "http://p1.pstatp.com/list/dfic-imagehandler/a164ad36-118d-40cf-bc26-39c5117a2f6f",
        from: "北美票帝",
        comment: 3
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
