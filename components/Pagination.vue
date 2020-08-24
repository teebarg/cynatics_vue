<template>
  <el-pagination
      :current-page="pagination.current_page"
      :hide-on-single-page="true"
      :page-size="pagination.per_page"
      layout="total, prev, pager, next"
      :total="pagination.total"
      @current-change="handleCurrentChange"
    />
</template>
<script>
export default {
  props: {
    pagination: Object,
  },
  methods: {
    handleCurrentChange (page) {
      this.$emit("pageChange", page);
    }
  }
};
</script>
