import { MARKET } from "~/services/mutants";
import { ApiEndPoint } from "~/services/constants";
import { Utility } from "~/services/utility";

export const state = () => ({
  markets: []
});

export const mutations = {
  [MARKET.MARKETS](state, markets) {
    state.markets = markets;
  },
  [MARKET.CREATE_MARKET](state, market) {
    state.markets = [market, ...state.markets];
  },
  [MARKET.UPDATE_MARKET](state, market) {
    const index = state.markets.findIndex(item => item.id === market.id);
    state.markets.splice(index, 1, market);
  },
  [MARKET.DELETE_MARKET](state, id) {
    state.markets = state.markets.filter(market => market.id !== id);
  }
};

export const actions = {
  async [MARKET.MARKETS]({ commit }, q = "") {
    const { data } = await this.$axios.$get(
      ApiEndPoint.MARKET + Utility.getQueryParams(q)
    );
    commit(MARKET.MARKETS, data);
  },
  async [MARKET.CREATE_MARKET]({ commit }, payload) {
    try {
      const { data } = await this.$axios.$post(ApiEndPoint.MARKET, payload);
      commit(MARKET.CREATE_MARKET, data);
      this.$showSnackbar("Market Created Successfully");
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [MARKET.UPDATE_MARKET]({ commit }, { payload, id }) {
    try {
      const { data } = await this.$axios.$put(
        `${ApiEndPoint.MARKET}/${id}`,
        payload
      );
      commit(MARKET.UPDATE_MARKET, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [MARKET.DELETE_MARKET]({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.MARKET + "/" + id);
    commit(MARKET.DELETE_MARKET, id);
    this.$showSnackbar();
  }
};
