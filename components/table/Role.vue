<template>
  <el-table :data="roles" style="width: 100%;" height="100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column prop="name" label="Name" />
    <el-table-column label="Permissions">
      <template slot-scope="scope">
        <el-tag size="medium" @click="$emit('permission', scope.row)">
          perm
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="Action">
      <template slot-scope="scope">
        <TableControl
          @edit="$emit('edit', scope.row)"
          @delete="$emit('delete', scope.row.id)"
        />
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("role", ["roles"])
  }
};
</script>
