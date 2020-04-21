<template>
  <!-- 导航栏 -->
  <div class="home-nav">
    <div class="home_nav">
      <ul>
        <li v-for="(item,index) of nav_data" :key="index" :class="{frist_nav:item.type == 0}">
          <span>{{item.name}}</span>
        </li>
      </ul>
      <div class="nav_icon">
        <i></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home-nav",
  props: {
    nav_data: {
      type: Array,
      default: []
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
<style scoped>
/* <!-- 导航栏 --> */
.home-nav {
  position: fixed;
  top: 45px;
  left: 0;
  width: 100%;
  height: 37px;
  background-color: #f4f5f6;
}
.home_nav {
  position: relative;
}
ul {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 37px;
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 5px;
}
ul::-webkit-scrollbar {
  display: none;
}

ul li {
  display: inline-block;
  padding: 0 15px;
}
ul li span {
  color: #505050;
  line-height: 37px;
  font-size: 16px;
  font-weight: 500;
}
/* 字体样式 */
li.frist_nav span {
  color: #f85959;
}
/* 右边添加 */
.nav_icon {
  width: 50px;
  height: 37px;
  background-color: #f4f5f6;
  position: absolute;
  right: -1px;
  top: 0px;
}
.nav_icon i {
  width: 51px;
  position: relative;
}
i::after {
  content: "";
  display: inline-block;
  height: 17px;
  width: 1px;
  background-color: #f85959;
  position: absolute;
  left: 26px;
  top: 10px;
}
i::before {
  content: "";
  display: inline-block;
  height: 17px;
  width: 1px;
  background-color: #f85959;
  position: absolute;
  left: 26px;
  top: 10px;
  transform: rotate(90deg);
}
</style>
