<template>
  <div class="container">
    <h1 class="page-title">Diagnose</h1>
    <div class="box">
      <transition name="fade" mode="out-in">
        <div v-if="isVisible" key="isVisible" class="contents">
          <h1 class="item-title">診断を受ける前に</h1>
          <ul class="list">
            <li>直感に従って回答してください</li>
            <li>前の設問に戻ることは出来ません</li>
            <li>質問は全部で20問です</li>
            <li>どの程度当てはまるか回答してください</li>
            <li>出来るだけ曖昧な回答は避けましょう</li>
          </ul>
          <button class="button is-primary" @click="startDiagnosis()">診断スタート</button>
        </div>
        <div v-else key="isInvisible" class="contents">
          <p class="question-title">{{ getQuestion }}</p>
          <div class="padding-first">
            <b-radio v-model="answer" native-value="1">
              よくあてはまる
            </b-radio>
          </div>
          <div class="padding-second">
            <b-radio v-model="answer" native-value="2">
              あてはまる
            </b-radio>
          </div>
          <div class="padding-third">
            <b-radio v-model="answer" native-value="3">
              あてはまらない
            </b-radio>
          </div>
          <div>
            <b-radio v-model="answer" native-value="4">
              全くあてはまらない
            </b-radio>
          </div>
          <b-button
            class="is-primary next-button"
            icon-right="arrow-right-thick"
            :disabled="isDisabled"
            @click="nextQuestions()"
          >
            次へ
          </b-button>
          <b-progress
            class="bar"
            :value="getIndex + 1"
            size="is-medium"
            :max="20"
            type="is-primary"
            show-value
          >
          </b-progress>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      isVisible: true,
      isDisabled: true,
      answer: 0,
    };
  },
  watch: {
    answer() {
      if (this.answer !== 0) {
        if (this.isDisabled) {
          this.isDisabled = false;
        }
      }
    },
  },
  computed: {
    ...mapGetters(['getIndex', 'getQuestion']),
  },
  methods: {
    ...mapActions(['countQuestions', 'resetDiagnose']),
    startDiagnosis() {
      this.isVisible = false;
      this.resetDiagnose();
    },
    nextQuestions() {
      this.countQuestions(this.answer);
      this.isDisabled = true;
      this.answer = 0;
    },
  },
  beforeDestroy() {
    const index = this.$store.getters.getIndex;
    if (!index === 20) {
      this.resetDiagnose();
    }
  },
};
</script>

<style scoped>
.contents {
  margin: 0 auto;
  width: 75%;
}

.item-title {
  margin-bottom: 1rem;
}

.list {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.padding-first {
  padding-right: 32px;
}

.padding-second {
  padding-right: 64px;
}

.padding-third {
  padding-right: 32px;
}

.question-title {
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.next-button {
  margin-top: 1rem;
}

.bar {
  margin-top: 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
