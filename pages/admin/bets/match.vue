<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter state="gameItem" action="getGameItems" />
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Matches</h2>
      </div>
    </template>
    <template v-slot:body>
      <TableGameItem :tableData="gameItems" @edit="onEdit" @delete="onDelete" @odd="manageTag" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { GAME_ITEM, MODAL } from "~/services/mutants";
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch() {
    await this.getGameItems();
  },
  computed: {
    ...mapState("gameItem", ["gameItems", "pagination"])
  },
  methods: {
    ...mapActions("gameItem", [
      GAME_ITEM.GAME_ITEMS,
      GAME_ITEM.DELETE_GAME_ITEM
    ]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    async onPageChange(page) {
      await this.getGameItems({ page });
    },
    onEdit(game) {
      this.showModal({componentName: 'GameItem', title: 'Edit Match', componentData: game, mode: "edit"})
    },
    manageTag(game) {
      this.showModal({componentName: 'GameItemOdd', title: 'Game Odds', componentData: game})
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
