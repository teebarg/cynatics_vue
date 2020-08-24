<template>
  <el-form ref="clubForm" :rules="rules" label-position="top" :model="clubForm" size="small">
    <div class="form-group">
      <el-form-item label="Name" prop="name">
        <el-input v-model="clubForm.name" />
      </el-form-item>
      <el-form-item label="Alias" prop="alias">
        <el-input v-model="clubForm.alias" />
      </el-form-item>
    </div>
    <el-form-item label="Country" prop="country">
      <el-autocomplete
        class="inline-input"
        v-model="clubForm.country"
        :fetch-suggestions="querySearch"
        value-key="name"
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
      <el-button type="primary" @click="submitForm('clubForm')">
        {{ mode === "edit" ? "Update" : "Create" }}
      </el-button>
      <el-button @click="resetForm('clubForm')">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { CLUB, COUNTRY } from "~/services/mutants";
import { Rules } from "~/services/constants";

export default {
  props: {
    club: Object,
    mode: String
  },
  data() {
    return {
      clubForm: {
        name: this.club.name,
        alias: this.club.alias,
        country_id: this.club.country_id,
        country: this.club.country
      },
      rules: {
        name: [ Rules.NAME() ],
        alias: [ Rules.ALIAS ],
        country: [Rules.NAME('Country')]
      }
    };
  },
  watch: {
    club(newValue, oldValue){
      this.clubForm.name = newValue.name,
      this.clubForm.alias = newValue.alias,
      this.clubForm.country_id = newValue.country_id,
      this.clubForm.country = newValue.country
    }
  },
  computed: {
    ...mapState("country", ["countries"])
  },
  methods: {
    ...mapActions("club", [CLUB.CREATE_CLUB, CLUB.UPDATE_CLUB]),
    ...mapActions("country", [COUNTRY.COUNTRIES]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        if (this.mode === "edit") {
          await this.updateClub({ payload: this.clubForm, id: this.club.id });
        } else {
          await this.createClub(this.clubForm);
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
      this.clubForm.country_id = id;
    }
  }
};
</script>
