<template lang="pug">
  - const attrs = { target: "_blank", rel: "noopener" }
  v-flex(shrink)
    h1 {{ msg }}
    p
      | {{ $t('components.Info.main[0]') }}
      br
      | {{ $t('components.Info.main[1]') }}
      a(href="https://cli.vuejs.org")&attributes(attrs) {{ $t('components.Info.main[2]') }}
      | .
    -
      const sections = [
        {
          header: "{{ $t('components.Info.installedPlugins') }}",
          links: [
            { link: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel", text: "babel" },
            {
              link: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
              text: "typescript"
            },
            { link: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa", text: "pwa" },
            { link: "https://github.com/vuetifyjs/vue-cli-plugin-vuetify", text: "vuetify" },
            { link: "https://github.com/kazupon/vue-cli-plugin-i18n", text: "vue-i18n" },
            { link: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router", text: "router" },
            { link: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex", text: "vuex" },
            { link: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint", text: "eslint" },
          ]
        },
        {
          header: "{{ $t('components.Info.essentialLinks._main') }}",
          links: [
            { link: "https://vuejs.org", text: "{{ $t('components.Info.essentialLinks.coreDocs') }}" },
            { link: "https://forum.vuejs.org", text: "{{ $t('components.Info.essentialLinks.forum') }}" },
            { link: "https://chat.vuejs.org", text: "{{ $t('components.Info.essentialLinks.communityChat') }}" },
            { link: "https://twitter.com/vuejs", text: "{{ $t('components.Info.essentialLinks.twitter') }}" },
            { link: "https://news.vuejs.org", text: "{{ $t('components.Info.essentialLinks.news') }}" },
          ]
        },
        {
          header: "{{ $t('components.Info.ecosystem') }}",
          links: [
            { link: "https://router.vuejs.org", text: "vue-router" },
            { link: "https://vuex.vuejs.org", text: "vuex" },
            { link: "https://github.com/vuejs/vue-devtools#vue-devtools", text: "vue-devtools" },
            { link: "https://vue-loader.vuejs.org", text: "vue-loader" },
            { link: "https://github.com/vuejs/awesome-vue", text: "awesome-vue" },
          ]
        },
      ]

    each section in sections
      h3.mt-8= section.header
      ul.pa-0
        each item in section.links
          li.mx-2
            a(href=item.link)&attributes(attrs)= item.text

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
