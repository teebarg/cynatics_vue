<template>
  <el-header style="text-align: right; font-size: 12px">
    <div class="center-row" style="justify-content: flex-end">
      <div>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <el-dropdown>
        <!-- <i class="el-icon-setting" style="margin-right: 15px" /> -->
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>
            <el-button type="danger" @click="$auth.logout()">
              Logout
            </el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
    </div>
  </el-header>
</template>
<script>
export default {
  methods: {
    test () {
      alert(5)
    }
  }
}
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
