<template lang="pug">
  v-container#home(fill-height)
    v-layout(justify-center, align-center, column)
      h1.mb-2 {{ $t('views.Home.main') }}
      v-skeleton-loader(v-if='loading', type='text', height='24px', width='200px', loading)
      span(v-else) {{ $t(`views.Home.loadedText[${+success}]`) }}
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
        console.log( resp )
        this.success = true
      } )
      .catch( () => {
        console.log( 'Bad connection with backend?' )
        this.success = false
      } )
      .finally( () => {
        this.loading = false
      } )
  }
}
</script>
