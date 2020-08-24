<template>
  <div>
    <FormTag
        :tags="[...data.odds]"
        state="odd"
        action="getOdds"
        @submit="onUpdate"
      />
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex';
import { GAME_ITEM } from "~/services/mutants";

export default {
  props: {
    data: Object,
  },
  methods: {
    ...mapActions("gameItem", [
      GAME_ITEM.MANAGE_GAME_ITEM_ODDS
    ]),
    async onUpdate(e) {
      const odds = e.map(i => i.id);
      await this.manageGameItemOdds({ id: this.data.id, payload: { odds } });
    }
  }
};
</script>
