<template>
  <div class="Stat__wrapper">
    <h2>{{ header }}</h2>
    <div>{{ text }}</div>
    <el-progress :percentage="percentage" :color="color"></el-progress>
  </div>
</template>
<script>
export default {
  props: {
    header: String,
    text: String,
    color: String,
    percentage: Number
  },
};
</script>
<style lang="scss" scoped>
.Stat__wrapper {
  padding: 1.25rem;
  // background: #ffffff;
  border-radius: 5px;
  color: var(--color);
  border: 1px solid #d8dbe0;
}
.Stat__wrapper .el-progress {
  margin: 1rem 0;
}
</style>
