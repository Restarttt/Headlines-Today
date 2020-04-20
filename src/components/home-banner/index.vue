<template>
  <!-- 固定盒子APP -->
  <div class="home-banner">
    <div class="banner">
      <div class="banner_l"></div>
      <div class="banner_r"></div>
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
  background-color: #fff;
}
.banner {
  display: flex;
  padding: 0 15px;
}
.banner{}
</style>
