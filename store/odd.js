import { ODD } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({
  odds: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
})

export const mutations = {
  [ODD.ODDS] (state, { data, current_page, per_page, total }) {
    state.odds = data
    state.pagination = { current_page, per_page, total }
  },
  [ODD.CREATE_ODD] (state, game) {
    state.odds = state.odds.concat(game)
  },
  [ODD.UPDATE_ODD] (state, { data, id }) {
    const index = state.odds.findIndex(item => item.id === id)
    state.odds.splice(index, 1, data);
  },
  [ODD.DELETE_ODD] (state, id) {
    state.odds = state.odds.filter(game => game.id !== id)
  }
}

export const actions = {
  async [ODD.ODDS] ({ commit }, q = '') {
    const { data } = await this.$axios.$get(ApiEndPoint.ODD + Utility.getQueryParams(q))
    commit(ODD.ODDS, data)
  },
  async [ODD.CREATE_ODD] ({ commit }, payload) {
    const { data } = await this.$axios.$post(ApiEndPoint.ODD, payload)
    commit(ODD.CREATE_ODD, data)
    this.$showSnackbar('Game Created Successfully')
  },
  async [ODD.UPDATE_ODD] ({ commit }, { payload, id }) {
    const { data } = await this.$axios.$put(`${ApiEndPoint.ODD}/${id}`, payload)
    commit(ODD.UPDATE_ODD, {data, id})
    this.$showSnackbar()
  },
  async [ODD.DELETE_ODD] ({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.ODD + '/' + id)
    commit(ODD.DELETE_ODD, id)
    this.$showSnackbar()
  }
}
