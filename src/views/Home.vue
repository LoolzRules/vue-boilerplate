<template lang="pug">
  div.home
    img(alt="Vue logo" src="@/assets/logo.png")
    hello-world(msg="Welcome to Your Vue.js App")
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
