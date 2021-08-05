<template>
  <div class="container">
    <h1 class="page-title">result</h1>
    <PersonalityType
      :types="getTypes.expressive"
      :number="getNumberOfUsersByPersonalityType[1].number"
      :totalNum="getTotalNumberOfPersonalityType"
    />
    <ResultButtons />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      meta: {
        title: '診断結果',
        description: 'あなたの性格はエクスプレッシブでした',
        url: 'https://dear-personality.netlify.app/result/expressive',
        image: 'https://dear-personality.netlify.app/peep-17.png',
      },
    };
  },
  head() {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
        { hid: 'twitter:image', name: 'twitter:image', content: this.meta.image },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'getTypes',
      'getNumberOfUsersByPersonalityType',
      'getTotalNumberOfPersonalityType',
    ]),
  },
  created() {
    this.fetchNumberOfUsersByPersonalityType();
    this.sumNumberOfUsersByPersonalityType();
  },
  methods: {
    ...mapActions(['fetchNumberOfUsersByPersonalityType', 'sumNumberOfUsersByPersonalityType']),
  },
};
</script>

<style scoped>
.content-title {
  margin-top: 1rem;
}

.container {
  height: auto;
}
</style>
