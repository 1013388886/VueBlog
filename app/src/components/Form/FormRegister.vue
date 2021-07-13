<template>
  <div class="register">
    <el-form :model="form" :rules="rules" :inline="true" label-width="70px" ref='elform'>
      <el-row type="flex" class="register-row">
        <el-col class="register-col">
          <el-form-item label="用户名:" prop="username">
            <el-input
              size="medium"
              v-model="form.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col class="register-col">
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
           <el-col class="register-col">
          <el-form-item label="邮箱" prop="email">
            <el-input
              type="email"
              v-model="form.email"
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
  name: "FormRegister",
   data() {
    return {
      form: {
        username: "",
        password: "",
        email:''
      },
    };
  },
  computed:{
    rules(){
      return rules
    }
  }
};
</script>


<style lang="less" scoped>
.register-row{
  flex-direction: column;
  align-items: space-around;
  margin-top: 22px;
  .register-col{
    display: flex;
    justify-content: center;
      margin-top: 15px;

  }
}
</style>