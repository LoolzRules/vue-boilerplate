import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ru from 'vuetify/src/locale/ru'
import en from 'vuetify/src/locale/en'

Vue.use( Vuetify )

export default new Vuetify( {
  lang: {
    locales: { en, ru, },
    current: 'en',
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#4034A1',
        secondary: '#888888',
        accent: '#ee44aa',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
} )
