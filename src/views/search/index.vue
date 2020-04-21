<template>
  <div class="search">
      <search-logo></search-logo>
      <search-box></search-box>
      <search-list></search-list>

  </div>
</template>
<script>
import SearchLogo from '../../components/search-logo'
import SearchBox from '../../components/search-box'
import SearchList from '../../components/search-list'
export default {
  name: "search",
  components: {
      SearchLogo,
      SearchBox,
      SearchList


  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
