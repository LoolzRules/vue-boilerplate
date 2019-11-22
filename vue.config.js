module.exports = {
  'pages': {
    'index': {
      'entry': './src/main.ts',
      'template': './src/index.pug',
    },
  },

  'transpileDependencies': [
    'vuetify',
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
