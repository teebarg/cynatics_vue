<template>
  <header class="header">
    <h1 class="logo">
      <nuxt-link to="/">
        Cynatics
      </nuxt-link>
    </h1>
    <ul class="main-nav">
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/news">
          News
        </nuxt-link>
      </li>
      <li>
        <el-dropdown>
          <a>Markets</a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <nuxt-link to="/market">
                All Bets
              </nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item v-for="(market, key) of markets" :key="key">
              <nuxt-link :to="`/market/${market.slug}`">
                {{ market.name }}
              </nuxt-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <nuxt-link to="/admin">
          Admin
        </nuxt-link>
      </li>
      <li v-if="$auth.loggedIn">
        <el-dropdown>
          <div class="profile">
            <el-avatar :size="35" src="https://empty" @error="errorHandler">
              <img src="/holder.png" />
            </el-avatar>
            <p>Adeniyi</p>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>
              <span @click="logout">Logout</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li v-else>
        <div class="auth">
          <el-button @click="goto('login')" size="small" type="primary" round
            >Login</el-button
          >
          <el-button @click="goto('register')" size="small" type="success" round
            >Register</el-button
          >
        </div>
      </li>
      <li>
        <div class="theme">
          <span>Dark Mode</span
          ><el-switch size="small" v-model="mode" @change="onChange">
          </el-switch>
        </div>
      </li>
    </ul>
  </header>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return { mode: this.$colorMode.preference === 'dark'}
  },
  computed: {
    ...mapState("market", ["markets"])
  },
  methods: {
    onChange(e) {
      this.$colorMode.preference = e ? "dark" : "light";
    },
    async logout(e) {
      try {
        await this.$auth.logout();
        this.$router.push("/");
      } catch (e) {}
    },
    goto(e) {
      this.$router.push(`/auth/${e}`);
    },
    errorHandler() {
      return true;
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}

.logo {
  margin: 0;
  font-size: 1.45em;
}

.auth {
  display: flex;
  place-items: center;
  height: 100%;
}

.main-nav {
  margin-top: 5px;
}
.logo a,
.main-nav a,
.theme {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
}

.main-nav a {
  color: var(--text-intermediate);
  font-size: 0.99em;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
}

.main-nav a:hover {
  color: var(--text-primary);
  border-color: var(--text-intermediate);
}

.main-nav a.nuxt-link-exact-active.nuxt-link-active {
  color: var(--text-primary);
  border-color: var(--color-accent);
}

.header {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: var(--background-secondary);
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.profile {
  display: flex;
  place-items: center;
}

.profile p {
  margin-left: 5px;
}

/* =================================
  Media Queries
==================================== */

@media (min-width: 769px) {
  .header,
  .main-nav {
    display: flex;
  }
  .header {
    flex-direction: column;
    align-items: center;
    .header {
      width: 80%;
      margin: 0 auto;
      max-width: 1150px;
    }
  }
}

@media (min-width: 1025px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
