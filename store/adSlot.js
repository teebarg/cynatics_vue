import { ADSLOT } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({
  adSlots: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1,
    next_page_url: null
  }
})

export const mutations = {
  [ADSLOT.ADSLOTS] (state, { data, current_page, per_page, total, next_page_url }) {
    state.adSlots = data
    state.pagination = { current_page, per_page, total, next_page_url }
  },
  [ADSLOT.UPDATE_ADSLOT] (state, { data, id }) {
    const index = state.adSlots.findIndex(item => item.id === id)
    state.adSlots.splice(index, 1, data);
  },
  [ADSLOT.ADD_ADVERT] (state, { data, id }) {
    const index = state.adSlots.findIndex(item => item.id === id)
    state.adSlots[index].adverts = [ ...state.adSlots[index].adverts, data];
  },
  [ADSLOT.MANAGE_ADVERT] (state, { data, id }) {
    const index = state.adSlots.findIndex(item => item.id === id)
    const i = state.adSlots[index].adverts.findIndex(item => item.id === data.id)
    state.adSlots[index].adverts.splice(i, 1, data)
  },
  [ADSLOT.DELETE_ADSLOT] (state, id) {
    state.adSlots = state.adSlots.filter(slot => slot.id !== id)
  },
  [ADSLOT.DELETE_ADVERT] (state, { id, ad_slot_id }) {
    const index = state.adSlots.findIndex(item => item.id === ad_slot_id)
    state.adSlots[index].adverts = state.adSlots[index].adverts.filter(advert => advert.id !== id)
  }
}

export const actions = {
  async [ADSLOT.ADSLOTS] ({ commit }, q = '') {
    const { data } = await this.$axios.$get(ApiEndPoint.ADSLOT + Utility.getQueryParams(q))
    commit(ADSLOT.ADSLOTS, data)
  },
  async [ADSLOT.UPDATE_ADSLOT] ({ commit }, { payload, id }) {
    const { data } = await this.$axios.$put(`${ApiEndPoint.ADSLOT}/${id}`, payload)
    commit(ADSLOT.UPDATE_ADSLOT, {data, id})
    this.$showSnackbar()
  },
  async [ADSLOT.DELETE_ADSLOT] ({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.ADSLOT + '/' + id)
    commit(ADSLOT.DELETE_ADSLOT, id)
    this.$showSnackbar()
  }
}
