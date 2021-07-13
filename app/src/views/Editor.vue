<template>
  <div class="Editor animate__animated animate__fadeIn">
    <el-row align="bottom" class="blog-menu--edit">
      <!-- 标题 -->
      <el-col>
        <h3>标题：</h3>
        <el-input v-model="Modeldate.title" placeholder="请输入标题" />
      </el-col>
      <!-- 内容 -->
      <el-col>
        <h3>内容：</h3>
        <div id="blog-editor-textarea"></div>
      </el-col>
      <div class="blog-tags">
        <el-checkbox-group v-model="Modeldate.tag">
          <el-checkbox-button label="技术"></el-checkbox-button>
          <el-checkbox-button label="日记"></el-checkbox-button>
          <el-checkbox-button label="日志"></el-checkbox-button>
        </el-checkbox-group>
      </div>
      <!-- 提交 -->
      <el-col>
        <el-button
          class="blog-menu-edit-commit"
          type="primary"
          icon="el-icon-cloudy"
          @click="commit"
        >
          提交
        </el-button>
      </el-col>

      <col />
    </el-row>
    <EditorView class="EditorView" :Editorview="Modeldate.article" />
    <i class="el-icon-back" @click="routerBack"></i>
  </div>
</template>

<script>
import EditorView from "@/components/Editor/EditorView.vue";
import wangEditor from "wangeditor";
import hljs from 'highlight.js'
import minxin from "@/minxin/method.js";
export default {
  name: "Editor",
  mixins: [minxin],
  data() {
    return {
      viewHtml: "",
      Modeldate: {
        title: "",
        article: "",
        tag: [],
        time:Number
      },
      scrolltop: 0,
    };
  },
  components: { EditorView },
  methods: {
    //提交
    async commit() {
      if (this.Modeldate.articl !== "" && this.Modeldate.title !== "") {
        //发表成功
        this.Modeldate.time = Date.parse(new Date())
        let data = this.Modeldate;
        this.$http("commitEdit", data).then((result) => {
          if (result.states === "200") {
            this.$message({
              showClose: true,
              message: "发表成功",
              type: "success",
            });
            this.clean();
          } else {
            this.$message({
              showClose: true,
              message: "发表成功",
              type: "error",
            });
          }
        });
      } else {
        //发表失败
        this.$message({
          title: "发表失败",
          message: "标题或内容不能为空",
          type: "warning",
        });
      }
    },
    clean() {
      this.Modeldate = {
        title: "",
        article: "",
        tag: [],
      };
      this.editor.txt.clear();
    },
    editorCreate() {
      const editor = new wangEditor("#blog-editor-textarea");
      editor.highlight = hljs
      editor.config.onchange = (newHtml) => {
        this.Modeldate.article = newHtml;
      };
      editor.config.menus = [
        "bold",
        "head",
        "link",
        "italic",
        "lineHeight",
        "underline",
        "justify",
        "foreColor",
        "list",
        "image",
        "emoticon",
        "code",
        "todo",
      ];
      editor.config.uploadImgShowBase64 = true;
      editor.config.uploadImgServer = process.env.VUE_APP_FILE_UPLOAD_PATH;
      editor.config.uploadImgMaxSize = 5 * 1024 * 1024; // 5M
      editor.config.uploadImgAccept = ["jpg", "jpeg", "png", "gif", "bmp"];
      editor.config.uploadImgMaxLength = 5;
      editor.config.uploadFileName = "file";
      editor.config.height = 600;
      editor.create();
      this.editor = editor;
    },
  },

  mounted() {
    this.editorCreate();
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  },
};
</script>

<style lang="less" scoped>
.Editor {
  display: flex;
  justify-content: center;
  min-width: 1200px;
  height: calc(100vh- 50px);
  .blog-menu--edit {
    width: 50%;
    height: 100%;
    padding: 30px 0 0 50px;
    font-size: 16px;
    h3 {
      font-size: 18px;
      padding: 20px 0;
    }
    #blog-editor-textarea {
      padding-bottom: 20px;
    }
    .blog-menu-edit-commit {
      width: 100%;
      margin: 20px 0;
    }
  }
  .EditorView {
    box-sizing: border-box;
    width: 50%;
    height: calc(100vh);
    overflow-x: hidden;
    overflow-y: scroll;
    margin-left: 50px;
    padding: 50px;
    background-color: #eee;
  }
  .el-icon-back {
    position: absolute;
    left: 15px;
    top: 55px;
    cursor: pointer;
  }
}
</style>