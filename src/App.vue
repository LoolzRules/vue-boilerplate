<template lang="pug">
  v-app
    v-navigation-drawer(app, v-model="drawer")
      v-toolbar(color="primary", dark)
        v-toolbar-title(v-t="'App.name'")
      v-list(dense)
        -
          const routes = [
            {
              name: "home",
              icon: "home",
            },
            {
              name: "about",
              icon: "info",
            },
          ]

        each route in routes
          v-list-item(:to=`{ name: "${route.name}" }`)
            v-list-item-icon
              v-icon= `$${route.icon}`
            v-list-item-content
              v-list-item-title(v-t=`'App.nav.${route.name}'`)

        v-divider.my-2

        -
          const links = [
            {
              href: "https://github.com/LoolzRules/vue-boilerplate",
              icon: "github",
              name: "github"
            }
          ]

        each link in links
          v-list-item(href=link.href, target="_blank", rel="noopener noreferrer")
            v-list-item-icon
              v-icon= `$${link.icon}`
            v-list-item-content
              v-list-item-title(v-t=`'App.nav.${link.name}'`)

    v-app-bar(app, color="primary", dark)
      v-app-bar-nav-icon(
        @click="switchDrawer",
        :aria-label="$t( 'App.nav.drawer' )"
      )
        v-icon $menu

      v-spacer

      v-menu(absolute, v-model="localeMenu")
        template(#activator="{ on }")
          v-btn(
            v-on="on",
            :aria-label="$t( 'App.menus.localeButtonName' )",
            depressed, rounded, icon,
          ) {{ locales[localeIndex] }}
        template(#default)
          v-list
            v-list-item(
              v-for="(locale, index) in locales",
              :key="index",
              @click="updateLocale(index)",
            )
              v-list-item-title {{ locale.toUpperCase() }}

      v-btn(
        @click="switchTheme",
        :aria-label="$t( 'App.menus.themeButtonName' )",
        depressed, rounded, icon,
      )
        v-icon $theme

    v-content
      router-view
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

@Component
export default class App extends Vue {
  // mapped from global state
  @State locales!: Array<string>
  @State localeIndex!: number
  @State themeIsDark!: boolean
  @Action setLocale!: ( index: number ) => Promise<any>
  @Action setTheme!: ( themeIsDark: boolean ) => Promise<any>

  // local state
  drawer: boolean = false
  localeMenu: boolean = false

  beforeMount() {
    this.$i18n.locale = this.locales[this.localeIndex]
    this.$vuetify.lang.current = this.locales[this.localeIndex]
    this.$vuetify.theme.dark = this.themeIsDark
  }

  @Watch( '$route' )
  onTitleShouldChange(): void {
    document.title = this.$t( this.$route.meta.title ) as string
  }

  switchDrawer(): void {
    this.drawer = !this.drawer
  }

  updateLocale( index: number ): void {
    this.setLocale( index )
      .then( _ => {
        this.$i18n.locale = this.locales[this.localeIndex]
        this.$vuetify.lang.current = this.locales[this.localeIndex]
        this.onTitleShouldChange()
      } )
  }

  switchTheme(): void {
    this.setTheme( !this.themeIsDark )
      .then( _ => {
        this.$vuetify.theme.dark = this.themeIsDark
      } )
  }
}
</script>
