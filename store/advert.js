import { ADSLOT, ADVERT } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({
  adverts: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
})

export const mutations = {
  [ADVERT.ADVERTS] (state, { data, current_page, per_page, total }) {
    state.adverts = data
    state.pagination = { current_page, per_page, total }
  },
  [ADVERT.CREATE_ADVERT] (state, advert) {
    state.adverts = [advert, ...state.adverts]
  },
  [ADVERT.UPDATE_ADVERT] (state, data) {
    const index = state.adverts.findIndex(item => item.id === data.id)
    state.adverts.splice(index, 1, data);
  },
  [ADVERT.DELETE_ADVERT] (state, id) {
    state.adverts = state.adverts.filter(advert => advert.id !== id)
  }
}

export const actions = {
  async [ADVERT.ADVERTS] ({ commit }, q = '') {
    const { data } = await this.$axios.$get(ApiEndPoint.ADVERT + Utility.getQueryParams(q))
    commit(ADVERT.ADVERTS, data)
  },
  async [ADVERT.CREATE_ADVERT] ({ commit }, payload) {
    const { data } = await this.$axios.$post(ApiEndPoint.ADVERT, payload)
    commit('adSlot/addAdvert', { id: data.ad_slot_id, data}, {root: true})
    this.$showSnackbar()
  },
  async [ADVERT.UPDATE_ADVERT] ({ commit }, { payload, id }) {
    const { data } = await this.$axios.$put(`${ApiEndPoint.ADVERT}/${id}`, payload)
    commit('adSlot/manageAdvert', { id: data.ad_slot_id, data}, {root: true})
    commit(ADVERT.UPDATE_ADVERT, data)
    this.$showSnackbar()
  },
  async [ADVERT.DELETE_ADVERT] ({ commit }, {id, ad_slot_id}) {
    await this.$axios.$delete(ApiEndPoint.ADVERT + '/' + id)
    commit(`adSlot/${ADSLOT.DELETE_ADVERT}`, { id, ad_slot_id }, {root: true})
    commit(ADVERT.DELETE_ADVERT, id)
    this.$showSnackbar()
  }
}
