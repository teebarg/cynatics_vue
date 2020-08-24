<template>
  <el-form
    ref="countryForm"
    :rules="rules"
    label-position="top"
    label-width="100px"
    :model="countryForm"
  >
    <div class="form-group">
      <el-form-item label="Name" prop="name">
        <el-input v-model="countryForm.name" />
      </el-form-item>
      <el-form-item label="Alias" prop="alias">
        <el-input v-model="countryForm.alias" />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submitForm('countryForm')">
        {{ mode === "edit" ? "Update" : "Create" }}
      </el-button>
      <el-button @click="resetForm('countryForm')">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapActions } from "vuex";
import { COUNTRY } from "~/services/mutants";
import { Rules } from "~/services/constants";

export default {
  props: {
    country: Object,
    mode: String
  },
  data() {
    return {
      countryForm: {
        name: this.country.name,
        alias: this.country.alias
      },
      rules: {
        name: [ Rules.NAME() ],
        alias: [ Rules.ALIAS ]
      }
    };
  },
  methods: {
    ...mapActions("country", [COUNTRY.CREATE_COUNTRY, COUNTRY.UPDATE_COUNTRY]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        if (this.mode === "edit") {
          this.update(this.countryForm, this.country.id);
        } else {
          this.create(this.countryForm);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async update(payload, id) {
      await this.updateCountry({ payload, id });
      this.$offLoader();
    },
    async create(payload) {
      await this.createCountry(payload);
      this.$offLoader();
    }
  }
};
</script>
