<template>
  <div class="page-wrapper chiller-theme toggled">
    <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
      <i class="fas fa-bars"></i>
    </a>
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <div class="sidebar-brand">
          <a href="#">Dark Mode</a>
          <el-switch v-model="mode" @change="onChange"> </el-switch>
          <div id="close-sidebar">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="sidebar-header">
          <div class="user-pic">
            <img
              class="img-responsive img-rounded"
              src="/holder.png"
              alt="User picture"
            />
          </div>
          <div class="user-info">
            <span class="user-name"
              >Jhon
              <strong>Smith</strong>
            </span>
            <span class="user-role">Administrator</span>
            <span class="user-status">
              <i class="fa fa-circle"></i>
              <span>Online</span>
            </span>
          </div>
        </div>
        <!-- sidebar-header  -->

        <div class="sidebar-menu">
          <ul>
            <li class="header-menu">
              <span>General</span>
            </li>
            <li
              class="sidebar-dropdown"
              v-for="(item, key) in routes"
              :key="key"
            >
              <a href="#">
                <i :class="[item.fa]"></i>
                <span>{{ item.name }}</span>
              </a>
              <div class="sidebar-submenu">
                <ul>
                  <li v-for="(child, key) in item.children" :key="key">
                    <nuxt-link :to="child.to" class="sub">
                      {{ child.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="header-menu">
              <span>Extra</span>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-book"></i>
                <span>Documentation</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- sidebar-menu  -->
      </div>
      <!-- sidebar-content  -->
      <div class="sidebar-footer">
        <a href="#">
          <i class="fa fa-bell"></i>
          <span class="badge badge-pill badge-warning notification">3</span>
        </a>
        <a href="#">
          <i class="fa fa-envelope"></i>
          <span class="badge badge-pill badge-success notification">7</span>
        </a>
        <a href="#" @click="logout">
          <i class="fa fa-power-off"></i>
        </a>
      </div>
    </nav>
    <!-- sidebar-wrapper  -->
    <main class="page-content">
      <div>
        <nuxt />
        <Modal />
      </div>
    </main>
    <!-- page-content" -->
  </div>
  <!-- page-wrapper -->
</template>

<script>
import Header from "~/components/Header.vue";
import { Dropdown } from "~/services/dropdown";
import { Route } from '~/services/constants'

export default {
  middleware: ["auth", "load-resource"],
  components: { Header },
  data() {
    return { routes: Route, mode: this.$colorMode.preference === 'dark' }
  },
  mounted() {
    new Dropdown();
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
  methods: {
    onChange(e) {
      console.log(e)
      this.$colorMode.preference = e ? 'dark' : 'light'
    },
    async logout(e) {
      try {
          await this.$auth.logout();
          this.$router.push('/');
        } catch (e) {}
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

.el-menu-item a {
  display: block;
  padding: 0 40px;
}

/* .page-content {
  background-color: var(--background-secondary);
} */
</style>
