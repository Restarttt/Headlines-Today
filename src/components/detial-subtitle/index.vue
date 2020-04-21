<template>
  <div class="subtitle">
    <div class="title">
      <span>{{subtitle.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail-subtitle",
  props: {
      subtitle:{
          type:Object,
          default:{}
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
.title {
  position: relative;
  margin:  20px 0 0 0;
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
</style>
