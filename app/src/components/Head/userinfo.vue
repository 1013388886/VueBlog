<template>
  <div>
    <el-drawer title="个人信息" :visible.sync="drawer" :direction="direction">
      <div class="drawer-main">
        <div class="drawer-main-box">
          <el-avatar :size="70">
            <img :src="ImgUrl" alt="" />
          </el-avatar>
          <div class="drawer-main-box-basic">
            <p class="drawer-main-box-basic-name">{{ username }}</p>
            <input type="text" v-model="sign" placeholder="请编辑你的签名" />
          </div>
        </div>
        <div class="drawer-main-userList">
          <div class="drawer-main-userList-item">
            <p>发表</p>
            <span>{{ articleNmb }}</span>
          </div>
          <div class="drawer-main-userList-item">
            <p>总点赞数</p>
            <span>{{ articleNmb }}</span>
          </div>
          <div class="drawer-main-userList-item">
            <p>在线天数</p>
            <span>{{ time }}</span>
          </div>
        </div>
        <div class="drawer-main-lastArticle">
          <div class="drawer-main-lastArticle-item">
            <p>最近发表</p>
            <el-timeline>
              <el-timeline-item
                :timestamp="item.time"
                placement="top"
                v-for="(item, index) in lastData"
                :key="index"
              >
                <el-card>
                  <h5>{{ item.title }}</h5>
                  <!-- <p>王小虎 提交于</p> -->
                  <!-- <p>{{item.time}}</p> -->
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import getTime from "@/data/getDate.js";
export default {
  name: "Userinfo",
  components: {},
  data() {
    return {
      direction: "rtl",
      drawer: false,
      sign: "",
      lastData: [],
    };
  },
  created() {},
  watch: {
    drawer(e) {
      if (!e) {
        this.$parent.isShowUserinfo = false;
      }
      if (e) {
        this.$parent.isShowUserinfo = true;
        this.getArticleID();
      }
    },
  },
  methods: {
    async getArticleID() {
      let articleIDs = this.$store.state.userinfo.articleID;
      if (articleIDs) {
        console.log(articleIDs);
        let id = JSON.stringify(articleIDs.slice(0, 4)).trim();
        console.log(id);
        let result = await this.$http("getArticleID", { id });
        result.info.map((e) => {
          e.time = this.getData(e.time);
        });
        this.lastData = result.info;
        this.lastData =  this.lastData.reverse()
      }
    },
  },
  computed: {
    userinfo() {
      return this.$store.state.userinfo;
    },
    userArticleID() {
      return (this.userinfo?.articleID).reverse();
    },
    username() {
      return this.userinfo?.username;
    },
    articleNmb() {
      return this.userinfo?.articleNmb;
    },
    time() {
      return this.$store.state.isLogin ? getTime(this.userinfo?.time) : "";
    },
    ImgUrl() {
      return (
        this.$store.state.token.avater || require("@/assets/img/Avatar.jpg")
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.el-avatar {
  cursor: pointer;
}
.drawer-main {
  box-sizing: border-box;
  padding: 0 20px;
  color: #000;
  cursor: auto;
}
.drawer-main-box {
  display: flex;
  justify-content: center;
}
.drawer-main-box-basic {
  margin-left: 42px;
  text-align: left;
}
.drawer-main-box-basic-name {
  margin: 6px 0 12px 0;
  font-weight: 700;
  line-height: 18px;
  font-size: 18px;
  vertical-align: middle;
}
.drawer-main-box-basic input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #000;
  box-shadow: none;
  font-size: 12px;
}
.drawer-main-box-basic input:focus {
  border: 1px solid #000;
}

.drawer-main-userList {
  display: flex;
  justify-content: center;
  margin: 40px 0 0 0;
}
.drawer-main-userList-item {
  flex: 1;
}
.drawer-main-lastArticle {
  margin: 40px 0;
}
.drawer-main-lastArticle p {
  padding: 20px 0;
  font-size: 18px;
}
</style>