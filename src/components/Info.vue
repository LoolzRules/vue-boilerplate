<template lang="pug">
  - const attrs = { target: "_blank", rel: "noopener noreferrer" }
  v-flex(shrink)
    h1 {{ msg }}
    p
      | {{ $t('components.Info.main[0]') }}
      a(href="https://cli.vuejs.org", v-t="'components.Info.main[1]'")&attributes(attrs)
      | .
    -
      const sections = [
        [
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",
          "https://github.com/vuetifyjs/vue-cli-plugin-vuetify",
          "https://github.com/kazupon/vue-cli-plugin-i18n",
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
        ],
        [
          "https://vuejs.org",
          "https://forum.vuejs.org",
          "https://chat.vuejs.org",
          "https://twitter.com/vuejs",
          "https://news.vuejs.org",
        ],
        [
          "https://router.vuejs.org",
          "https://vuex.vuejs.org",
          "https://github.com/vuejs/vue-devtools#vue-devtools",
          "https://vue-loader.vuejs.org",
          "https://github.com/vuejs/awesome-vue",
        ]
      ]

    each section, ind in sections
      h3.mt-8(v-t=`'components.Info.sections[${ind}].title'`)
      ul.pa-0
        each link, i in section
          li.mx-2
            a(href=link v-t=`'components.Info.sections[${ind}].text[${i}]'`)&attributes(attrs)

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component( {
  name: 'info',
} )
export default class Info extends Vue {
  @Prop() private msg!: string
}
</script>

<style lang="sass">
#about
  ul
    list-style-type: none

  li
    display: inline-block
</style>
