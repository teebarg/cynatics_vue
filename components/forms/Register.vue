<template>
  <el-form
    ref="form"
    label-position="top"
    label-width="100px"
    :model="form"
    :rules="rules"
    size="medium"
  >
    <div class="form-group">
      <el-form-item label="Username" prop="username">
        <el-input v-model="form.username" />
        <div
          v-if="error && error.data.errors.username"
          class="el-form-item__error"
        >
          {{ error.data.errors.username[0] }}
        </div>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" />
        <div
          v-if="error && error.data.errors.email"
          class="el-form-item__error"
        >
          {{ error.data.errors.email[0] }}
        </div>
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item label="Password" prop="password">
        <el-input show-password v-model="form.password" />
        <div
          v-if="error && error.data.errors.password"
          class="el-form-item__error"
        >
          {{ error.data.errors.password[0] }}
        </div>
      </el-form-item>
      <el-form-item label="Confirm Password" prop="password_confirmation">
        <el-input show-password v-model="form.password_confirmation" />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button style="width: 100%" type="primary" @click="submitForm('form')">
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState } from "vuex";
import { Rules, validatePassword, ApiEndPoint } from "~/services/constants";

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      rules: {
        username: [Rules.NAME("Username")],
        email: Rules.EMAIL(),
        password: Rules.PASSWORD(),
        password_confirmation: Rules.PASSWORD_CONFIRMATION(
          validatePassword(this)
        )
      }
    };
  },
  computed: {
    ...mapState("error", ["error"])
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        try {
          await this.$axios.$post(ApiEndPoint.REGISTER, this.form);
          await this.$auth.loginWith("local", {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          });
          this.$router.push("/");
          this.$clearError();
        } catch (e) {
          this.$commitError(e.response.data);
        }
        this.$offLoader();
      });
    }
  }
};
</script>
