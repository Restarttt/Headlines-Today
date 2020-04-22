<template>
  <div class="detail-like">
    <div class="detail_like">
      <div class="like_l">
        <img :src="like_data.img" alt />
      </div>
      <div class="like_r">
        <h2>{{like_data.name}}</h2>
        <div class="hot_info">
          <span>打开APP</span>
          <span>{{like_data.from}}</span>
          <span v-if="like_data.comment">{{like_data.comment}}条评论</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    like_data: {
      type: Object,
      default: {}
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
<style lang="less" scoped>
.detail-like {
  width: 100%;
  padding: 10px 20px;
}
.detail_like {
  display: flex;
}
// 左边
.like_l {
  width: 38%;
  height: 22vw;
}
// 右边
.like_r {
    width: 68%;
  margin-left: 15px;
}
h2 {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
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
