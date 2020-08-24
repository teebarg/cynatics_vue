import { GAME, GAME_ITEM } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({
  gameItems: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
})

export const mutations = {
  [GAME_ITEM.GAME_ITEMS] (state, { data, current_page, per_page, total }) {
    state.gameItems = data
    state.pagination = { current_page, per_page, total }
  },
  [GAME_ITEM.CREATE_GAME_ITEM] (state, gameItem) {
    state.gameItems = [gameItem, ...state.gameItems]
  },
  [GAME_ITEM.UPDATE_GAME_ITEM] (state, data) {
    const index = state.gameItems.findIndex(item => item.id === data.id)
    state.gameItems.splice(index, 1, data);
  },
  [GAME_ITEM.DELETE_GAME_ITEM] (state, id) {
    state.gameItems = state.gameItems.filter(gameItem => gameItem.id !== id)
  }
}

export const actions = {
  async [GAME_ITEM.GAME_ITEMS] ({ commit }, q = '') {
    const { data } = await this.$axios.$get(ApiEndPoint.GAME_ITEM + Utility.getQueryParams(q))
    commit(GAME_ITEM.GAME_ITEMS, data)
  },
  async [GAME_ITEM.CREATE_GAME_ITEM] ({ commit }, payload) {
    const { data } = await this.$axios.$post(ApiEndPoint.GAME_ITEM, payload)
    commit('game/addGameItem', { id: data.game_id, data}, {root: true})
    this.$showSnackbar()
  },
  async [GAME_ITEM.UPDATE_GAME_ITEM] ({ commit }, { payload, id }) {
    const { data } = await this.$axios.$put(`${ApiEndPoint.GAME_ITEM}/${id}`, payload)
    commit('game/manageGameItem', { id: data.game_id, data}, {root: true})
    commit(GAME_ITEM.UPDATE_GAME_ITEM, data)
    this.$showSnackbar()
  },
  async [GAME_ITEM.DELETE_GAME_ITEM] ({ commit }, {id, game_id}) {
    await this.$axios.$delete(ApiEndPoint.GAME_ITEM + '/' + id)
    commit(`game/${GAME.DELETE_GAME_ITEM}`, { id, game_id }, {root: true})
    commit(GAME_ITEM.DELETE_GAME_ITEM, id)
    this.$showSnackbar()
  },
  async [GAME_ITEM.MANAGE_GAME_ITEM_ODDS] ({ commit }, {id, payload}) {
    const { data } =  await this.$axios.$patch(ApiEndPoint.GAME_ITEM + '/' + id + '/odds', payload)
    commit('game/manageGameItem', { id: data.game_id, data}, {root: true})
    commit(GAME_ITEM.UPDATE_GAME_ITEM, data)
    this.$showSnackbar()
  }
}
