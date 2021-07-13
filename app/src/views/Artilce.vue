<template>
  <div class="article">
    <Search @getArticle="this.getArticle" />
    <ArticleList
      class="ArticleList"
      :articleInfo="articleInfo.info"
      v-loading="isLoading"
      element-loading-text="拼命加载中"
    />
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :page-count="articleTotal"
      :pager-count="size"
      style="margin: 20px 0 0 0"
    >
    </el-pagination>
    <i class="el-icon-edit" @click="toEditor"></i>
  </div>
</template>

<script>
import Search from "@/components/Base/BaseSearch.vue";
import ArticleList from "@/components/Artilce/ArticleList.vue";
export default {
  name: "Artilce",
  data() {
    return {
      articleInfo: [],
      page: 1,
      size: 5,
      tag: "",
      isLoading: true,
      articleTotal: 0,
    };
  },
  components: {
    ArticleList,
    Search,
  },
  created() {
    this.getArticle(this.page, this.size, this.tag);
    this.creatHistory();
  },
  watch: {
    articleInfo(e) {
      this.articleTotal = Math.ceil(e.total / this.size);
    },
  },
  computed: {},
  methods: {
    handleCurrentChange(e) {
      this.page = e;
      this.getArticle();
      window.scrollTo(0, document.body.scrollHeight);
    },
    async getArticle(page, size, tags) {
      // 检测是否有搜索记录，没有则创建，有就不执行
      let result = await this.$http("getArticle", {
        page: page || this.page,
        size: size || this.size,
        tags: tags || this.tag,
      });
      this.articleInfo = [];
      this.isLoading = true;
      let time = setTimeout(() => {
        this.isLoading = false;
        this.articleInfo = result;
        this.addSearchHistory(tags);
        window.clearTimeout(time);
      }, 400);
    },
    toEditor() {
      this.$router.push({ path: "Editor" });
    },
    // 添加搜素历史
    addSearchHistory(newHistoty) {
      if (newHistoty && newHistoty !== "") {
        let winLocalStorage = window.localStorage;
        let newTag = JSON.parse(winLocalStorage.getItem("search-history"));
        newTag.push(newHistoty);
        newTag = JSON.stringify(newTag);
        winLocalStorage.setItem("search-history", newTag);
      }
    },
    //创造搜索历史空数组
    creatHistory() {
      let history = window.localStorage.getItem("search-history");
      if (!history) {
        // let blank = '[]';
        window.localStorage.setItem("search-history", "[]");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.article {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // min-height: 60vh;
  margin: 50px 0 20px 0;

  .ArticleList {
    width: 70%;
    min-width: 500px;
    max-width: 900px;
    min-height: 500px;
  }
  .el-icon-edit {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 30px;
  }
}
</style>