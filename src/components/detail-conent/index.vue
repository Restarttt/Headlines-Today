<template>
  <div class="detail-conent">
    <div class="detail_conent">
      <p>{{conent_data.conent_1}}</p>
      <p>{{conent_data.conent_2}}</p>
      <p>{{conent_data.conent_3}}</p>
      <p>{{conent_data.conent_4}}</p>
      <div class="conent_img">
        <img :src="conent_data.img" alt />
        <div class="more">
          <span>打开今日头条，查看更多图片</span>
        </div>
      </div>
      <div class="text">
        <p>{{conent_data.conent_5}}</p>
        <div class="down"></div>
      </div>
      <div class="app">
        <span>打开APP阅读全文</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      conent_data: {
        conent_1: "近日，全国各地都在有序复工复产",
        conent_2: "复工后，遇到聚众式开会",
        conent_3: "我们该如何进行自我防护？",
        conent_4: "张文宏医生又发话了",
        conent_5:
          "近日，上海新冠肺炎医疗救治专家组组长、复旦大学附属华山医院感染科主任张文宏教授与在欧中资企业、华人华侨、留学生进行交流，答疑释惑。",
        img: "https://p3.pstatp.com/large/pgc-image/RwT8CY1E5kbFe8"
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.detail-conent {
  width: 100%;
  padding: 0 20px;
}
.detail_conent p {
  font-size: 18px;
  padding: 10px 0;
  font-weight: 500;
}
// 打开头条
.more {
  height: 42px;
  border: 1px solid rgba(228, 228, 228, 0.6);
  background-color: #fbfbfb;
  text-align: center;
  line-height: 42px;
  position: relative;
  top: -5px;
}

.more span::after {
  position: absolute;
  top: 13px;
  display: inline-block;
  content: "";
  width: 15px;
  height: 15px;
  background: url(https://s1.pstatp.com/growth/mobile_detail/image/image-arrow.HNPrnYXh.png)
    no-repeat;
  background-size: cover;
}
// 箭头
.text {
  position: relative;
  width: 100%;
}
.text p {
  line-height: 30px;
}
.down {
  height: 50px;
  position: absolute;
  bottom: -12px;
  left: 50%;
  animation: unfold-arrow-animation 300ms infinite alternate;
}
.down::after {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(https://s1.pstatp.com/growth/mobile_detail/image/vwap_arrow_down.ky914xBY.png)
    no-repeat;
  background-size: cover;
}
// 打开app
.app {
  background: linear-gradient(to right, #ff0000, #ff5050);
  border-radius: 40px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  margin: 0 auto;
}
.app span {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
}
</style>

