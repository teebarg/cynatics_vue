<template>
  <el-form
    ref="BookmakerForm"
    :rules="rules"
    label-position="top"
    :model="BookmakerForm"
  >
    <div class="form-group">
      <el-form-item label="Name" prop="name">
        <el-input v-model="BookmakerForm.name" />
        <div v-if="error && error.data.errors.name" class="el-form-item__error">
          {{ error.data.errors.name[0] }}
        </div>
      </el-form-item>
      <el-form-item label="Status" prop="is_active">
        <el-switch
          v-model="BookmakerForm.is_active"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="Active"
          inactive-text="Inactive"
        >
        </el-switch>
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submitForm('BookmakerForm')">
        {{ mode === "edit" ? "Update" : "Create" }}
      </el-button>
      <el-button @click="resetForm('BookmakerForm')">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { BOOKMAKER } from "~/services/mutants";
export default {
  props: {
    bookmaker: {
      type: Object,
      default: () => ({
        name: "",
        is_active: null
      })
    },
    mode: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      BookmakerForm: {
        name: this.bookmaker.name,
        is_active: this.bookmaker.is_active || false
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
  computed: {
    ...mapState('error', ['error']),
  },
  watch: {
    bookmaker(newValue, oldValue) {
      (this.BookmakerForm.name = newValue.name),
        (this.BookmakerForm.is_active = newValue.is_active);
    }
  },
  methods: {
    ...mapActions("bookmaker", [BOOKMAKER.CREATE_BOOKMAKER, BOOKMAKER.UPDATE_BOOKMAKER]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        if (this.mode === "edit") {
          await this.updateBookmaker({
            payload: this.BookmakerForm,
            id: this.bookmaker.id
          });
        } else {
          await this.createBookmaker(this.BookmakerForm);
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
