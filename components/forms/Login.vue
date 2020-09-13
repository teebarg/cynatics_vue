<template>
  <el-form
    ref="form"
    label-position="top"
    label-width="100px"
    :model="form"
    :rules="rules"
    size="medium"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input show-password v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button style="width: 100%" type="primary" @click="submitForm('form')">
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { Rules } from "~/services/constants";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        email: [Rules.EMAIL()],
        password: [Rules.PASSWORD()]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        try {
          await this.$auth.loginWith("local", {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          });
          this.$router.back();
        } catch (e) {
        }
        this.$offLoader();
      });
    }
  }
};
</script>
