import { COMPETITION } from "~/services/mutants";
import { ApiEndPoint } from "~/services/constants";
import { Utility } from "~/services/utility";

export const state = () => ({
  competitions: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
});

export const mutations = {
  [COMPETITION.COMPETITIONS](state, { data, current_page, per_page, total }) {
    state.competitions = data;
    state.pagination = { current_page, per_page, total };
  },
  [COMPETITION.CREATE_COMPETITION](state, competition) {
    state.competitions = [competition, ...state.competitions];
  },
  [COMPETITION.UPDATE_COMPETITION](state, competition) {
    const index = state.competitions.findIndex(
      item => item.id === competition.id
    );
    state.competitions.splice(index, 1, competition);
  },
  [COMPETITION.DELETE_COMPETITION](state, id) {
    state.competitions = state.competitions.filter(
      competition => competition.id !== id
    );
  }
};

export const actions = {
  async [COMPETITION.COMPETITIONS]({ commit }, q = "") {
    const { data } = await this.$axios.$get(
      ApiEndPoint.COMPETITION + Utility.getQueryParams(q)
    );
    commit(COMPETITION.COMPETITIONS, data);
  },
  async [COMPETITION.CREATE_COMPETITION]({ commit }, payload) {
    try {
      const { data } = await this.$axios.$post(
        ApiEndPoint.COMPETITION,
        payload
      );
      commit(COMPETITION.CREATE_COMPETITION, data);
      this.$showSnackbar("Competition Created Successfully");
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [COMPETITION.UPDATE_COMPETITION]({ commit }, { payload, id }) {
    try {
      const { data } = await this.$axios.$put(
        `${ApiEndPoint.COMPETITION}/${id}`,
        payload
      );
      commit(COMPETITION.UPDATE_COMPETITION, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [COMPETITION.DELETE_COMPETITION]({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.COMPETITION + "/" + id);
    commit(COMPETITION.DELETE_COMPETITION, id);
    this.$showSnackbar();
  }
};
