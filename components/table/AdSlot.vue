<template>
  <div>
    <el-table :data="adSlots">
      <el-table-column type="expand">
        <template slot-scope="props">
          <Advert :tableData="props.row.adverts" :adSlotId="props.row.id" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" />
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
import { mapState, mapMutations } from "vuex";
import { STATUS } from "~/services/constants";

export default {
  computed: {
    ...mapState("adSlot", ["adSlots"])
  }
};
</script>
