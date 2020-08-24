<template>
  <div>
    <el-table :data="countries">
      <el-table-column type="selection" width="55" />
      <el-table-column label="Image" width="150">
        <template slot-scope="scope">
          <ImageUpload
            :imageData="scope.row"
            action="country/updateCountry"
            model="country"
          />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="alias" label="Alias" />
      <el-table-column label="Action">
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
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("country", ["countries"])
  }
};
</script>
<style>
