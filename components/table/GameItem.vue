<template>
  <div>
    <el-table :data="tableData">
    <el-table-column prop="match_date" label="Date" width="130" />
    <el-table-column prop="home" label="Home" />
    <el-table-column prop="away" label="Away" />
    <el-table-column prop="competition" label="Competition" />
    <el-table-column prop="bookie_odd" label="Game Odd" />
    <el-table-column prop="game_status" label="Status" width="70" />
    <el-table-column label="Odds" width="80">
      <template slot-scope="scope">
        <el-tag size="small" @click="$emit('odd', scope.row)">
          {{ scope.row.odd }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="result" label="Result" width="70" />
    <el-table-column label="Action" width="150" v-if="$can('edit')">
      <template slot-scope="scope">
        <TableControl
          @edit="$emit('edit', scope.row)"
          @delete="$emit('delete', scope.row.id)"
        />
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: []
    }
  }
};
</script>
