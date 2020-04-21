<template>
  <div class="search-box">
    <div class="box">
      <input type="text" value="搜你想看" />
      <i></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
input {
  padding: 0 20px;
  font-size: 18px;
  color: #9b9b9b;
  font-weight: 500;
  line-height: 51px;
}
.box {
  margin-top: 25px;
  border: 1px solid #333;
  width: 100%;
  height: 52px;
  position: relative;
}
i {
  position: absolute;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(../../assets/glass.png) no-repeat;
  background-size: cover;
  right: 4%;
  top: 26%;
}
</style>
