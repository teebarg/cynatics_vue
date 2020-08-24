import { PERMISSION } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({
  permissions: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
})

export const mutations = {
  [PERMISSION.PERMISSIONS] (state, { data, current_page, per_page, total }) {
    state.permissions = data
    state.pagination = { current_page, per_page, total }
  },
  [PERMISSION.CREATE_PERMISSION] (state, permission) {
    state.permissions = [permission, ...state.permissions]
  },
  [PERMISSION.UPDATE_PERMISSION] (state, permission) {
    const index = state.permissions.findIndex(item => item.id === permission.id);
    state.permissions.splice(index, 1, permission);
  },
  [PERMISSION.DELETE_PERMISSION] (state, id) {
    state.permissions = state.permissions.filter(permission => permission.id !== id)
  }
}

export const actions = {
  async [PERMISSION.PERMISSIONS] ({ commit }, q = '') {
    const { data } = await this.$axios.$get(ApiEndPoint.PERMISSION + Utility.getQueryParams(q))
    commit(PERMISSION.PERMISSIONS, data)
  },
  async [PERMISSION.CREATE_PERMISSION] ({ commit }, payload) {
    try {
      const { data } = await this.$axios.$post(ApiEndPoint.PERMISSION, payload);
      commit(PERMISSION.CREATE_PERMISSION, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [PERMISSION.UPDATE_PERMISSION] ({ commit }, { payload, id }) {
    try {
      const { data } = await this.$axios.$put(`${ApiEndPoint.PERMISSION}/${id}`, payload );
      commit(PERMISSION.UPDATE_PERMISSION, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [PERMISSION.DELETE_PERMISSION] ({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.PERMISSION + '/' + id)
    commit(PERMISSION.DELETE_PERMISSION, id)
    this.$showSnackbar()
  }
}
