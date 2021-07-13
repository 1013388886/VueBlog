<template>
  <div class="Articleitem" >
    <h3>{{itemData.title}}</h3>
    <span>{{time}}</span>
    <p>{{article}}</p>
  </div>
</template>

<script>
import minxin from "@/minxin/method.js";
export default {
  name: "Articleitem",
  props:['item-data'],
  mixins: [minxin],
  data() {
    return {};
  },
  created(){

  },
  methods: {

  },
   computed: {
    //  文章除去html内容
    article() {
      return this.itemData.article.replace(/<[^<>]+>/g, "").replace(/&nbsp;/gi, "");
    },
    // 时间
    time(){
      return this.itemData.time?this.getData(this.itemData?.time) : '时间发生错误QAQ'
    }
  },
};
</script>

<style lang="less" scoped>
.Articleitem {
  // border-left: 2px solid rgb(74, 185, 236);
  // padding-left: 15px;
  h3 {
    color: #000;
    font-size: 30px;
    &:hover {
      color: #888;
    }
  }
  span{
    padding-left: 5px;
    font-size: 12px;
    color: #000;
  }
  p {
    padding: 0 20px;
    margin: 10px 0 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #888;
    overflow: hidden;
  }
}
</style>