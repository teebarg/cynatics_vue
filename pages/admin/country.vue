<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter state="country" action="getCountries" />
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Countries</h2>
        <div>
          <el-button size="mini" type="primary" @click="onCreate">
            Create Country
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <TableCountry @edit="onEdit" @delete="onDelete" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { COUNTRY, MODAL } from "~/services/mutants";
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch() {
    await this.getCountries();
  },
  data: () => ({}),
  computed: {
    ...mapState("country", ["countries", "pagination"])
  },
  methods: {
    ...mapActions("country", [COUNTRY.COUNTRIES, COUNTRY.DELETE_COUNTRY]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    async onPageChange(page) {
      await this.getCountries({ page });
    },
    onCreate() {
      this.showModal({
        componentName: "Country",
        title: "Create Country"
      });
    },
    onEdit(country) {
      this.showModal({
        componentName: "Country",
        title: "Edit Country",
        componentData: country,
        mode: "edit"
      });
    },
    async onDelete(id) {
      await this.deleteCountry(id);
    }
  },
  metaInfo() {
    return {
      title: "My Sexy Countries",
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
