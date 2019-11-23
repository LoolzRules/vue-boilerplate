<template lang="pug">
  - const attrs = {target: "_blank", rel: "noopener",}
  v-flex(shrink)
    h1 {{ msg }}
    p
      | {{ $t('components.HelloWorld._main[0]') }}
      br
      | {{ $t('components.HelloWorld._main[1]') }}
      a(href="https://cli.vuejs.org")&attributes(attrs) {{ $t('components.HelloWorld._main[2]') }}
      | .

    h3 {{ $t('components.HelloWorld.installedPlugins') }}
    ul
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel")&attributes(attrs) babel
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript")&attributes(attrs) typescript
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa")&attributes(attrs) pwa
      li
        a(href="https://github.com/vuetifyjs/vue-cli-plugin-vuetify")&attributes(attrs) vuetify
      li
        a(href=" https://github.com/kazupon/vue-cli-plugin-i18n")&attributes(attrs) vue-i18n
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router")&attributes(attrs) router
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex")&attributes(attrs) vuex
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint")&attributes(attrs) eslint

    h3 {{ $t("components.HelloWorld.essentialLinks._main") }}
    ul
      li
        a(href="https://vuejs.org")&attributes(attrs) {{ $t("components.HelloWorld.essentialLinks.coreDocs") }}
      li
        a(href="https://forum.vuejs.org")&attributes(attrs) {{ $t("components.HelloWorld.essentialLinks.forum") }}
      li
        a(href="https://chat.vuejs.org")&attributes(attrs) {{ $t("components.HelloWorld.essentialLinks.communityChat") }}
      li
        a(href="https://twitter.com/vuejs")&attributes(attrs) {{ $t("components.HelloWorld.essentialLinks.twitter") }}
      li
        a(href="https://news.vuejs.org")&attributes(attrs) {{ $t("components.HelloWorld.essentialLinks.news") }}

    h3 {{ $t("components.HelloWorld.ecosystem") }}
    ul
      li
        a(href="https://router.vuejs.org")&attributes(attrs) vue-router
      li
        a(href="https://vuex.vuejs.org")&attributes(attrs) vuex
      li
        a(href="https://github.com/vuejs/vue-devtools#vue-devtools")&attributes(attrs) vue-devtools
      li
        a(href="https://vue-loader.vuejs.org")&attributes(attrs) vue-loader
      li
        a(href="https://github.com/vuejs/awesome-vue")&attributes(attrs) awesome-vue

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component( {
  name: 'hello-world',
} )
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
}
</script>

<style lang="sass">
h3
  margin: 40px 0 0

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>
