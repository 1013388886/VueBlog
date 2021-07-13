<template>
  <div class="login">
    <el-form :model="form" :rules="rules" :inline="true" label-width="70px" ref='elform'>
      <el-row type='flex' class="login-row">
        <el-col class="login-col">
          <el-form-item label="用户名:" prop="username">
            <el-input
              size="medium"
              v-model="form.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col class="login-col">
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import rules from '@/config/validate.config.js'
export default {
  name: "FormLogin",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods:{
  },
  computed:{
    rules(){
      return rules
    }
  }
};
</script>

<style lang="less" scoped>
.login-row{
  flex-direction: column;
  align-items: space-around;
  margin-top: 22px;
  .login-col{
    display: flex;
    justify-content: center;
    margin-top: 15px;

  }
}
</style>