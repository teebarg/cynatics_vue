<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter state="odd" action="getOdds" :date="false">
        <template v-slot:extra="filterForm">
          <div>
            <el-select
              v-model="filterForm.filterForm.market"
              clearable
              filterable
              placeholder="Extra"
            >
              <el-option
                v-for="item in markets"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </template>
      </FormFilter>
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Odds</h2>
        <div>
          <el-button size="mini" type="primary" @click="onCreate">
            Create Odd
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <ListItem :listData="odds" @edit="onEdit" @delete="onDelete" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { ODD, MODAL } from "~/services/mutants";
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch() {
    await this.getOdds();
  },
  data: () => ({
    search: ""
  }),
  computed: {
    ...mapState("odd", ["odds", "pagination"]),
    ...mapState("market", ["markets"])
  },
  methods: {
    ...mapActions("odd", [ODD.ODDS, ODD.DELETE_ODD]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    onCreate() {
      this.showModal({
        componentName: "Odd",
        title: "Create Odd"
      });
    },
    onEdit(odd) {
      this.showModal({
        componentName: "Odd",
        title: "Edit Odd",
        componentData: odd,
        mode: "edit"
      });
    },
    async handleCurrentChange(page) {
      await this.getOdds({ page });
    },
    async onDelete(id) {
      this.$setLoader();
      await this.deleteOdd(id);
      this.$offLoader();
    },
    async onPageChange(page) {
      await this.getClubs({ page });
    }
  },
  metaInfo() {
    return {
      title: "My Sexy Odds",
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
