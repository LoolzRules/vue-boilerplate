<template lang="pug">
  - const attrs = {target: "_blank", rel: "noopener",}
  div.hello
    h1 {{ msg }}
    p For a guide and recipes on how to configure/customize this project, #[br] check out the
      |  #[a(href="https://cli.vuejs.org")&attributes(attrs) vue-cli documentation].

    h3 Installed CLI Plugins
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
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router")&attributes(attrs) router
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex")&attributes(attrs) vuex
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint")&attributes(attrs) eslint

    h3 Essential Links
    ul
      li
        a(href="https://vuejs.org")&attributes(attrs) Core Docs
      li
        a(href="https://forum.vuejs.org")&attributes(attrs) Forum
      li
        a(href="https://chat.vuejs.org")&attributes(attrs) Community Chat
      li
        a(href="https://twitter.com/vuejs")&attributes(attrs) Twitter
      li
        a(href="https://news.vuejs.org")&attributes(attrs) News

    h3 Ecosystem
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
