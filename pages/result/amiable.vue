<template>
  <div class="container">
    <h1 class="page-title">result</h1>
    <div class="box">
      <PersonalityType
        :types="getTypes.amiable"
        :number="getNumberOfUsersByPersonalityType[2].number"
        :totalNum="getTotalNumberOfPersonalityType"
      />
      <ResultButtons :url="url" :text="text" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      meta: {
        title: '診断結果',
        description: 'あなたの性格はアミアブルでした。',
        url: 'https://dear-personality.netlify.app/result/amiable',
        image: 'https://dear-personality.netlify.app/peep-73.png',
      },
      url: 'https://dear-personality.netlify.app/result/amiable/',
      text:
        'あなたの性格はアミアブルでした。気配り上手な典型的ないい人です。詳細はリンクをクリック！',
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
        { name: 'twitter:card', content: 'summary' },
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
    console.log(this.url);
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
