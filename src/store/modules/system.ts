import { User } from "./../../mocks/index"
import type { Module } from "vuex"
import { getMenus } from "@/api"
export default {
  namespaced: true,
  state: {
    logo: "",
    menus: [],
  },
  mutations: {
    SET_MENUS(state, payload) {
      state.menus = payload
    },
  },
  actions: {
    SET_MENUS({ commit, }) {
      getMenus<User>().then((res) => commit("SET_MENUS", res.data))
    },
  },
} as Module<User, any>
