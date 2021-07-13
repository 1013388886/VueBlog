<template>
  <el-card class="box-card">
    <div class="Commnet" v-if="HaveComment">
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
        <li
          v-for="(item, index) in list"
          class="infinite-list-item"
          :key="index"
        >
          <p>
            {{ item.username }} :<span>{{ item.comment }}</span>
          </p>
          <span>{{formtTime(item.time)}}</span>
        </li>
      </ul>
    </div>
    <BaseError v-else />
  </el-card>
</template>

<script>
import BaseError from "@/components/Base/BaseError.vue";
export default {
  name: "Commnet",
  data() {
    return {
      list: [],
      count: 0,
      loading:false,
      pageSize:5,
      pageNmb:1
    };
  },
  components: { BaseError },
  created() {
    this.getComment();
  },
  computed: {
    HaveComment() {
      return this.list.length == 0 ? false : true;
    },
  },
  mounted() {},
  methods: {
    getComment() {
      let _id = this.$route.query.id;
      let pageSize = this.pageSize
      let pageNmb = this.pageNmb
      this.$http("getComment", {_id,pageSize,pageNmb}).then((result) => {
        this.list = this.list.concat(result.result)
        this.pageNmb++
      });
    },
    load() {
      this.count+2
      this.loading = true
      this.getComment(this.list.time)
    },
    formtTime(data){
     
      return this.getData(data)
    }
  },
};
</script>

<style lang="scss" scoped>
.Commnet {
  width: 100%;
  // height: 300px;
  overflow: hidden;
  overflow-y: auto;
  background-color: #fff;
  .infinite-list {
   height: 100%;
  overflow: hidden;
  overflow-y: auto;
    li {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      font-size: 18px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);

      p{
        font-weight: 600;
      }
    }
    span {
      padding-left: 20px;
      font-weight: normal;
    }
  }
}
</style>