<template>
  <!-- 搜索部分 -->
  <div class="search">
    <search-logo></search-logo>
    <search-box></search-box>
    <search-list :list_data="search_list_data"></search-list>
  </div>
</template>
<script>
import SearchLogo from "../../components/search-logo";
import SearchBox from "../../components/search-box";
import SearchList from "../../components/search-list";
export default {
  name: "search",
  components: {
    SearchLogo,
    SearchBox,
    SearchList
  },
  data() {
    return {
      search_list_data: [
        {
          num: 1,
          name: "印度民众围攻医护",
          max: "443.9万",
          type: 1
        },
        {
          num: 2,
          name: "全国增11例确诊病例",
          max: "423.0万",
          type: 1
        },
        {
          num: 3,
          name: "高福谈人传人现象",
          max: "403.0万",
          type: 3
        },
        {
          num: 4,
          name: "哈尔滨第二医院停诊",
          max: "326.6万",
          type: 2
        },
        {
          num: 5,
          name: "张国伟用脚扣篮",
          max: "431.9万",
          type: 2
        },
        {
          num: 6,
          name: "缅甸发生武装冲突",
          max: "433.0万",
          type: 8
        },
        {
          num: 7,
          name: "李国庆爆新东方猛料",
          max: "380.3万",
          type: 2
        },
        {
          num: 8,
          name: "傅园慧无缘奥运集训",
          max: "333.6万",
          type: 2
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.search {
  padding: 0 15px;
}
</style>
