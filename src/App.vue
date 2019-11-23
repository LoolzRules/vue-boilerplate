<template lang="pug">
  v-app
    v-navigation-drawer(app, v-model='drawer')
      v-toolbar(color='primary', dark)
        v-toolbar-title {{ $t('App.name') }}
      v-list(dense)
        -
          const items = [
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

        each item in items
          v-list-item(:to=`{ name: "${item.name}" }`)
            v-list-item-icon
              v-icon= item.icon
            v-list-item-content
              v-list-item-title= item.text

    v-app-bar(app, color='primary', dark)
      v-app-bar-nav-icon(@click='switchDrawer')
      v-spacer
      v-toolbar-items
        v-menu(absolute, v-model='localeMenu')
          template(v-slot:activator='{ on }')
            v-btn(color='primary', depressed, v-on='on') {{ locales[localeIndex] }}
          template(v-slot:default)
            v-list
              v-list-item(
                v-for='(locale, index) in locales'
                :key='index'
                @click='updateLocale(index)'
              )
                v-list-item-title {{ locale.toUpperCase() }}
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
    ] ),
  },
} )
export default class App extends Vue {
  public locales!: Array<string>
  public localeIndex!: number
  public drawer: boolean = false
  public localeMenu: boolean = false

  updateLocale( index: number ): void {
    this.$store.dispatch( 'setLocale', index )
      .then( _ => {
        this.$i18n.locale = this.locales[this.localeIndex]
        this.$vuetify.lang.current = this.locales[this.localeIndex]
      } )
  }

  switchDrawer(): void {
    this.drawer = !this.drawer
  }
}
</script>
