<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="Bookmaker" />
      <el-table-column prop="pivot.booking_number" label="Booking Number" />
      <el-table-column label="Actions">
        <template slot-scope="scope">
          <TableControl
            @edit="$emit('edit', scope.row)" @delete="$emit('delete', scope.row)"
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
<style>
.el-table .cell {
  display: flex;
}
</style>
