<template>
  <div class="dashboard__wrapper">
    <div class="Game__stat">
      <el-row type="flex" :gutter="20">
        <el-col :xs="24" :sm="12" :md="6">
          <WidgetStat
            color="#e55353"
            border="#d82121"
            header="988.823"
            text="Members online"
            :percentage="75"
          />
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <WidgetStat
            color="#2eb85c"
            border="#218543"
            header="90.823"
            text="Members online"
            :percentage="75"
          />
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <WidgetStat
            color="#39f"
            border="#0079f2"
            header="29.823"
            text="Members online"
            :percentage="45"
          />
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <WidgetStat
            color="#f9b115"
            border="#c98b05"
            header="19.823"
            text="Members online"
            :percentage="20"
          />
        </el-col>
      </el-row>
    </div>
    <div>
      <ChartLine />
    </div>
    <el-row type="flex" :gutter="20">
      <el-col :xs="24" :sm="6" :md="8">
        <div class="recent__user">
          <h3>Last 5 Registered Users</h3>
          <WidgetUser v-for="o in 5" :key="o" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="18" :md="16">
        <ChartDonut />
      </el-col>
    </el-row>
    <div>
      <TableGame />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Layout } from "~/services/constants";
import { GAME } from "~/services/mutants";

export default {
  middleware: ["auth", "admin"],
  layout: Layout.ADMIN,
  async fetch() {
    await this.getGames({ limit: 5 });
  },
  components: {},
  methods: {
    ...mapActions("game", [GAME.GAMES])
  },
  head: {
    title: 'Demo of @nuxtjs/color-mode',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Demo of using @nuxtjs/color-mode for NuxtJS, supporting dark mode and custom colors' }
    ]
  }
};
</script>
<style lang="scss" scoped>
.dashboard__wrapper {
  color: #3c4b64;
  // background-color: #ebedef;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.dashboard__wrapper > .Game__stat {
  display: flex;
  gap: 20px;
}
.dashboard__wrapper > .Game__stat > div {
  flex: 1;
}
.dashboard__wrapper .recent__user {
  height: 100%;
  background: #ffffff;
  padding: 10px;
  display: grid;
  place-items: center;
}
.dashboard__wrapper .recent__user > .Stat__wrapper {
  margin: 10px 0;
}
</style>
