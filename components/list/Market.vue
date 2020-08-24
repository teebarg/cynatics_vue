<template>
  <div class="Market__wrapper">
    <el-tag
      closable
      v-for="(market, key) in markets.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      :key="key"
      :type="market.is_active ? 'success' : 'danger'"
      @close="handleClose(market.id)"
      @click="$emit('edit', market)"
    >
      {{ market.name }}
    </el-tag>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      beaf: {
        title: "A title",
        default: "A Default title"
      },
    };
  },
  computed: {
    ...mapState("market", ["markets"])
  },
  methods: {
    handleClose(id) {
      this.$confirm("Are you sure to Delete Market?", "Warning", {
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
    search: String
  }
};
</script>
<style lang="scss" scoped>
.Market__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.Market__wrapper span {
  flex: 0 1 auto;
}
</style>
