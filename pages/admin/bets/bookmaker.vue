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
        <h2>Bookmakers</h2>
        <div>
          <el-button size="mini" type="primary" @click="onCreate">
            Create Bookmaker
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <ListItem
        :listData="bookmakers"
        :search="search"
        @edit="onEdit"
        @delete="onDelete"
      />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { BOOKMAKER, MODAL } from "~/services/mutants";
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  data: () => ({
    search: ""
  }),
  computed: {
    ...mapState("bookmaker", ["bookmakers"])
  },
  methods: {
    ...mapActions("bookmaker", [
      BOOKMAKER.BOOKMAKERS,
      BOOKMAKER.DELETE_BOOKMAKER
    ]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    onCreate() {
      this.showModal({
        componentName: "Bookmaker",
        title: "Create Bookmaker"
      });
    },
    onEdit(bookmaker) {
      this.showModal({
        componentName: "Bookmaker",
        title: "Edit Bookmaker",
        componentData: bookmaker,
        mode: "edit"
      });
    },
    async handleCurrentChange(page) {
      await this.getBookmakers({ page });
    },
    async onDelete(id) {
      this.$setLoader();
      await this.deleteBookmaker(id);
      this.$offLoader();
    }
  },
  metaInfo() {
    return {
      title: "My Sexy Bookmakers",
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
