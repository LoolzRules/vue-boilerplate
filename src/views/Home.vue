<template lang="pug">
  v-container#home(fill-height)
    v-layout(justify-center, align-center, column)
      v-card(width="400", min-width="300")
        v-card-title(v-t="'views.Home.loginForm.title'")
        v-card-text
          v-form(ref="form", v-model="valid")
            v-text-field(
              v-model="name",
              :counter="maxNameLength",
              :rules="nameRules",
              :label="$t('views.Home.loginForm.name.label')",
              required,
              color="secondary",
            )
            v-text-field(
              v-model="email",
              :rules="emailRules",
              :label="$t('views.Home.loginForm.email.label')",
              required,
              color="secondary",
            )
            v-btn.mt-4(
              :disabled="!valid",
              @click="submit"
              v-t="'views.Home.loginForm.submit'"
            )

      h3.my-4(v-t="'views.Home.main'")
      v-skeleton-loader(v-if="loading", type="text", width="180px", loading)
      h4(v-else v-t="`views.Home.loadedText[${+success}]`")

</template>

<script lang="ts">
import { getSomething } from '@/requests'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  loading: boolean = true
  success: boolean = false
  valid: boolean = false

  mounted() {
    this.requestSomething()
  }

  requestSomething(): void {
    getSomething()
      .then( resp => {
        console.info( `Here is what I requested: ${resp.message}` )
        this.success = true
      } )
      .catch( () => {
        console.error( 'Bad connection with backend?' )
        this.success = false
      } )
      .finally( () => {
        this.loading = false
      } )
  }

  name: string = ''
  maxNameLength: number = 10
  nameRules: ( ( v: string ) => boolean | string )[] = [
    v => !!v || this.$root.$t( 'views.Home.loginForm.name.errors[0]' ) as string,
    v => ( v.length <= this.maxNameLength ) || this.$root.$t( 'views.Home.loginForm.name.errors[1]' ) as string,
  ]

  email: string = ''
  emailRules: ( ( v: string ) => boolean | string )[] = [
    v => !!v || this.$root.$t( 'views.Home.loginForm.email.errors[0]' ) as string,
    v => /.+@.+\..+/.test( v ) || this.$root.$t( 'views.Home.loginForm.email.errors[1]' ) as string,
  ]

  @Watch( '$i18n.locale' )
  onErrorsShouldChange(): void {
    ( this.$refs.form as HTMLFormElement ).validate()
  }

  submit(): void {
    console.info( 'Sending request' )
  }
}
</script>

<style lang="sass">

.v-skeleton-loader__text
  height: 16px !important
  margin: 4px 0
  border-radius: 8px

</style>
