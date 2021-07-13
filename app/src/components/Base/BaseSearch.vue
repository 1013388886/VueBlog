<template>
  <div class="Basesearch">
    <i class="el-icon-close" v-show="isClose" @click="SearchClean"></i>
    <el-input
      v-model="value"
      placeholder="请输入内容"
      @click.native.stop="SearchClick"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="SearchEnter"
        @keyup.enter="SearchEnter"
      ></el-button
    ></el-input>
    <ul class="moreValue" v-if="isOpen && moreValueData">
      <li
        v-for="(item, index) in moreValueData"
        :key="index"
        @click="HistorySearch(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import minxin from "@/minxin/method.js";
export default {
  name: "Basesearch",
  components: {},
  mixins: [minxin],
  data() {
    return {
      value: "",
      isOpen: false,
      isClose: false,
      moreValueData: [],
    };
  },
  watch: {
    isOpen(e) {
      if (e == false) {
        window.removeEventListener("click", this.clickListener);
      }
      this.moreValueData =
        JSON.parse(window.localStorage.getItem("search-history")) || false;
    },
  },
  created() {
    this.moreValueData =
      JSON.parse(window.localStorage.getItem("search-history")) || false;
  },
  mounted() {},
  computed: {
    // moreValueData() {
    //   return JSON.parse(window.localStorage.getItem("search-history")) || false;
    // },
  },
  methods: {
    SearchClick() {
      JSON.parse(window.localStorage.getItem("search-history")) || false;
      if (this.moreValueData && this.moreValueData.length > 0) {
        this.isOpen = true;

        window.addEventListener("click", this.clickListener);
      }
    },
    clickListener(e) {
      console.log(e);
      if (e.target.className !== "") {
        this.isOpen = false;
      }
    },
    SearchClose(e) {
      this.isOpen = false;
      console.log(e);
    },
    SearchClean() {
      this.value = "";
      this.isClose = false;
      this.$emit("getArticle", null, null, this.value);
    },
    SearchEnter() {
      this.isOpen = false;
      this.$emit("getArticle", null, null, this.value);
      this.value = "";
      this.isClose = true;
    },
    HistorySearch(item) {
      this.$emit("getArticle", null, null, item);
      this.isClose = true;
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.Basesearch {
  display: flex;
  align-items: center;
  position: relative;
  width: 80%;
  max-width: 900px;
  margin-bottom: 50px;
}
.moreValue {
  box-sizing: border-box;
  position: absolute;
  top: 40px;
  width: calc(100% - 58px);
  margin-top: 2px;
  padding: 10px 0;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #e5e9ef;
  background-color: rgb(255, 255, 255);
}
.moreValue li {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 6px 10px 6px 16px;
  height: 32px;
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.moreValue li:hover {
  cursor: pointer;
  background-color: rgb(231, 228, 228);
}
.el-icon-close {
  position: absolute;
  top: 0;
  left: -25px;
  height: 100%;
  line-height: 40px;
  padding: 0px 5px;
  cursor: pointer;
}
</style>