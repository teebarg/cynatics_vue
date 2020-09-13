import { ADSLOT } from "~/services/mutants";
import { ApiEndPoint } from "~/services/constants";
import { Utility } from '~/services/utility';

export const state = () => ({
  bAds: []
});

export const mutations = {
  [ADSLOT.ADSLOTS](state, { data }) {
    state.bAds = data;
  }
};

export const actions = {
  async [ADSLOT.ADSLOTS]({ commit }, q = '') {
    const { data } = await this.$axios.$get(ApiEndPoint.ADSLOT + Utility.getQueryParams(q));
    commit(ADSLOT.ADSLOTS, data);
  }
};
