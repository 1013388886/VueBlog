<template>
  <div class="home">
    <header><Head /></header>
    <main><Artilce /></main>
    <footer><About /></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/views/Head.vue";
import About from "@/views/About.vue";
import Artilce from "@/views/Artilce.vue";
import minxin from "@/minxin/method.js";
export default {
  name: "Home",
  data() {
    return {
      HscrollTop: 0,
    };
  },
  mixins: [minxin],
  created() {
    this.login();
    addEventListener("scroll", () => {
      this.HscrollTop = document.documentElement.scrollTop;
    });
  },
  methods: {
    async login() {
      try {
        let token = this.$store.state.token;
        let isLogin = this.$store.state.isLogin;
        if (!token || isLogin) return;
        token = this.ObserverDate(token);
        this.$http("getUserInfo")
          .then((result) => {
            this.$store.dispatch("login", result);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    Head,
    About,
    Artilce,
  },
};
</script>
<style lang="less" scoped>
</style>
