<template>
  <el-table :data="game.game_items" style="width: 100%">
    <el-table-column prop="match_date" label="Date" width="100"> </el-table-column>
    <el-table-column prop="home" label="Home"> </el-table-column>
    <el-table-column prop="away" label="Away"> </el-table-column>
    <el-table-column prop="odd" label="Pick" width="80"> </el-table-column>
    <el-table-column prop="result" label="Result" width="100"> </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    game: Object
  },
  data:() => ({}),
};
</script>
<style lang="scss" scoped>
.el-table, .el-table__expanded-cell {
    background-color: var(--background-primary);
}
</style>
