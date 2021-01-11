import type { Module } from "vuex"
import { getMenus } from "@/api"
export default {
  namespaced: true,
  state: {
    menus: [],
  },
  mutations: {
    SET_MENUS(state, payload) {
      state.menus = payload
    },
  },
  actions: {
    SET_MENUS({ commit }) {
      getMenus().then((res) => commit("SET_MENUS", res))
    },
  },
} as Module<any, any>
