<template>
  <el-form
    ref="roleForm"
    :rules="rules"
    label-position="top"
    label-width="100px"
    :model="roleForm"
  >
    <div class="form-group">
      <el-form-item label="Name" prop="name">
        <el-input v-model="roleForm.name" />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submitForm('roleForm')">
        {{ mode === "edit" ? "Update" : "Create" }}
      </el-button>
      <el-button @click="resetForm('roleForm')">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapActions } from "vuex";
import { ROLE } from "~/services/mutants";
export default {
  props: {
    role: {
      type: Object,
      default: () => ({ name: "" })
    },
    mode: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      roleForm: {
        name: this.role.name
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter a name",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions("role", [ROLE.CREATE_ROLE, ROLE.UPDATE_ROLE]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        if (this.mode === "edit") {
          await this.updateRole({ payload: this.roleForm, id: this.role.id });
        } else {
          await this.createRole(this.roleForm);
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
<style></style>
