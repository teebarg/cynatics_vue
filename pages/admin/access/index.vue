<template>
  <div class="access_container">
    <nuxt-link to="/admin/access/role">
      <el-card shadow="always">
        Roles
      </el-card>
    </nuxt-link>
    <nuxt-link to="/admin/access/permission">
      <el-card shadow="always">
        Permissions
      </el-card>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  middleware: ['auth', 'admin', 'superAdmin'],
  layout: 'admin',
  components: {
  }
}
</script>

<style lang="scss" >
  .access_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;
  }
</style>
