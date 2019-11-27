<template lang="pug">
  v-container#not-found(fill-height)
    v-layout.pb-12.text-center(justify-center, align-center, column)
      h1 {{ $t( 'views.NotFound.code' ) }}
      h2 {{ $t( 'views.NotFound.main' ) }}

      v-btn.info.mt-8(
        :name="$t( 'views.NotFound.return' )",
        x-large,
        @click="$router.go(-1)"
      ) {{ $t( 'views.NotFound.return' ) }}

</template>

<style lang="sass">

#not-found
  h1
    font-size: 8rem
    line-height: 8rem

  h2
    font-size: 2rem
    line-height: 2.25rem

</style>
