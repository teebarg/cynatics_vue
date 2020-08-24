import { USER } from "~/services/mutants";
import { ApiEndPoint } from "~/services/constants";

export const state = () => ({
  users: [],
  pagination: {
    current_page: 1,
    per_page: 20,
    total: 1
  }
});

export const mutations = {
  [USER.USERS](state, { data, current_page, per_page, total }) {
    state.users = data;
    state.pagination = { current_page, per_page, total };
  },
  [USER.CREATE_USER](state, user) {
    state.users = [user, ...state.users];
  },
  [USER.UPDATE_USER](state, user) {
    const index = state.users.findIndex(item => item.id === user.id);
    state.users.splice(index, 1, user);
  },
  [USER.DELETE_USER](state, id) {
    state.users = state.users.filter(user => user.id !== id);
  }
};

export const actions = {
  async [USER.USERS]({ commit }, q = "") {
    const { data } = await this.$axios.$get(
      ApiEndPoint.USER + this.$getParams(q)
    );
    commit(USER.USERS, data);
  },
  async [USER.CREATE_USER]({ commit }, payload) {
    try {
      const { data } = await this.$axios.$post(ApiEndPoint.USER, payload);
      commit(USER.CREATE_USER, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [USER.MANAGE_PERMISSIONS]({ commit }, { payload, id }) {
    try {
      const { data } = await this.$axios.$post(
        `${ApiEndPoint.USER}/${id}/permissions`,
        payload
      );
      commit(USER.UPDATE_USER, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [USER.MANAGE_ROLES]({ commit }, { payload, id }) {
    try {
      const { data } = await this.$axios.$post(
        `${ApiEndPoint.USER}/${id}/roles`,
        payload
      );
      commit(USER.UPDATE_USER, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [USER.UPDATE_USER]({ commit }, { payload, id }) {
    try {
      const { data } = await this.$axios.$put(
        `${ApiEndPoint.USER}/${id}`,
        payload
      );
      commit(USER.UPDATE_USER, data);
      this.$showSnackbar();
    } catch (error) {
      this.$commitError(error.response.data);
    }
  },
  async [USER.DELETE_USER]({ commit }, id) {
    await this.$axios.$delete(ApiEndPoint.USER + "/" + id);
    commit(USER.DELETE_USER, id);
    this.$showSnackbar();
  }
};
