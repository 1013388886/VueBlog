<template>
  <div class="Commnetcommit">
    <el-card class="box-card">
      <div class="Commnetcommit-Textarea">
        <textarea
          ref="textarea"
          class="Commnetcommit--input"
          v-model="commentVal"
          name="comment"
          autofocus
          rows="5"
          placeholder="评论一下吧"
          @click="openInput"
        ></textarea>
        <el-button type="primary" @click="submitComment">提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Commnetcommit",
  data() {
    return {
      commentVal: "",
    };
  },
  mounted() {},
  methods: {
    submitComment() {
      this.$nextTick(function () {
        this.commentVal = "";
      });
      let isLogin = this.$store.state.isLogin;
      if (!isLogin) {
        this.$message({
          title: "通知",
          message: `请先登录`,
          type: "error",
        });
        return
      }
      let articleId = this.$route.query;
      let articleMain = this.commentVal;
      let time = Date.parse(new Date());
      let data = {
        articleId,
        articleMain,
        time,
      };
      this.$http("publishComment", data);
      this.$emit("reLoad");
    },
    openInput() {
      let isLogin = this.$store.state.isLogin;
      if (isLogin) return;
      this.$bus.$emit("openInput", 1);
    },
  },
};
</script>

<style lang="less" scoped>
.Commnetcommit {
  width: 100%;
  .Commnetcommit-Textarea {
    display: flex;
    flex-direction: column;
    .Commnetcommit--input {
      box-sizing: border-box;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      border: 1px solid rgb(236, 230, 230);
      padding: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>