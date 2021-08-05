<template>
  <div>
    <div class="other-link">
      <nuxt-link class="button is-primary" :to="{ path: '/personality' }">
        他のタイプはこちら
      </nuxt-link>
    </div>
    <button class="button is-info is-light">
      <b-icon icon="twitter"></b-icon>
      <p>シェア</p>
    </button>
    <button class="button is-info is-light">
      <b-icon icon="facebook"></b-icon>
      <p>シェア</p>
    </button>
  </div>
</template>

<style scoped>
.other-link {
  margin-bottom: 1rem;
}
</style>
