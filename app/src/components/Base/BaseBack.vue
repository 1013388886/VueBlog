<template>
  <div class="Baseback">
    <el-page-header @back="goBack" />
  </div>
</template>

<script>
export default {
  name: "Baseback",

  components: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {
      goBack(){
        this.$router.back()
      }
  },
};
</script>

<style lang="scss" scoped>
</style>