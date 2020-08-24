<template>
  <div>
    <el-button
      type="primary"
      size="mini"
      icon="el-icon-edit"
      @click.native.prevent="$emit('edit', true)"
      v-if="$can(editPermission)"
    ></el-button>
    <el-popconfirm
      confirm-button-text="OK"
      cancel-button-text="No, Thanks"
      icon="el-icon-info"
      icon-color="red"
      title="Are you sure to delete this?"
      @onConfirm="$emit('delete', true)"
      v-if="$can(deletePermission)"
    >
      <el-button
        type="danger"
        size="mini"
        icon="el-icon-delete"
        slot="reference"
      ></el-button>
    </el-popconfirm>
  </div>
</template>
<script>
export default {
  props: {
    editPermission: {
      type: String,
      default: 'Edit'
    },
    deletePermission: {
      type: String,
      default: 'Delete'
    }
  },
};
</script>
