// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
import Vue from 'vue';
import Vuex from 'vuex';
import { createProxy, extractVuexModule } from "vuex-class-component";
import StateModule from './StateModule'

//Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(StateModule)
  }
})
export const vxm = {
  user: createProxy(store, StateModule),
}
