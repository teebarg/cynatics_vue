import { BOOKMAKER } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'

export const state = () => ({
  bookmakers: []
})

export const mutations = {
  [BOOKMAKER.BOOKMAKERS] (state, data) {
    state.bookmakers = data
  },
  [BOOKMAKER.CREATE_BOOKMAKER] (state, payload) {
    state.bookmakers = [payload, ...state.bookmakers]
  },
  [BOOKMAKER.UPDATE_BOOKMAKER](state, bookmaker) {
    const index = state.bookmakers.findIndex(
      item => item.id === bookmaker.id
    );
    state.bookmakers.splice(index, 1, bookmaker);
  },
  [BOOKMAKER.DELETE_BOOKMAKER] (state, id) {
    state.bookmakers = state.bookmakers.filter(item => item.id !== id)
  }
}

export const actions = {
  async [BOOKMAKER.BOOKMAKERS] ({ commit }) {
    const { data } = await this.$axios.$get(ApiEndPoint.BOOKMAKER)
    console.log(data)
    commit(BOOKMAKER.BOOKMAKERS, data.data)
  },
  async [BOOKMAKER.CREATE_BOOKMAKER] ({ commit }, payload) {
    try {
      const { data } = await this.$axios.$post(
        ApiEndPoint.BOOKMAKER,
        payload
      );
      commit(BOOKMAKER.CREATE_BOOKMAKER, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [BOOKMAKER.UPDATE_BOOKMAKER] ({ commit }, { payload, id }) {
    try {
      const { data } = await this.$axios.$put(
        `${ApiEndPoint.BOOKMAKER}/${id}`,
        payload
      );
      commit(BOOKMAKER.UPDATE_BOOKMAKER, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [BOOKMAKER.DELETE_BOOKMAKER] ({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.BOOKMAKER + '/' + id)
    commit(BOOKMAKER.DELETE_BOOKMAKER, id)
    this.$showSnackbar()
  }
}
