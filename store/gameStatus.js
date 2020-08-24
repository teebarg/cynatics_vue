import { GAME_STATUS } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({
  game_statuses: []
})

export const mutations = {
  [GAME_STATUS.GAME_STATUSES] (state, data) {
    state.game_statuses = data
  },
  [GAME_STATUS.CREATE_GAME_STATUS] (state, payload) {
    state.game_statuses = state.game_statuses.concat(payload)
  },
  [GAME_STATUS.DELETE_GAME_STATUS] (state, id) {
    state.game_statuses = state.game_statuses.filter(item => item.id !== id)
  }
}

export const actions = {
  async [GAME_STATUS.GAME_STATUSES] ({ commit }) {
    const { data } = await this.$axios.$get(ApiEndPoint.GAME_STATUS)
    commit(GAME_STATUS.GAME_STATUSES, data)
  },
  async [GAME_STATUS.CREATE_GAME_STATUS] ({ commit }, payload) {
    const { data } = await this.$axios.$post(ApiEndPoint.GAME_STATUS, payload)
    commit(GAME_STATUS.CREATE_GAME_STATUS, data)
    this.$showSnackbar()
  },
  async [GAME_STATUS.UPDATE_GAME_STATUS] ({ commit }, { payload, id }) {
    await this.$axios.$put(`${ApiEndPoint.GAME_STATUS}/${id}`, payload)
    this.$showSnackbar()
  },
  async [GAME_STATUS.DELETE_GAME_STATUS] ({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.GAME_STATUS + '/' + id)
    commit(GAME_STATUS.DELETE_GAME_STATUS, id)
    this.$showSnackbar()
  }
}
