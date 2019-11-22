<template lang="pug">
  v-app
    v-navigation-drawer(app, v-model='drawer')
      v-list(dense)
        v-list-item(to='/')
          v-list-item-icon
            v-icon mdi-home-outline
          v-list-item-content
            v-list-item-title {{ $t('App.nav.home') }}
        v-list-item(to='/about')
          v-list-item-icon
            v-icon mdi-information-outline
          v-list-item-content
            v-list-item-title {{ $t('App.nav.about') }}

    v-app-bar(app, color='primary', dark)
      v-app-bar-nav-icon(@click='switchDrawer')
      v-toolbar-title {{ $t('App.name') }}
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
import { Component, Prop, Vue } from 'vue-property-decorator'
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
  @Prop( { default: false, } ) private drawer!: boolean
  @Prop( { default: false, } ) private localeMenu!: boolean

  public updateLocale( index: number ): void {
    this.$store.dispatch( 'setLocale', index )
      .then( _ => {
        this.$i18n.locale = this.locales[this.localeIndex]
        this.$vuetify.lang.current = this.locales[this.localeIndex]
      } )
  }

  public switchDrawer(): void {
    this.drawer = !this.drawer
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983

</style>
