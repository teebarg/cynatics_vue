<template>
  <el-form
    ref="marketForm"
    :rules="rules"
    label-position="top"
    :model="marketForm"
  >
    <div class="form-group">
      <el-form-item label="Name" prop="name">
        <el-input v-model="marketForm.name" />
        <div v-if="error && error.data.errors.name" class="el-form-item__error">
          {{ error.data.errors.name[0] }}
        </div>
      </el-form-item>
      <el-form-item label="Status" prop="is_active">
        <el-switch
          v-model="marketForm.is_active"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="Active"
          inactive-text="Inactive"
        >
        </el-switch>
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submitForm('marketForm')">
        {{ mode === "edit" ? "Update" : "Create" }}
      </el-button>
      <el-button @click="resetForm('marketForm')">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { MARKET } from "~/services/mutants";
import { Rules } from "~/services/constants";

export default {
  props: {
    market: Object,
    mode: String
  },
  data() {
    return {
      marketForm: {
        name: this.market.name,
        is_active: this.market.is_active || false
      },
      rules: {
        name: [ Rules.NAME() ]
      }
    };
  },
  computed: {
    ...mapState('error', ['error']),
  },
  watch: {
    market(newValue, oldValue) {
      (this.marketForm.name = newValue.name),
        (this.marketForm.is_active = newValue.is_active);
    }
  },
  methods: {
    ...mapActions("market", [MARKET.CREATE_MARKET, MARKET.UPDATE_MARKET]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        if (this.mode === "edit") {
          await this.updateMarket({
            payload: this.marketForm,
            id: this.market.id
          });
        } else {
          await this.createMarket(this.marketForm);
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
