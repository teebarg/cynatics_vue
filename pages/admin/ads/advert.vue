<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter :name="false" state="game" action="getGames" />
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Games</h2>
        <div>
          <el-button size="mini" type="secondary" @click="showModal({componentName: 'GameCreate', title: 'Upload Game'})">
            Create Game
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <TableGame @edit="onEdit" @delete="onDelete" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { GAME, MODAL } from "~/services/mutants";
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch() {
    await this.getGames();
  },
  computed: {
    ...mapState("game", ["pagination"])
  },
  methods: {
    ...mapActions("game", [
      GAME.GAMES,
      GAME.DELETE_GAME
    ]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    async onPageChange(page) {
      await this.getGames({ page });
    },
    onEdit(game) {
      this.showModal({componentName: 'GameEdit', title: 'Edit Game', componentData: game})
    },
    async onDelete(id) {
      await this.deleteGame(id);
    }
  },
  metaInfo() {
    return {
      title: "My Sexy Games",
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
