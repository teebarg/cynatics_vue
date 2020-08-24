import { ROLE } from "~/services/mutants";
import { ApiEndPoint } from "~/services/constants";

export const state = () => ({
  roles: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
});

export const mutations = {
  [ROLE.ROLES](state, { data, current_page, per_page, total }) {
    state.roles = data;
    state.pagination = { current_page, per_page, total };
  },
  [ROLE.CREATE_ROLE](state, role) {
    state.roles = [role, ...state.roles];
  },
  [ROLE.UPDATE_ROLE](state, role) {
    const index = state.roles.findIndex(item => item.id === role.id);
    state.roles.splice(index, 1, role);
  },
  [ROLE.DELETE_ROLE](state, id) {
    state.roles = state.roles.filter(role => role.id !== id);
  }
};

export const actions = {
  async [ROLE.ROLES]({ commit }) {
    const { data } = await this.$axios.$get(ApiEndPoint.ROLE);
    commit(ROLE.ROLES, data);
  },
  async [ROLE.CREATE_ROLE]({ commit }, payload) {
    try {
      const { data } = await this.$axios.$post(ApiEndPoint.ROLE, payload);
      commit(ROLE.CREATE_ROLE, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [ROLE.MANAGE_PERMISSIONS]({ commit }, { payload, id }) {
    try {
      const { data } = await this.$axios.$post(
        `${ApiEndPoint.ROLE}/${id}/permissions`,
        payload
      );
      commit(ROLE.UPDATE_ROLE, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [ROLE.UPDATE_ROLE]({ commit }, { payload, id }) {
    try {
      const { data } = await this.$axios.$put(
        `${ApiEndPoint.ROLE}/${id}`,
        payload
      );
      commit(ROLE.UPDATE_ROLE, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [ROLE.DELETE_ROLE]({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.ROLE + "/" + id);
    commit(ROLE.DELETE_ROLE, id);
    this.$showSnackbar();
  }
};
