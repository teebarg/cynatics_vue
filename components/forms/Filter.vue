<template>
  <div class="filter__wrapper" style="margin-bottom: 20px">
    <div v-if="name">
      <el-input
        size="small"
        placeholder="Enter Name"
        v-model="filterForm.name"
        clearable
      >
      </el-input>
    </div>
    <div>
      <el-select
        v-model="filterForm.status"
        clearable
        placeholder="Status"
        size="small"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div v-if="date">
      <el-date-picker
        v-model="filterForm.from"
        type="date"
        size="small"
        placeholder="Start Date"
        format="MM/dd/yyyy"
        value-format="MM-dd-yyyy"
        clearable
      >
      </el-date-picker>
    </div>
    <div v-if="date">
      <el-date-picker
        v-model="filterForm.to"
        type="date"
        size="small"
        placeholder="End Date"
        format="MM/dd/yyyy"
        value-format="MM-dd-yyyy"
      >
      </el-date-picker>
    </div>
    <template class="extra">
      <slot name="extra" v-bind:filterForm="filterForm"></slot>
    </template>
    <div>
      <el-button
        size="small"
        type="primary"
        icon="el-icon-search"
        @click="handleSearch"
        :loading="isLoading"
        >Search</el-button
      >
    </div>
  </div>
</template>
<script>
import { Utility } from "../../services/utility";
export default {
  props: {
    state: {
      type: String
    },
    action: String,
    date: {
      type: Boolean,
      default: true
    },
    name: true
  },
  data() {
    return {
      filterForm: {
        from: "",
        to: "",
        name: ""
      },
      isLoading: false,
      options: [
        {
          value: 1,
          label: "Active"
        },
        {
          value: 2,
          label: "InActive"
        }
      ],
      value: ""
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async handleSearch() {
      this.isLoading = true;
      await this.$store.dispatch(
        `${this.state}/${this.action}`,
        Utility.removeBlankObjectFields(this.filterForm)
      );
      this.isLoading = false;
    }
  }
};
</script>
<style>
.filter__wrapper {
  display: flex;
  gap: 10px;
}
</style>
