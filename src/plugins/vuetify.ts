import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ru from 'vuetify/src/locale/ru'
import en from 'vuetify/src/locale/en'
import colors from 'vuetify/lib/util/colors'

Vue.use( Vuetify )

export default new Vuetify( {
  lang: {
    locales: { en, ru, },
    current: 'en',
  },
  theme: {
    options: {
      customProperties: true,
      minifyTheme( css ) {
        return process.env.NODE_ENV === 'production'
          ? css.replace( /[\r\n]/g, '' )
          : css
      },
    },
    themes: {
      light: {
        primary: colors.indigo.base,
        secondary: colors.grey.base,
        accent: colors.pink.base,
        error: colors.red.base,
        info: colors.lightBlue.base,
        success: colors.green.base,
        warning: colors.orange.base,
        anchor: colors.green.base,
      },
      dark: {
        primary: colors.grey.darken4,
        secondary: colors.grey.lighten1,
        anchor: colors.green.base,
      },
    },
  },
} )
