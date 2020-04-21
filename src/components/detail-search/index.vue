<template>
  <div class="detail-search">
    <div class="title">
      <span>{{search_data.title}}</span>
    </div>
    <div class="detail_search">
      <ul>
        <li v-for="(item,index) of search_data.list" :key="index">
          <span>
            {{item.title}}
            <i v-if="item.type === 0"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      search_data: {
        title: "搜索",
        list: [
          {
            title: "李达康书记开会",
            type: 1
          },
          {
            title: "张文宏谈喝粥",
            type: 0
          },
          {
            title: "张文宏再爆金句",
            type: 1
          },
          {
            title: "如何给员工开会",
            type: 0
          },
          {
            title: "李文宏简介",
            type: 1
          },
          {
            title: "华山医院张文宏",
            type: 0
          },
          {
            title: "张文宏公开课",
            type: 1
          },
          {
            title: "张文宏谈留学生回国",
            type: 0
          },
          {
            title: "张文宏",
            type: 1
          },
          {
            title: "张文宏医生经典语录",
            type: 0
          }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.detail-search {
  width: 100%;
  height: 300px;
  margin: 20px 0;
}
// 小标题
.title {
  position: relative;
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
// 关键字
.detail-search {
  width: 100%;
}
// ul {
//   padding: 8px 20px;
// }
ul li {
  display: inline-block;
  width: 50%;
  padding: 10px 0 10px 20px;
}
ul li span {
  font-size: 16px;
  font-weight: 500;
  position: relative;
}
i {
  content: "";
  display: inline-block;
  width: 1px;
  height: 10px;
  background-color: #d8d8d8;
  position: absolute;
  left: -18px;
  top: 5px;
}
</style>
