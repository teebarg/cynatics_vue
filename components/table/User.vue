<template>
  <el-table :data="users" style="width: 100%;" height="100%">
    <el-table-column
      type="index"
      width="50"
      label="S/N">
    </el-table-column>
    <el-table-column prop="username" label="Username" />
    <el-table-column prop="email" label="Email" />
    <el-table-column prop="created_at" label="Date Registered" />
    <el-table-column label="Roles">
      <template slot-scope="scope">
        <el-button size="small" type="secondary" @click="$emit('role', scope.row)">
            Roles
          </el-button>
      </template>
    </el-table-column>
    <el-table-column label="Permissions">
      <template slot-scope="scope">
        <el-button size="small" type="secondary" @click="$emit('permission', scope.row)">
            Permissions
        </el-button>
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
    ...mapState("user", ["users"])
  }
};
</script>
