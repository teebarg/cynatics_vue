<template>
  <div class="List__wrapper">
    <el-tag
      closable
      v-for="(item, key) in listData.filter(
        data =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )"
      :key="key"
      :type="item.is_active ? 'success' : 'danger'"
      @close="handleClose(item.id)"
      @click="$emit('edit', item)"
    >
      {{ item.name }}
    </el-tag>
  </div>
</template>
<script>
export default {
  methods: {
    handleClose(id) {
      this.$confirm("Are you sure to Delete?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(_ => {
          this.$emit("delete", id);
        })
        .catch(_ => {});
    }
  },
  props: {
    listData: Array,
    search: String
  }
};
</script>
<style lang="scss" scoped>
.List__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.List__wrapper span {
  flex: 0 1 auto;
}
</style>
