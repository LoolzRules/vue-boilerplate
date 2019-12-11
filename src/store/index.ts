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
        localStorage.setItem( state.localStorageKeys.locale, `${newLocaleIndex}` )
      }
    },
    SET_THEME( state: CoreState, isDark: boolean ): void {
      state.themeIsDark = isDark
      localStorage.setItem( state.localStorageKeys.theme, `${isDark}` )
    },
  },
  actions: {
    setLocale( { commit, state, }, index: number ): void {
      commit( 'SET_LOCALE', index )
    },
    setTheme( { commit, state, }, isDark: boolean ): void {
      commit( 'SET_THEME', isDark )
    },
  },
  modules: {},
  getters: {
    currentLocale( state: CoreState ): string {
      return state.locales[state.localeIndex]
    },
  },
} )
