<template>
  <!-- 打标题 -->
  <div class="detail-title">
    <div class="detail_title">
      <h1>{{title_data.title}}</h1>
      <div class="title_from">
        <div class="from_l">
          <img :src="title_data.img" alt />
          <h5>{{title_data.from}}</h5>
          <i></i>
        </div>
        <div class="from_r">
          <span>{{title_data.time}}</span>
          <span class="dot"></span>
          <span>{{title_data.comment}}评论</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    title_data: {
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
// <!-- 打标题 -->
.detail-title {
  padding: 16px 20px 20px;
}
h1 {
  font-size: 23px;
  color: #222222;
  font-weight: 500;
}
.title_from {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// 左边
.from_l {
  display: flex;
  align-items: center;
}
.from_l img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.from_l h5 {
  color: #222;
  font-weight: 600;
  padding: 0 8px;
}

// 右边
.from_r span {
  color: #999999;
  font-size: 12px;
  font-weight: 500;
}
.dot {
  display: inline-block;
  width: 2px;
  height: 2px;
  border-radius: 1px;
  background-color: #999;
  margin: 0 4px;
  vertical-align: middle;
}

// 大v
i {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(https://s1.pstatp.com/growth/mobile_detail/image/v-0.tl0z9x5L.png)
    no-repeat;
  background-size: contain;
}
</style>
