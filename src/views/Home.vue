<template lang="pug">
  v-container#home(fill-height)
    v-layout(justify-center, align-center, column)
      h1.mb-2(v-t="'views.Home.main'")
      v-skeleton-loader(v-if="loading", type="text", width="180px", loading)
      span(v-else v-t="`views.Home.loadedText[${+success}]`")
</template>

<script lang="ts">
import { getSomething } from '@/requests'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  loading: boolean = true
  success: boolean = false

  mounted() {
    this.requestSomething()
  }

  requestSomething(): void {
    getSomething()
      .then( resp => {
        console.info( `Here is the info I tried to load: ${resp}` )
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
}
</script>

<style lang="sass">

.v-skeleton-loader__text
  height: 16px !important
  margin: 4px 0
  border-radius: 8px

</style>
