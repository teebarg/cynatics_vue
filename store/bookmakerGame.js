import { BOOKMAKER_GAME } from "~/services/mutants";
import { ApiEndPoint } from "~/services/constants";

export const actions = {
  async [BOOKMAKER_GAME.CREATE_BOOKMAKER_GAME]( { commit }, { id, bookmaker_id, booking_number } ) {
    try {
      const { data } = await this.$axios.$post(
        `${ApiEndPoint.BOOKMAKER_GAME}/${id}/${bookmaker_id}`,
        { booking_number }
      );
      commit('game/updateGame', { id, data }, {root: true})
      commit('modal/showModal', { componentData: data }, {root: true})
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [BOOKMAKER_GAME.DELETE_BOOKMAKER_GAME]({ commit }, { id, bookmaker_id }) {
    try {
      const { data } = await this.$axios.$delete(
        `${ApiEndPoint.BOOKMAKER_GAME}/${id}/${bookmaker_id}`);
      commit('game/updateGame', { id, data }, {root: true})
      commit('modal/showModal', { componentData: data }, {root: true})
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  }
};
