<template>
  <!-- 固定盒子APP -->
  <div class="home-banner">
    <div class="banner">
      <div class="banner_l">
        <i></i>
        <span>今日头条</span>
      </div>
      <div class="banner_r">
        <span>打开</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home-banner",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style  scoped>
.home-banner {
  width: 100%;
  height: 45px;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #fff;
}
.banner {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
.banner_l i {
  display: inline-block;
  width: 36px;
  height: 36px;
  background: url(https://s3.pstatp.com/growth/fe_sdk/image/banner_toutiao_icon_bce0b302.png)
    no-repeat;
  background-size: 100% 100%;
  line-height: 36px;
  vertical-align: middle;
  margin-right: 10px;
}
span {
  font-weight: 500;
}
/* 右边打开 */
.banner_r {
  width: 23%;
  height: 28px;
  border-radius: 15px;
  background-image: linear-gradient(90deg, red, #ff5050);
  text-align: center;
  line-height: 28px;
}
.banner_r span {
  color: #fff;
}
</style>
