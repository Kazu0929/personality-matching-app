<template>
  <div class="container">
    <h1 class="page-title">
      Dear
    </h1>
    <div class="box columns reverse-row-order">
      <div class="column">
        <img class="title-image" src="../assets/image/title.svg" alt="タイトルイメージ" />
      </div>
      <div class="column">
        <h1>
          Find the best friends
        </h1>
        <p v-for="sentence in sentences" :key="sentence">{{ sentence }}</p>
        <nuxt-link class="button is-primary" :to="{ path: '/signUp' }">
          会員登録
        </nuxt-link>
        <nuxt-link class="button is-primary" :to="{ path: '/signIn' }">
          サインイン
        </nuxt-link>
      </div>
    </div>
    <DiagnosisTime />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      sentences: [
        'このサービスはソーシャルスタイル理論を基にした',
        '性格診断マッチングアプリです。',
        '同じタイプとのみマッチングし、',
        '気の合う友人を見つける事ができます。',
        'また自分のタイプを知り、自己理解を深めましょう。',
        '他のタイプの人との接し方を学びましょう。',
      ],
    };
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
.box {
  padding: 0;
}

.column {
  padding: 0;
  height: 398px;
}

.title-image {
  border-radius: 6px;
}

.column h1 {
  font-size: 2rem;
  margin: 1rem 0;
  font-family: 'title';
}

.column p {
  font-size: 1.4rem;
}

.button {
  margin-top: 2rem;
  margin-bottom: 2.4rem;
  margin-right: 2rem;
  width: 30%;
}

.reverse-row-order {
  flex-direction: row-reverse;
}
</style>
