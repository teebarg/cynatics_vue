<template>
  <div>
    <el-button type="danger" size="small" @click="onCreate"
      >Add a Match to Slip</el-button
    >
    <TableGameItem :tableData="tableData" @edit="onEdit" @delete="onDelete" @odd="manageTag" />
  </div>
</template>
<script>
import { GAME_ITEM, MODAL } from "~/services/mutants";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data:() => ({}),
  props: {
    tableData: {
      type: Array,
      default: []
    },
    gameId: Number
  },
  methods: {
    ...mapActions("gameItem", [ GAME_ITEM.DELETE_GAME_ITEM ]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    onCreate() {
      this.showModal({
        componentName: "GameItem",
        title: "Add Match",
        componentData: { game_id: this.gameId },
      });
    },
    onEdit(item) {
      this.showModal({
        componentName: "GameItem",
        title: "Edit Match",
        componentData: item,
        mode: "edit"
      });
    },
    async onDelete(id) {
      await this.deleteGameItem({ id, game_id: this.gameId });
    },
    manageTag(item) {
      this.showModal({
        componentName: "GameItemOdd",
        title: "Game Odds",
        componentData: item,
      });
    }
  }
};
</script>
