<template lang="pug">
  v-container#home(fill-height)
    v-layout(justify-center, align-center, column)
      img(alt='Vue logo' src='@/assets/logo.png')
      hello-world(:msg='$t("views.Home.message")')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component( {
  components: {
    HelloWorld,
  },
} )
export default class Home extends Vue {
  @Prop() private msg!: string
}
</script>

<style lang="sass">
#home
  text-align: center
</style>
