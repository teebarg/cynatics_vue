<template>
  <div>
    <el-button
      slot="reference"
      size="mini"
      type="danger"
      @click="$router.go(-1)"
      style="margin-bottom: 20px"
    >
      Back
    </el-button>
  </div>
</template>
