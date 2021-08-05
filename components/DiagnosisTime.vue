<template>
  <div class="box">
    <div class="items">
      <b-skeleton
        v-if="!users"
        width="80%"
        position="is-centered"
        :animated="animated"
      ></b-skeleton>
      <div v-if="users" class="slider">
        <div v-for="user in users" :key="user.userName" class="slider-content">
          <div class="diagnose ">
            <p>{{ user.userName }}さんが性格を診断しました。</p>
            <p>結果: {{ user.personality }}</p>
          </div>
          <div class="diagnose-time ">
            <p>{{ user.elapsedTime }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      animated: true,
    };
  },
  computed: {
    ...mapGetters(['getDiagnosisTimeData']),
    users() {
      return this.getDiagnosisTimeData;
    },
  },
  created() {
    this.fetchDiagnosisTimeData();
  },

  methods: {
    ...mapActions(['fetchDiagnosisTimeData']),
  },
};
</script>

<style scoped>
.box {
  width: 60%;
  margin: 0 auto;
}

.items {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.diagnose {
  display: flex;
  justify-content: center;
  align-items: center;
}

.diagnose-time {
  display: flex;
  justify-content: center;
  font-size: 0.7rem;
}

.slider {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.slider-content {
  min-width: 100%;
  animation: sliderAnime 35s ease-in-out infinite;
}

@keyframes sliderAnime {
  0% {
  }
  20% {
    transform: translateX(-100%);
  }
  40% {
    transform: translateX(-200%);
  }
  60% {
    transform: translateX(-300%);
  }
  80% {
    transform: translateX(-400%);
  }
  90% {
    transform: translateX(-400%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
