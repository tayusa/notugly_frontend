import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
// import getters from "./getters"
import mutations from "./mutations";

Vue.use(Vuex);

const state = {
  auth: {
    token: null,
    uid: null
  },
  sexList: ["WOMAN", "MAN"]
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});
