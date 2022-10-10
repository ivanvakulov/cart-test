import Vue from 'vue';
import Vuex from 'vuex';
import { IGlobalState } from "@/store/modules/GlobalStore";

Vue.use(Vuex);

export interface IRootState {
  GlobalStore: IGlobalState
}

export default new Vuex.Store<IRootState>({})
