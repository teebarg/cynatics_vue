<template>
  <el-image
    slot="trigger"
    fit="contain"
    :src="asset + image"
    class="el-avatar el-avatar--circle"
  >
    <div slot="placeholder" class="image-slot">
      <img src="/holder.png" />
    </div>
    <div slot="error" class="el-avatar el-avatar--circle">
      <img src="/holder.png" />
    </div>
  </el-image>
</template>
<script>
export default {
  data:() => ({asset: process.env.ASSET_URL}),
  props: {
    image: {
      type: String,
      default: ''
    }
  }
};
</script>
<style>

</style>
