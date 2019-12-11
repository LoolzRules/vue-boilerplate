<template lang="pug">
  v-card(width="400", min-width="300")
    v-card-title(v-t="'views.Home.loginForm.title'")
    v-card-text
      v-form(ref="form", v-model="loginFormIsValid")
        v-text-field(
          v-model="name",
          :counter="maxNameLength",
          :rules="nameRules",
          :label="$t('views.Home.loginForm.name.label')",
          type="text",
          required,
          autofocus,
          color="secondary",
        )
        v-text-field(
          v-model="email",
          :rules="emailRules",
          :label="$t('views.Home.loginForm.email.label')",
          type="email",
          required,
          color="secondary",
        )
        v-text-field(
          v-model="password",
          :rules="passwordRules",
          :counter="minPasswordLength",
          :label="$t('views.Home.loginForm.password.label')",
          type="password",
          required,
          color="secondary",
        )
        v-layout
          v-spacer
          v-btn.mt-4(
            @click="submit",
            :loading="loading",
            :disabled="!loginFormIsValid",
            color="info"
          )
            span(v-t="'views.Home.loginForm.submit'")
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component( {
  name: 'login-form',
} )
export default class LoginForm extends Vue {
  loginFormIsValid: boolean = false
  loading: boolean = false

  name: string = ''
  readonly maxNameLength: number = 16
  readonly nameRules: ( ( v: string ) => boolean | string )[] = [
    v => !!v || this.$root.$t( 'views.Home.loginForm.errors.0' ) as string,
    v => ( v.length <= this.maxNameLength ) || this.$root.$t( 'views.Home.loginForm.name.errors.0' ) as string,
  ]

  email: string = ''
  readonly emailRules: ( ( v: string ) => boolean | string )[] = [
    v => !!v || this.$root.$t( 'views.Home.loginForm.errors.0' ) as string,
    v => /.+@.+\..+/.test( v ) || this.$root.$t( 'views.Home.loginForm.email.errors.0' ) as string,
  ]

  password: string = ''
  readonly minPasswordLength: number = 10
  readonly passwordRules: ( ( v: string ) => boolean | string )[] = [
    v => !!v || this.$root.$t( 'views.Home.loginForm.errors.0' ) as string,
    v => ( v.length >= this.minPasswordLength ) || this.$root.$t( 'views.Home.loginForm.password.errors.0' ) as string,
  ]

  @Watch( '$i18n.locale' )
  onErrorsShouldChange(): void {
    ( this.$refs.form as any ).validate()
  }

  submit(): void {
    this.loading = true
    setTimeout( () => {
      this.loading = false
    }, 3000 )
  }
}
</script>
