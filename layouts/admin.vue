<template>
  <el-container class="main__cont">
    <Header />
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message" />Manage Models
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" style="padding: 0">
                <nuxt-link to="/admin/country">
                  Country
                </nuxt-link>
              </el-menu-item>
              <el-menu-item index="1-2" style="padding: 0">
                <nuxt-link to="/admin/competition">
                  Competition
                </nuxt-link>
              </el-menu-item>
              <el-menu-item index="1-3" style="padding: 0">
                <nuxt-link to="/admin/club">
                  Club
                </nuxt-link>
              </el-menu-item>
              <el-menu-item index="1-4" style="padding: 0">
                <nuxt-link to="/admin/market">
                  Market
                </nuxt-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">
                Option 3
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">
                Option4
              </template>
              <el-menu-item index="1-4-1">
                Option 4-1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu" />Bet Center
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <nuxt-link to="/admin/bets/game">
                  Bets
                </nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <nuxt-link to="/admin/bets/bookmaker">
                  Bookmaker
                </nuxt-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">
                Option 3
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">
                Option 4
              </template>
              <el-menu-item index="2-4-1">
                Option 4-1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting" />Settings
            </template>
            <el-menu-item-group>
              <template slot="title">
                Access Control
              </template>
              <el-menu-item index="3-1">
                <nuxt-link to="/admin/access/role">
                  Roles
                </nuxt-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <nuxt-link to="/admin/access/permission">
                  Permission
                </nuxt-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">
                Option 3
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">
                Option 4
              </template>
              <el-menu-item index="3-4-1">
                Option 4-1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <nuxt />
        </el-main>
        <el-footer>
          Footer
        </el-footer>
        <Modal />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  middleware: ["auth", "load-resource"],
  components: { Header },
  computed: {
    user() {
      return this.$auth.user;
    }
  }
};
</script>

<style>
.main__cont {
  flex-direction: column;
}

.main__cont section {
  height: calc(100vh - 60px);
}
.nuxt-link-exact-active.nuxt-link-active {
  background: #00000050;
  color: #ffffff;
}
.el-menu-item a {
  display: block;
  padding: 0 40px;
}
</style>
