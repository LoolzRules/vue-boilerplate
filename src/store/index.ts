import Vue from 'vue'
import Vuex from 'vuex'
import { CoreState } from '@/store/CoreState'

Vue.use( Vuex )

export default new Vuex.Store( {
  state: new CoreState(),
  mutations: {
    SET_LOCALE( state: CoreState, newLocaleIndex: number ): void {
      if ( newLocaleIndex < state.locales.length ) {
        state.localeIndex = newLocaleIndex
      }
    },
  },
  actions: {
    setLocale( { commit, state, }, index: number ): void {
      commit( 'SET_LOCALE', index )
    },
  },
  modules: {},
} )
