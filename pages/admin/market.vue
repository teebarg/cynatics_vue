<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="2">
          <p>Search</p>
          <el-input placeholder="Please input" v-model="search"></el-input>
        </el-col>
      </el-row>
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Markets</h2>
        <div>
          <el-button size="mini" type="primary" @click="onCreate">
            Create Market
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <ListItem
        :listData="markets"
        :search="search"
        @edit="onEdit"
        @delete="onDelete"
      />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { MARKET, MODAL } from "~/services/mutants";
import { Layout } from "~/services/constants";


export default {
  layout: Layout.ADMIN,
  data: () => ({
    search: ""
  }),
  computed: {
    ...mapState("market", ["markets"])
  },
  methods: {
    ...mapActions("market", [MARKET.MARKETS, MARKET.DELETE_MARKET]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    onCreate() {
      this.showModal({
        componentName: "Market",
        title: "Create Market"
      });
    },
    onEdit(market) {
      this.showModal({
        componentName: "Market",
        title: "Edit Market",
        componentData: market,
        mode: "edit"
      });
    },
    async handleCurrentChange(page) {
      await this.getMarkets({ page });
    },
    async onDelete(id) {
      this.$setLoader();
      await this.deleteMarket(id);
      this.$offLoader();
    }
  },
  metaInfo() {
    return {
      title: "My Sexy Markets",
      meta: [
        {
          vmid: "description",
          name: "description",
          content: "This is a cool Description"
        }
      ]
    };
  }
};
</script>
