<template>
  <div class="channel">
    <!-- 顶部 -->
    <div class="channel-top">
      <div class="channel_top">
        <span>
          <a>频道管理</a>
        </span>
        <span class="arrow" @click="go()"></span>
      </div>
    </div>
    <div class="page">
      <!-- 删除频道 -->
      <div class="channel-delete">
        <p>{{data.title}}</p>
        <div class="keyword">
          <ul>
            <li
              v-for="(item,index) of data.list"
              :key="index"
              :class="{frist_word:index===0}"
              @click="del(index)"
            >
              <a>{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 增加频道 -->
      <div class="channel-delete">
        <p>{{add.title}}</p>
        <div class="keyword">
          <ul>
            <li
              v-for="(item,index) of add.list"
              :key="index"
              :class="{frist_word:index===0}"
              @click="append(index,item.name)"
            >
              <a>{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import AJAX from "../../config/ajax";
export default {
  name: "",
  data() {
    return {
      all: [],
      data: {
        title: "点击删除以下频道",
        list: [
          {
            name: "推荐"
          },
          {
            name: "热点",
            type: 1
          },
          {
            name: "社会",
            type: 2
          },
          {
            name: "娱乐"
          },
          {
            name: "科技",
            type: 4
          },
          {
            name: "军事",
            type: 7
          },
          {
            name: "时尚",
            type: 9
          },
          {
            name: "养生"
          },
          {
            name: "旅游",
            type: 11
          },
          {
            name: "汽车"
          }
        ]
      },
      add: {
        title: "点击添加以下频道",
        list: [
          {
            name: "体育",
            type: 5
          },
          {
            name: "财经",
            type: 6
          },
          {
            name: "游戏"
          },
          {
            name: "历史"
          },
          {
            name: "探索"
          },
          {
            name: "美食"
          },
          {
            name: "精选",
            type: 0
          },
          {
            name: "故事"
          },
          {
            name: "美文"
          },
          {
            name: "国际"
          }
        ]
      }
    };
  },
  computed: {},
  methods: {
    go() {
      this.$router.push("/");
    },
    del(index) {
      if (index == 0) {
        return;
      }
      this.add.list.push(this.data.list.splice(index, 1)[0]);
      this.$store.commit("NAME", this.data.list);
      console.log(this.data.list);
    },
    append(index, name) {
      console.log(index), console.log(name);
      this.data.list.push(this.add.list.splice(index, 1)[0]);
      console.log(this.add.list.splice(index, 1));
    }
  }
};
</script>
<style lang="less" scoped>
.channel {
  background-color: #f8f8f8;
}
// 顶部
.channel-top {
  width: 100%;
  height: 50px;
  background-color: #d43d3d;
  text-align: center;
  line-height: 50px;
  position: relative;
}
span a {
  color: #fff;
  font-size: 16px;
  font-weight: 900;
}
.arrow {
  position: absolute;
  content: "";
  display: inline-block;
  width: 22px;
  height: 25px;
  background: url(https://s3a.pstatp.com/growth/wap_misc/image/header_back_86a065fc5fe6605cd32e26fe9a2c9f37.png)
    no-repeat;
  background-size: cover;
  left: 12px;
  top: 25%;
}
// 删除频道
// /   1em===16px
p {
  color: #666;
  font-size: 12px;
  line-height: 2em;
  padding: 0 10px;
  font-weight: 500;
}
.keyword {
  width: 100%;
  padding: 5px 10px;
}
ul li {
  display: inline-block;
  width: 25%;
  margin-bottom: 10px;
}
ul li a {
  display: block;
  color: #131313;
  padding: 8px 0;
  font-size: 16px;
  margin-right: 10px;
  text-align: center;
  border: 1px solid #ccc;
  font-weight: 500;
}
.frist_word {
  background-color: #f0f0f0;
}
</style>
