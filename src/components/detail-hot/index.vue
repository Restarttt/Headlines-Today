<template>
  <div class="detail-hot">
    <div class="detail_hot">
      <h2>{{hot_data.name}}</h2>
      <div class="hot_img">
        <img :src="hot_data.img_1" alt />
        <img :src="hot_data.img_1" />
        <img :src="hot_data.img_1" />
      </div>
      <div class="hot_info">
        <span>打开APP</span>
        <span>{{hot_data.from}}</span>
        <span>{{hot_data.comment}}条评论</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail-hot",
  props: {
    hot_data: {
      type: Object,
      default: {}
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
.detail-hot {
  width: 100%;
}
// 小标题
.title {
  position: relative;
}
.title span {
  color: #000;
  font-weight: 600;
  font-size: 15px;
}
.title span::before {
  content: "";
  display: inline-block;
  height: 18px;
  width: 4px;
  background-color: #f85959;
  margin-right: 15px;
  line-height: 22.8px;
  vertical-align: sub;
  border-radius: 1px;
}
// 内容
.detail_hot {
  padding: 10px 20px;
}
h2 {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}
// 三张图片
.hot_img {
  width: 100%;
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
}
img {
  width: 32.666%;
}
// 底部
.hot_info {
  margin-top: 8px;
}
.hot_info span:first-child {
  color: #f85959;
}
.hot_info span {
  font-size: 11px;
  color: #999;
  margin-right: 10px;
}
</style>
