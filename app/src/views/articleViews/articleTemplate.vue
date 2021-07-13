<template>
  <div class="articleTemplate">
    <div class="image"></div>
    <div class="articleMain">
      <header class="animate__animated animate__fadeIn">
        <Back/>
        <h1>{{ articleInfo.title }}</h1>
        <p class="article-time">{{ time }}</p>
      </header>
      <main>
        <div
          class="article-main animate__animated animate__fadeIn"
          v-html="articleInfo.article"
        ></div>
      </main>
      <footer>
        <div class="Commnetcommit animate__animated animate__fadeIn">
          <Commnetcommit @reLoad="reLoad" />
        </div>
        <div class="comment animate__animated animate__fadeIn">
          <h2>评论区</h2>
          <Commnet v-if="isLoadComment" />
        </div>
      </footer>
    </div>
    <Login />
  </div>
</template>

<script>
import Commnetcommit from "@/components/Comment/CommnetCommit.vue";
import Commnet from "@/components/Comment/Commnet.vue";
import minxin from "@/minxin/method.js";
export default {
  name: "articleTemplate",
  mixins: [minxin],
  data() {
    return {
      isLoadComment: true,
      articleInfo: {},
    };
  },
  components: { Commnet, Commnetcommit },
  created() {
    this.getArticleID();
  },
  computed: {
    url() {
      return require("@/assets/img/cover.jpg");
    },
    time() {
      return this.getData(this.articleInfo.time);
    },
  },
  methods: {
    getArticleID() {
      let id = this.$route.query;
      this.$http("getArticleID", id)
        .then((result) => {
          if (result.states === "200") {
            this.articleInfo = result.info;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reLoad() {
      console.log("reLoad");
      this.isLoadComment = false;
      this.$nextTick(function () {
        this.isLoadComment = true;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.articleTemplate {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
  background-color: #f7f7f7;

  .image {
    width: 100%;
    height: 30vh;
    background-image: url("../../assets/img/articleTemplate.jpg");
    background-size: cover;
    z-index: 1;
  }
  #header-decor {
    position: relative;
    top: 1px;
    // top: 0;
    width: 50%;
    height: 150px;
    z-index: 2;
  }
  .articleMain {
    width: 70%;
    min-width: 670px;
    color: #555;
    z-index: 2;
    header {
      padding: 20px 0;
      text-align: center;
      p {
        padding-top: 5px;
      }
      h1 {
        font-weight: 600;
      }
    }
    .article-main {
      box-sizing: border-box;
      width: 100%;
      padding: 50px;
      // border-radius: 15px;
      background-color: #fff;
      p {
        padding: 10px;
      }
    }
    footer {
      .Commnetcommit {
        width: 100%;
        margin-top: 50px;
      }
      .comment {
        padding: 20px 0;
      }
      h2 {
        padding: 20px 0;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}
</style>