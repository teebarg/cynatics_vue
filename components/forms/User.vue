<template>
  <el-form
    ref="form"
    :rules="rules"
    label-position="top"
    label-width="100px"
    :model="form"
  >
    <div class="form-group">
      <el-form-item label="Username" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
    </div>
    <div class="form-group" v-if="mode != 'edit'">
      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" show-password />
      </el-form-item>
      <el-form-item label="Confirm Password" prop="password_confirmation">
        <el-input v-model="form.password_confirmation" show-password />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">
        {{ mode === "edit" ? "Update" : "Create" }}
      </el-button>
      <el-button @click="resetForm('form')">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapActions } from "vuex";
import { USER } from "~/services/mutants";
import { Rules, validatePassword } from "~/services/constants";

export default {
  props: {
    user: Object,
    mode: String
  },
  data() {
    return {
      form: {
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      },
      rules: {
        username: [Rules.NAME("Username")],
        email: Rules.EMAIL(),
        password: Rules.PASSWORD(this.mode != 'edit'),
        password_confirmation: Rules.PASSWORD_CONFIRMATION(validatePassword(this))
      }
    };
  },
  methods: {
    ...mapActions("user", [USER.CREATE_USER, USER.UPDATE_USER]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        if (this.mode === "edit") {
          await this.updateUser({ payload: this.form, id: this.user.id });
        } else {
          await this.createUser(this.form);
        }
        this.$offLoader();
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
