<template>
  <div class="Stat__wrapper" :style="{backgroundColor: color, borderColor: border}">
    <h2>{{ header }}</h2>
    <div>{{ text }}</div>
    <el-progress :percentage="percentage" color="#FFFFFF"></el-progress>
  </div>
</template>
<script>
export default {
  props: {
    header: String,
    text: String,
    color: String,
    border: String,
    percentage: Number
  },
};
</script>
<style lang="scss" scoped>
.Stat__wrapper {
  padding: 1.25rem;
  border-radius: 5px;
  color: var(--color-white);
  border: 1px solid #d8dbe0;
}
.Stat__wrapper .el-progress {
  margin: 1rem 0;
}
</style>
