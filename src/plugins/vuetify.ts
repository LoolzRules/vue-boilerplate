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
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
} )
