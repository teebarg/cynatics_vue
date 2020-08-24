import { ERROR } from '~/services/mutants'

export const state = () => ({
  error: null
})

export const mutations = {
  [ERROR.CREATE_ERROR] (state, data) {
    state.error = data
  },
  [ERROR.CLEAR_ERROR] (state) {
    state.error = null
  }
}

export const actions = {
  async [ERROR.CREATE_ERROR] ({ commit }, payload) {
    commit(ERROR.CREATE_ERROR, payload)
  }
}
