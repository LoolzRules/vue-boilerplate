<template lang="pug">
  v-container#home(fill-height)
    v-layout(justify-center, align-center, column)
      login-form

      h3.mt-4(v-t="'views.Home.main'")
      v-skeleton-loader(v-if="loading", type="text", width="180px", loading)
      h4(v-else) {{ success ? message : $t( 'views.Home.loadedText' ) }}

</template>

<script lang="ts">
import { getSomething } from '@/requests'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import LoginForm from '@/components/LoginForm.vue'

@Component( {
  components: {
    LoginForm,
  },
} )
export default class Home extends Vue {
  @Getter currentLocale!: string

  loading: boolean = true
  success: boolean = false
  message: string = ''

  mounted() {
    this.requestSomething()
  }

  @Watch( 'currentLocale' )
  onErrorsShouldChange(): void {
    // perform api request due to locale change
    this.requestSomething()
  }

  requestSomething(): void {
    getSomething()
      .then( resp => {
        this.message = resp.message
        this.success = true
      } )
      .catch( _ => {
        console.error( 'Bad connection with API' )
        this.success = false
      } )
      .finally( () => {
        this.loading = false
      } )
  }
}
</script>

<style lang="sass">

.v-skeleton-loader__text
  height: 16px !important
  margin: 4px 0
  border-radius: 8px

</style>
