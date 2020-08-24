<template>
  <el-popconfirm
    confirm-button-text="OK"
    cancel-button-text="No, Thanks"
    icon="el-icon-info"
    icon-color="red"
    title="Are you sure to delete this?"
    @onConfirm="$emit('confirmed', id)"
  >
    <el-button slot="reference" size="mini" type="danger">
      <slot name="default">
        Delete
      </slot>
    </el-button>
  </el-popconfirm>
</template>
