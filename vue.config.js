module.exports = {
  pages: {
    index: {
      entry: './src/main.ts',
      template: './src/index.pug',
    },
  },
  transpileDependencies: [
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
  pwa: {
    workboxOptions: {
      exclude: [
        // do not match Roboto-Bold.*.woff2, Roboto-Medium.*.woff2 and Roboto-Regular.*.woff2
        /fonts\/(?!Roboto-((Bold)|(Medium)|(Regular))\..*\.woff2$)/,
        /img\/icons/,
        /\.map$/,
        /^manifest.*\.js$/,
      ],
      runtimeCaching: [
        {
          urlPattern: /fonts/,
          handler: 'CacheFirst',
        },
        {
          urlPattern: /img/,
          handler: 'CacheFirst',
        },
      ],
    },
  },
}
