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
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        },
      ],
    },
  },
  pwa: {
    workboxOptions: {
      exclude: [
        /fonts/,
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
