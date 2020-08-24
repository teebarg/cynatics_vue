<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter state="competition" action="getCompetitions" />
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Competitions</h2>
        <div>
          <el-button size="mini" type="primary" @click="onCreate">
            Create Competition
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <TableCompetition @edit="onEdit" @delete="onDelete" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { COMPETITION, MODAL } from '~/services/mutants'
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch () {
    await this.getCompetitions()
  },
  data: () => ({}),
  computed: {
    ...mapState('competition', ['pagination']),
  },
  methods: {
    ...mapActions('competition', [COMPETITION.COMPETITIONS, COMPETITION.DELETE_COMPETITION]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    onCreate() {
      this.showModal({
        componentName: "Competition",
        title: "Create Competition"
      });
    },
    onEdit(competition) {
      this.showModal({
        componentName: "Competition",
        title: "Edit Competition",
        componentData: competition,
        mode: "edit"
      });
    },
    async onPageChange(page) {
      await this.getCompetitions({ page });
    },
    async onDelete(id) {
      await this.deleteCompetition(id);
    }
  },
  metaInfo () {
    return {
      title: 'My Sexy Competitions',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'This is a cool Description'
        }
      ]
    }
  }
}
</script>
