<template>
  <div class="ArticleList"  >
    <el-card class="box-card" v-for="(item,index) in articleInfo" :key="index" shadow="hover" >
      <router-link  :to="{ path: 'article', query: { id: item._id } }">
        <ArticleItem :item-data='item' />
      </router-link>
    </el-card>
  </div>
</template>

<script>
import ArticleItem from "@/components/Artilce/ArticleItem.vue";
export default {
  name: "ArticleList",
  props:['articleInfo'],
  data() {
    return {
      
    };
  },
  components: {
    ArticleItem,
  },

  methods: {

  },
};
</script>

<style lang="less" scoped>
.ArticleList {
  border-top: 1px solid #eee;
  border-bottom: 2px solid #eee;
  padding: 20px 0;
  .box-card {
    border: none;
    margin: 10px 0;
    cursor: pointer;
  

  }
}
</style>