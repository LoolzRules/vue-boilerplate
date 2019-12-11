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
  chainWebpack: config => {
    config.module
      .rule( 'fonts' ).uses.clear()

    config.module
      .rule( 'fonts' )
      .test( /\.(woff2?|eot|ttf|otf)(\?.*)?$/i )
      .use( 'loader' )
      .loader( 'file-loader' )
      .options( {
        name: 'fonts/[name].[ext]',
      } )
    return config
  },
  pwa: {
    workboxOptions: {
      cleanupOutdatedCaches: true,
      exclude: [
        /fonts\//,
        /img\//,
        /\.map$/,
        /^manifest.*\.js$/,
      ],
      runtimeCaching: [
        {
          urlPattern: /fonts\//,
          handler: 'CacheFirst',
        },
        {
          urlPattern: /img\//,
          handler: 'CacheFirst',
        },
      ],
      navigateFallback: '/',
      navigateFallbackBlacklist: [
        /\/api\/v1\//,
      ],
    },
  },
}
