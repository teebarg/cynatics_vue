<template>
  <div>
    <el-table :data="tableData">
      <el-table-column label="Image" width="120">
        <template slot-scope="scope">
          <ImageUpload
            action="advert/updateAdvert"
            model="advert"
            :imageData="{id: scope.row.id, image: scope.row.image && scope.row.image.image, image_id: scope.row.image && scope.row.image.id}"
          />
        </template>
      </el-table-column>
      <el-table-column prop="url" label="Url" />
      <el-table-column prop="target" label="Target" />
      <el-table-column label="Active">
        <template slot-scope="props">
          <el-tag
            :type="props.row.is_active ? 'success' : 'danger'"
            disable-transitions
            effect="dark"
          >
            {{ props.row.is_active }}
          </el-tag>
        </template>
      </el-table-column>
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
