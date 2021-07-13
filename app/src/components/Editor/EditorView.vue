<template>
  <div class="Editorview" v-html="Editorview"></div>
</template>

<script>
export default {
  name: "Editorview",
  props: ["Editorview"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.Editorview{
    overflow: hidden;
    padding:50px
}
</style>