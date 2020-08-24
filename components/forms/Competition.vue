<template>
  <el-form
    ref="competitionForm"
    :rules="rules"
    label-position="top"
    :model="competitionForm"
  >
    <div class="form-group">
      <el-form-item label="Competition Name" prop="name">
        <el-input v-model="competitionForm.name" />
        <div v-if="error && error.data.errors.name" class="el-form-item__error">
          {{ error.data.errors.name[0] }}
        </div>
      </el-form-item>
      <el-form-item label="Alias" prop="alias">
        <el-input v-model="competitionForm.alias" />
        <div v-if="error && error.data.errors.alias" class="el-form-item__error">
          {{ error.data.errors.alias[0] }}
        </div>
      </el-form-item>
    </div>
    <el-form-item label="Country" prop="country">
      <el-autocomplete
        class="inline-input"
        v-model="competitionForm.country"
        value-key="name"
        :fetch-suggestions="querySearch"
        placeholder="Please Input"
        :trigger-on-focus="false"
        @select="handleSelect"
      >
        <template slot-scope="{ item }">
          <div class="value">{{ item.name }}</div>
        </template>
      </el-autocomplete>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('competitionForm')">
        {{ mode === "edit" ? "Update" : "Create" }}
      </el-button>
      <el-button @click="resetForm('competitionForm')">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { COMPETITION, COUNTRY } from "~/services/mutants";
import { Rules } from "~/services/constants";

export default {
  props: {
    competition: Object,
    mode: String
  },
  data() {
    return {
      competitionForm: {
        name: this.competition.name,
        alias: this.competition.alias,
        country_id: this.competition.country_id,
        country: this.competition.country,
      },
      rules: {
        name: [ Rules.NAME() ],
        alias: [ Rules.ALIAS ],
        country: [Rules.NAME('Country')]
      }
    };
  },
  watch: {
    competition(newValue, oldValue){
      this.competitionForm.name = newValue.name,
      this.competitionForm.alias = newValue.alias,
      this.competitionForm.country_id = newValue.country_id,
      this.competitionForm.country = newValue.country
    }
  },
  computed: {
    ...mapState("country", ["countries"]),
    ...mapState('error', ['error']),
  },
  methods: {
    ...mapActions("competition", [
      COMPETITION.CREATE_COMPETITION,
      COMPETITION.UPDATE_COMPETITION
    ]),
    ...mapActions("country", [COUNTRY.COUNTRIES]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        if (this.mode === "edit") {
          await this.updateCompetition({ payload: this.competitionForm, id: this.competition.id });
        } else {
          await this.createCompetition(this.competitionForm);
        }
        this.$offLoader();
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async querySearch(queryString, cb) {
      await this.getCountries({ name: queryString });
      cb(this.countries);
    },
    handleSelect({ id }) {
      this.competitionForm.country_id = id;
    }
  }
};
</script>
