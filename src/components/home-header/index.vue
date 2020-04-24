<template>
  <!-- 顶部今日头条 -->
  <div class="home-header">
    <div class="home_h">
      <div class="messages" @click="on()"></div>
      <div class="pop-up" v-show="pop">
        <div class="pop_up">
          <div class="fork" @click="del()"></div>
          <div class="pop_img"></div>
          <p>已加载好您感兴趣的头条</p>
          <div class="go_on">
            <span>立即打开</span>
          </div>
        </div>
      </div>
      <div class="logo_update">
        <a href>
          <i class="logo"></i>
        </a>
        <i class="update"></i>
      </div>
      <!-- <router-link to="/search"> -->
      <div class="search_glass" @click="go()"></div>
      <!-- </router-link> 
      <router-view />-->
    </div>
  </div>
</template>
<script>
export default {
  name: "home-header",
  props: {},
  components: {},
  data() {
    return {
      pop: false
    };
  },
  computed: {},
  methods: {
    go() {
      this.$router.push("/search");
    },
    on() {
      this.pop = true;
    },
    del(){
      this.pop = false
    }
  }
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
  position: relative;
}
.messages::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 10;
  right: 5px;
  top: 2px;
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
.search_glass {
  width: 25px;
  height: 25px;
  background: url(https://s3.pstatp.com/growth/mobile_list/image/feed_ic_search_normal@3x_0f198e56.png)
    no-repeat;
  background-size: 24px;
}

/* 弹框 */
.pop-up {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000000;
  background: rgba(0, 0, 0, 0.5);
}
.pop_up {
  width: 270px;
  height: 225px;
  margin: 55% auto;
  border-radius: 5px;
  background: #fff;
  position: relative;
}
.fork {
  width: 21px;
  height: 19px;
  position: absolute;
  right: 7px;
  background: url(https://s3.pstatp.com/growth/mobile_list/image/popup_banner_close_e6f62910.png)
    no-repeat;
  background-size: 17px;
  text-align: center;
  top: 9px;
}
.pop_img {
  width: 165px;
  height: 121px;
  background: url(https://s3a.pstatp.com/growth/mobile_list/image/popup_banner_6006ac97.png)
    no-repeat;
  background-size: cover;
  margin: 10px auto;
}
.pop_up p {
  color: #a5a5a5;
  font-size: 17px;
  text-align: center;
  font-weight: 500;
}
.go_on {
  margin: 20px auto;
  width: 80%;
  height: 40px;
  background-color: #f0221c;
  text-align: center;
  border-radius: 5px;
}
.go_on span {
  color: #fff;
  text-shadow: 0px 1px 1px #f0221c;
  font-size: 20px;

  line-height: 40px;
}
</style>
