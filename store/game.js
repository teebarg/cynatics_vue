import { Notification } from 'element-ui'
import { GAME } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({
  games: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
})

export const mutations = {
  [GAME.GAMES] (state, { data, current_page, per_page, total }) {
    state.games = data
    state.pagination = { current_page, per_page, total }
  },
  [GAME.CREATE_GAME] (state, game) {
    state.games = state.games.concat(game)
  },
  [GAME.UPDATE_GAME] (state, { data, id }) {
    const index = state.games.findIndex(item => item.id === id)
    state.games.splice(index, 1, data);
  },
  [GAME.ADD_GAME_ITEM] (state, { data, id }) {
    const index = state.games.findIndex(item => item.id === id)
    state.games[index].game_items = [ ...state.games[index].game_items, data];
  },
  [GAME.MANAGE_GAME_ITEM] (state, { data, id }) {
    const index = state.games.findIndex(item => item.id === id)
    const i = state.games[index].game_items.findIndex(item => item.id === data.id)
    state.games[index].game_items.splice(i, 1, data)
  },
  [GAME.DELETE_GAME] (state, id) {
    state.games = state.games.filter(game => game.id !== id)
  },
  [GAME.DELETE_GAME_ITEM] (state, { id, game_id }) {
    const index = state.games.findIndex(item => item.id === game_id)
    state.games[index].game_items = state.games[index].game_items.filter(gameItem => gameItem.id !== id)
  }
}

export const actions = {
  async [GAME.GAMES] ({ commit }, q = '') {
    const { data } = await this.$axios.$get(ApiEndPoint.GAME + Utility.getQueryParams(q))
    commit(GAME.GAMES, data)
  },
  async [GAME.CREATE_GAME] ({ commit }, payload) {
    const { data } = await this.$axios.$post(ApiEndPoint.GAME, payload, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    })
    commit(GAME.CREATE_GAME, data)
    this.$showSnackbar('Game Created Successfully')
  },
  async [GAME.UPDATE_GAME] ({ commit }, { payload, id }) {
    const { data } = await this.$axios.$put(`${ApiEndPoint.GAME}/${id}`, payload)
    commit(GAME.UPDATE_GAME, {data, id})
    this.$showSnackbar()
  },
  async [GAME.DELETE_GAME] ({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.GAME + '/' + id)
    commit(GAME.DELETE_GAME, id)
    this.$showSnackbar()
  },
  async [GAME.MANAGE_GAME_ODDS] ({ commit }, {id, payload}) {
    const { data } =  await this.$axios.$patch(ApiEndPoint.GAME + '/' + id + '/odds', payload)
    commit(GAME.UPDATE_GAME, {data, id})
    this.$showSnackbar()
  }
}
