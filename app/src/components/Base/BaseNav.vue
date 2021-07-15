<template>
  <div class="baseNav">
    <el-avatar
      slot="reference"
      fit="cover"
      :src="ImgUrl"
      :size="50"
      shape="square"
      style="width: 100%"
      @click.native.stop="openInput"
    />
    <Userinfo ref="userinfo"  />
  </div>
</template>

<script>
// "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
import Userinfo from "@/components/Head/userinfo.vue";
export default {
  name: "BaseNav",
  data() {
    return {
    };
  },
  components: { Userinfo },
  computed: {
    ImgUrl() {
      return (
        this.$store.state.token.avater || require("@/assets/img/Avatar.jpg")
      );
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    openInput() {
      let isLogin = this.$store.state.isLogin;
      if (!isLogin) {
        this.$bus.$emit("openInput", 1);
      }
      if (isLogin) {
        this.$refs.userinfo.drawer = true
      }
    },
  },
};
</script>

<style lang="less" scoped>
.baseNav {
  position: absolute;
  left: 100px;
  top: 40px;
  width: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
}
</style>