<template>
  <div class="container">
    <h1 class="page-title">my page</h1>
    <div class="box">
      <h2 class="mypage-title">{{ userName }}さんのマイページ</h2>
      <div class="columns">
        <div class="column">
          <h2 class="item-title">{{ userName }}さんの診断タイプ</h2>
          <p class="personality-type">{{ getPersonalityType }}</p>
          <nuxt-link class="button is-primary" :to="{ path: '/personality' }">
            性格タイプを見る
          </nuxt-link>
          <nuxt-link
            v-if="getPersonalityType !== 未鑑定"
            class="button is-primary"
            :to="{ path: '/diagnose' }"
          >
            もう一度診断する
          </nuxt-link>
          <nuxt-link v-else class="button is-primary" :to="{ path: '/diagnose' }">
            診断する
          </nuxt-link>
        </div>
        <div class="column">
          <h2 class="item-title">同じ診断タイプの人</h2>
          <ul v-for="user in getUsersOfSamePersonalityType" :key="user.userId">
            <li class="other-users">
              <span>{{ user.user_name }}さん</span>
              <button class="button is-primary" @click="goToMessages(user.userId)">連絡する</button>
            </li>
          </ul>
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
      userName: '',
      userId: '',
      chatId: '',
    };
  },
  computed: {
    ...mapGetters([
      'getPersonalityType',
      'getUserName',
      'getUserId',
      'getUsersOfSamePersonalityType',
    ]),
  },
  mounted() {
    this.userName = this.getUserName;
    this.userId = this.getUserId;
    this.fetchUsersOfSamePersonalityType(this.userId);
  },
  methods: {
    ...mapActions(['fetchUsersOfSamePersonalityType', 'checkHasChat']),
    goToMessages(theOtherUserId) {
      if (this.userId > theOtherUserId) {
        this.chatId = `${this.userId}-${theOtherUserId}`;
      } else {
        this.chatId = `${theOtherUserId}-${this.userId}`;
      }
      this.checkHasChat({ chatId: this.chatId, theOtherUserId });
    },
  },
};
</script>

<style scoped>
.mypage-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'Kosugi Maru';
}

.personality-type {
  font-size: 2rem;
}

.other-users {
  font-size: 2rem;
}

.other-users .button {
  margin-left: 1rem;
}
</style>
