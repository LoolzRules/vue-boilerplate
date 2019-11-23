<template lang="pug">
  v-container#about(fill-height)
    v-layout(justify-center, align-center, column)
      img(:alt='$t("views.About.logoAlt")' src='@/assets/logo.png')
      info(:msg='$t("views.About.message")')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Info from '@/components/Info.vue'

@Component( {
  components: {
    Info,
  },
} )
export default class About extends Vue {
}
</script>

<style lang="sass">
#about
  text-align: center
</style>
