<template lang="pug">
  v-app
    v-navigation-drawer(app, v-model='drawer')
      v-toolbar(color='primary', dark)
        v-toolbar-title {{ $t('App.name') }}
      v-list(dense)
        -
          const routes = [
            {
              name: "home",
              icon: "mdi-home-outline",
              text: "{{ $t('App.nav.home') }}"
            },
            {
              name: "about",
              icon: "mdi-information-outline",
              text: "{{ $t('App.nav.about') }}"
            },
          ]

        each route in routes
          v-list-item(:to=`{ name: "${route.name}" }`)
            v-list-item-icon
              v-icon= route.icon
            v-list-item-content
              v-list-item-title= route.text

        v-divider.my-2

        -
          const links = [
            {
              href: "https://github.com/LoolzRules/vue-boilerplate",
              icon: "mdi-github-circle",
              text: "{{ $t('App.nav.github') }}"
            }
          ]

        each link in links
          v-list-item(href=link.href, target='_blank')
            v-list-item-icon
              v-icon= link.icon
            v-list-item-content
              v-list-item-title= link.text

    v-app-bar(app, color='primary', dark)
      v-app-bar-nav-icon(@click='switchDrawer')
      v-spacer
      v-toolbar-items
        v-menu(absolute, v-model='localeMenu')
          template(v-slot:activator='{ on }')
            v-btn(v-on='on', depressed, icon) {{ locales[localeIndex] }}
          template(v-slot:default)
            v-list
              v-list-item(
                v-for='(locale, index) in locales',
                :key='index',
                @click='updateLocale(index)',
              )
                v-list-item-title {{ locale.toUpperCase() }}

        v-btn(@click='switchTheme', depressed, icon)
          v-icon mdi-theme-light-dark

    v-content
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component( {
  computed: {
    ...mapState( [
      'locales',
      'localeIndex',
      'themeIsDark',
    ] ),
  },
} )
export default class App extends Vue {
  // mapped from global state
  public locales!: Array<string>
  public localeIndex!: number
  public themeIsDark!: boolean

  // local state
  public drawer: boolean = false
  public localeMenu: boolean = false

  beforeMount() {
    // initialise properties from localStorage (or use default values)
    this.$i18n.locale = this.locales[this.localeIndex]
    this.$vuetify.lang.current = this.locales[this.localeIndex]
    this.$vuetify.theme.dark = this.themeIsDark
  }

  switchDrawer(): void {
    this.drawer = !this.drawer
  }

  updateLocale( index: number ): void {
    this.$store.dispatch( 'setLocale', index )
      .then( _ => {
        this.$i18n.locale = this.locales[this.localeIndex]
        this.$vuetify.lang.current = this.locales[this.localeIndex]
      } )
  }

  switchTheme(): void {
    this.$store.dispatch( 'setThemeToDark', !this.themeIsDark )
      .then( _ => {
        this.$vuetify.theme.dark = this.themeIsDark
      } )
  }
}
</script>
