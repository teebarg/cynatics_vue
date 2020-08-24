import { Notification } from 'element-ui'
import { COUNTRY } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({
  countries: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
})

export const mutations = {
  [COUNTRY.COUNTRIES] (state, { data, current_page, per_page, total }) {
    state.countries = data
    state.pagination = { current_page, per_page, total }
  },
  [COUNTRY.CREATE_COUNTRY] (state, country) {
    state.countries = [country, ...state.countries]
  },
  [COUNTRY.UPDATE_COUNTRY] (state, country) {
    const index = state.countries.findIndex(item => item.id === country.id)
    state.countries.splice(index, 1, country);
  },
  [COUNTRY.DELETE_COUNTRY] (state, id) {
    state.countries = state.countries.filter(country => country.id !== id)
  }
}

export const actions = {
  async [COUNTRY.COUNTRIES] ({ commit }, q = '') {
    const { data } = await this.$axios.$get(ApiEndPoint.COUNTRY +  Utility.getQueryParams(q))
    commit(COUNTRY.COUNTRIES, data)
  },
  async [COUNTRY.CREATE_COUNTRY] ({ commit }, payload) {
    const { data } = await this.$axios.$post(ApiEndPoint.COUNTRY, payload)
    commit(COUNTRY.CREATE_COUNTRY, data)
    this.$showSnackbar('Country Created Successfully')
  },
  async [COUNTRY.UPDATE_COUNTRY] ({ commit }, { payload, id }) {
    const { data } = await this.$axios.$put(`${ApiEndPoint.COUNTRY}/${id}`, payload)
    commit(COUNTRY.UPDATE_COUNTRY, data)
    this.$showSnackbar()
  },
  async [COUNTRY.DELETE_COUNTRY] ({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.COUNTRY + '/' + id)
    commit(COUNTRY.DELETE_COUNTRY, id)
    this.$showSnackbar()
  }
}
