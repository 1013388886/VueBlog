<template>
  <div class="head">
    <BaseNav />
    <div class="title animate__animated animate__fadeInDown">
      <h1>王鑫的博客</h1>
      <p>从前从前有个人爱你很久</p>
    </div>
    <Login />
  </div>
</template>

<script>
import BaseNav from '@/components/Base/BaseNav.vue'
export default {
  name: "Head",
  data() {
    return {};
  },
  components:{
    BaseNav
  },
  computed: {
    imgUrl() {
      return "assets/head/cover";
    },
  },
};
</script>
<style lang="less" scoped>
.head {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/img/1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .title {
    text-align: center;
    color: #fff;
    user-select: none;
    cursor: pointer;
    h1{
      margin-bottom: 10px;
    }
    p{
      font-size: 12px;
    }
  }
}
</style>