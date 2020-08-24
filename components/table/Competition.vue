<template>
  <div>
    <el-table
      :data="competitions"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="Image" width="150">
        <template slot-scope="scope">
          <ImageUpload
            action="competition/updateCompetition"
            model="competition"
            :imageData="scope.row"
          />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="alias" label="Alias" />
      <el-table-column prop="country" label="Country" />
      <el-table-column label="Action">
        <template slot-scope="scope">
          <TableControl @edit="$emit('edit', scope.row)" @delete="$emit('delete', scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("competition", ["competitions"]),
  },
};
</script>
