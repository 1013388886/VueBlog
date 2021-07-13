<template>
  <div class="Avatar">
    <div class="user" style="text-align: center">
      <p>{{ username }}</p>
      <div class="block">
        <span>发布: {{ articleNmb }}</span>
        <span>天数: {{ time }} 天</span>
      </div>
      <el-button class="loginOut" @click="loginOut">登出</el-button>
    </div>
  </div>
</template>

<script>
import getTime from "@/data/getDate.js";
export default {
  name: "Avatar",
  data() {
    return {};
  },
  methods: {
    loginOut(){
      this.$store.dispatch('out_login')
    }
  },
  computed: {
    userinfo() {
      return this.$store.state.userinfo;
    },
    username() {
      return this.userinfo?.username;
    },
    articleNmb() {
      return this.userinfo?.articleNmb;
    },
    time() {
      return this.$store.state.isLogin ? getTime(this.userinfo?.time) :"";
    },
  },
};
</script>

<style lang="less" scoped>
.Avatar {
  .user {
    text-align: center;
    border-radius: 50%;

    p {
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 10px;
    }
    .block {
      display: flex;
      justify-content: space-around;
      padding: 20px 0;
      span {
        width: 50%;
        text-align: center;
        &:first-of-type {
          border-right: 1px solid #9999;
        }
      }
    }
    .loginOut {
      width: 100%;
      border: none;
    }
  }
}
</style>