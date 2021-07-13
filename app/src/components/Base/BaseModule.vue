<template>
  <div class="module">
    <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
      :show-close="false"
      style="padding: 0"
    >
      <el-tabs v-model="activeName" :stretch="true">
        <el-tab-pane label="登录" name="FormLogin">
          <FormLogin ref="FormLogin" />
        </el-tab-pane>
        <el-tab-pane label="注册" name="FormRegister">
          <FormRegister ref="FormRegister" />
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('FormLogin')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import a from "modal.config.js";
import minxin from "@/minxin/method.js";
import FormLogin from "@/components/Form/FormLogin.vue";
import FormRegister from "@/components/Form/FormRegister.vue";
export default {
  name: "BaseModule",
  mixins: [minxin],
  data() {
    return {
      dialogVisible: false,
      activeName: "FormLogin",
    };
  },
  computed: {
    type() {
      return this.activeName === "FormLogin" ? "login" : "register";
    },
  },
  components: {
    FormLogin,
    FormRegister,
  },
  created() {
    this.$bus.$on("openInput", () => {
      this.dialogVisible = true;
    });
  },
  methods: {
    submitForm() {
      let form = this.$refs[this.activeName];
      form.$refs["elform"].validate((valid) => {
        if (valid) {
          let data = this.ObserverDate(form.form);
          let type = this.type;
          this.$http(type, data)
            .then((result) => {
              this.$store.dispatch("login", result);
              this.dialogVisible = false;
            })
            .catch((err) => {
              return err;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.el-dialog {
  padding: 0 !important;
  z-index: 99;

  .dialog-footer {
    display: flex;
    justify-content: center;
  }
}
</style>