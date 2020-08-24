<template>
  <el-form
    ref="permissionForm"
    :rules="rules"
    label-position="top"
    label-width="100px"
    :model="permissionForm"
  >
    <div class="form-group">
      <el-form-item label="Name" prop="name">
        <el-input v-model="permissionForm.name" />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submitForm('permissionForm')">
        {{ mode === "edit" ? "Update" : "Create" }}
      </el-button>
      <el-button @click="resetForm('permissionForm')">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapActions } from "vuex";
import { PERMISSION } from "~/services/mutants";
export default {
  props: {
    permission: {
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
      permissionForm: {
        name: this.permission.name
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
    ...mapActions("permission", [
      PERMISSION.CREATE_PERMISSION,
      PERMISSION.UPDATE_PERMISSION
    ]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        if (this.mode === "edit") {
          await this.updatePermission({ payload: this.permissionForm, id: this.permission.id });
        } else {
          await this.createPermission(this.permissionForm);
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
