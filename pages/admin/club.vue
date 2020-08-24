<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter state="club" action="getClubs" />
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Clubs</h2>
        <div>
          <el-button size="mini" type="primary" @click="onCreate">
            Create Club
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <TableClub @edit="onEdit" @delete="onDelete" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { CLUB, MODAL } from "~/services/mutants";
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch() {
    await this.getClubs();
  },
  data: () => ({}),
  computed: {
    ...mapState("club", ["pagination"])
  },
  methods: {
    ...mapActions("club", [CLUB.CLUBS, CLUB.DELETE_CLUB]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    onCreate() {
      this.showModal({
        componentName: "Club",
        title: "Create Club"
      });
    },
    onEdit(club) {
      this.showModal({
        componentName: "Club",
        title: "Edit Club",
        componentData: club,
        mode: "edit"
      });
    },
    async onPageChange(page) {
      await this.getClubs({ page });
    },
    async onDelete(id) {
      await this.deleteClub(id);
    }
  },
  metaInfo() {
    return {
      title: "My Sexy Clubs",
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
