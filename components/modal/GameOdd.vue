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
import { mapActions, mapMutations } from 'vuex';
import { GAME } from "~/services/mutants";

export default {
  props: {
    data: Object,
  },
  methods: {
    ...mapActions("game", [GAME.MANAGE_GAME_ODDS]),
    ...mapMutations("modal", ["hideModal"]),
    async onUpdate(e){
      const odds = e.map(i => i.id)
      await this.manageGameOdds({id: this.data.id,  payload: { odds } });
    }
  }
};
</script>
