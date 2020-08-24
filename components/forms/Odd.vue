<template>
  <el-form ref="oddForm" :rules="rules" label-position="top" :model="oddForm">
    <div class="form-group">
      <el-form-item label="Name" prop="name">
        <el-input v-model="oddForm.name" />
        <div v-if="error && error.data.errors.name" class="el-form-item__error">
          {{ error.data.errors.name[0] }}
        </div>
      </el-form-item>
      <el-form-item label="Status" prop="is_active">
        <el-switch
          v-model="oddForm.is_active"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="Active"
          inactive-text="Inactive"
        >
        </el-switch>
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item label="Market" prop="market_id">
        <el-select
          v-model="oddForm.market_id"
          clearable
          filterable
          placeholder="Extra"
        >
          <el-option
            v-for="item in markets"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submitForm('oddForm')">
        {{ mode === "edit" ? "Update" : "Create" }}
      </el-button>
      <el-button @click="resetForm('oddForm')">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { ODD } from "~/services/mutants";
import { Rules } from "~/services/constants";

export default {
  props: {
    odd: Object,
    mode: String
  },
  data() {
    return {
      oddForm: {
        name: this.odd.name,
        is_active: this.odd.is_active || false,
        market_id: this.odd.market_id
      },
      rules: {
        name: [Rules.NAME()],
        market_id: [Rules.NAME("Market")]
      }
    };
  },
  computed: {
    ...mapState("error", ["error"]),
    ...mapState("market", ["markets"])
  },
  watch: {
    odd(newValue, oldValue) {
      (this.oddForm.name = newValue.name),
        (this.oddForm.is_active = newValue.is_active);
    }
  },
  methods: {
    ...mapActions("odd", [ODD.CREATE_ODD, ODD.UPDATE_ODD]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        if (this.mode === "edit") {
          await this.updateOdd({
            payload: this.oddForm,
            id: this.odd.id
          });
        } else {
          await this.createOdd(this.oddForm);
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
