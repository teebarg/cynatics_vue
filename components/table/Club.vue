<template>
  <el-table :data="clubs" style="width: 100%;" height="100%">
    <el-table-column type="selection" width="55" />
    <el-table-column label="Image" width="150">
      <template slot-scope="scope">
        <ImageUpload
          action="club/updateClub"
          model="club"
          :imageData="scope.row"
        />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="alias" label="Alias" width="100" />
    <el-table-column prop="country" label="Country" />
    <el-table-column label="Action" width="150" v-if="$can('edit')">
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
    ...mapState("club", ["clubs"])
  }
};
</script>
<style>
