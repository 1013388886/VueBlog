<template>
  <div class="baseNav" @click="openInput">
    <el-popover
      placement="top"
      width="200"
      trigger="hover"
      :disabled="!isLogin"
    >
      <Avatar />
      <el-avatar
        slot="reference"
        fit="cover"
        :src="ImgUrl"
        :size="50"
        shape="square"
        style="width: 100%"
      >
      </el-avatar>
    </el-popover>
  </div>
</template>

<script>
import Avatar from "@/views/Avatar.vue";
// "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
export default {
  name: "BaseNav",
  data() {
    return {};
  },
  components: {
    Avatar,
  },
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
      if (isLogin) return;
      this.$bus.$emit("openInput", 1);
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