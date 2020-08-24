import { CLUB } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({
  clubs: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
})

export const mutations = {
  [CLUB.CLUBS] (state, { data, current_page, per_page, total }) {
    state.clubs = data
    state.pagination = { current_page, per_page, total }
  },
  [CLUB.CREATE_CLUB] (state, club) {
    state.clubs = [club, ...state.clubs]
  },
  [CLUB.UPDATE_CLUB] (state, club) {
    const index = state.clubs.findIndex(item => item.id === club.id)
    state.clubs.splice(index, 1, club);
  },
  [CLUB.DELETE_CLUB] (state, id) {
    state.clubs = state.clubs.filter(club => club.id !== id)
  }
}

export const actions = {
  async [CLUB.CLUBS] ({ commit }, q = '') {
    const { data } = await this.$axios.$get(ApiEndPoint.CLUB + Utility.getQueryParams(q))
    commit(CLUB.CLUBS, data)
  },
  async [CLUB.CREATE_CLUB] ({ commit }, payload) {
    const { data } = await this.$axios.$post(ApiEndPoint.CLUB, payload)
    commit(CLUB.CREATE_CLUB, data)
    this.$showSnackbar('Club Created Successfully')
  },
  async [CLUB.UPDATE_CLUB] ({ commit }, { payload, id }) {
    const { data } = await this.$axios.$put(`${ApiEndPoint.CLUB}/${id}`, payload)
    commit(CLUB.UPDATE_CLUB, data)
    this.$showSnackbar()
  },
  async [CLUB.DELETE_CLUB] ({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.CLUB + '/' + id)
    commit(CLUB.DELETE_CLUB, id)
    this.$showSnackbar()
  }
}
