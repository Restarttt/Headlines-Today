<template>
  <!-- 顶部今日头条 -->
  <div class="home-header">
    <div class="home_h">
      <div class="messages"></div>
      <div class="logo_update">
        <a href>
          <i class="logo"></i>
        </a>
        <i class="update"></i>
      </div>
      <div class="search_glass"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home-header",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style scoped>
  /* <!-- 顶部今日头条 --> */
.home-header {
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  background: #d43d3d;
}
.home_h {
  padding: 0 15px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/*  left pic*/
.messages {
  width: 32px;
  height: 25px;
  background: url(https://s3.pstatp.com/growth/mobile_list/image/feed_ic_message_normal@3x_f2ea949f.png)
    no-repeat;
  background-size: contain;
}
/*  center pic*/
.logo_update {
  position: relative;
}
.logo {
  display: inline-block;
  width: 83px;
  height: 20px;
  background: url(https://s3b.pstatp.com/growth/mobile_list/image/wap_logo@3x_581de69e.png)
    no-repeat;
  background-size: contain;
}
/* right pic */
.update {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(https://s3a.pstatp.com/growth/mobile_list/image/titlebar_refresh_small@3x_96fb31e4.png)
    no-repeat;
  background-size: 15px;
  position: absolute;
  right: -25px;
  top: 2px;
}
.search_glass{
 width: 25px;
 height: 25px;
 background: url(https://s3.pstatp.com/growth/mobile_list/image/feed_ic_search_normal@3x_0f198e56.png) no-repeat;
 background-size: 24px;
}
</style>
