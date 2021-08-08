<template>
  <div>
    <div class="other-link">
      <nuxt-link class="button is-primary" :to="{ path: '/personality' }">
        他のタイプはこちら
      </nuxt-link>
    </div>
    <button @click="shareTwitter()" class="button is-info is-light">
      <b-icon icon="twitter"></b-icon>
      <p>シェア</p>
    </button>
    <button @click="shareFacebook()" class="button is-info is-light">
      <b-icon icon="facebook"></b-icon>
      <p>シェア</p>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
      default: null,
    },
    text: {
      type: String,
      required: true,
      default: null,
    },
  },
  methods: {
    shareTwitter() {
      location.href = `https://twitter.com/intent/tweet?text=${this.text}&url=${this.url}`;
    },
    shareFacebook() {
      location.href = `https://www.facebook.com/sharer/sharer.php?u=${this.url}`;
    },
  },
};
</script>

<style scoped>
.other-link {
  margin-bottom: 1rem;
}
</style>
