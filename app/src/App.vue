<template>
  <div id="app">
    <router-view v-if="isLoad" />
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      isLoad:true
    };
  },

  mounted() {
    
  },

  methods: {
  },
};
</script>
<style>
</style>
