<template>
  <div id="detail">
    <detail-banner></detail-banner>
    <detail-title :title_data='title_data'></detail-title>
    <detail-conent></detail-conent>
    <detail-hot></detail-hot>
  </div>
</template>
<script>
import DetailBanner from "../../components/detail-banner";
import DetailTitle from "../../components/detail-title";
import DetailConent from "../../components/detail-conent";
import DetailHot from "../../components/detail-hot";
export default {
  name: "",
  components: {
    DetailBanner,
    DetailTitle,
    DetailConent,
    DetailHot
  },
  data() {
    return {
        title_data:{
            title:'张文宏：上班开会和关系最差的人坐一起',
            img:'https://p3.pstatp.com/thumb/pgc-image/03f6307ae99745119fa95747f9d9e525',
            from:'新华网客户端',
            time:'6小时前',
            comment:'42',
        }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>

</style>
