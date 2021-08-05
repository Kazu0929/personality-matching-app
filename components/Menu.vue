<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item>
          <nuxt-link class="menu-logo" :to="{ path: '/' }">
            Dear
          </nuxt-link>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item>
          <nuxt-link :to="{ path: '/' }">
            HOME
          </nuxt-link>
        </b-navbar-item>
        <b-navbar-item v-if="getHasUser">
          <nuxt-link :to="{ path: '/diagnose' }">
            性格診断
          </nuxt-link>
        </b-navbar-item>
        <b-navbar-item v-if="getHasUser">
          <nuxt-link :to="{ path: '/personality' }">
            性格タイプ
          </nuxt-link>
        </b-navbar-item>
        <b-navbar-item v-if="getHasUser">
          <nuxt-link :to="{ path: '/mypage' }">
            マイページ
          </nuxt-link>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item v-if="getIsAdmin">
          <nuxt-link :to="{ path: '/admin' }">
            管理画面
          </nuxt-link>
        </b-navbar-item>
        <b-navbar-item tag="div" v-if="getHasUser">
          <button class="button is-primary" @click="signOutUser()">
            サインアウト
          </button>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  computed: {
    ...mapGetters(['getHasUser', 'getIsAdmin']),
  },
  async created() {
    await this.$fire.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setPersonalityType(user.uid);
        console.log(user);
        this.setUser(user);
        if (user.uid === 'D3Ylfh08vwanAb8nfIeLPgswAjp2') {
          this.checkIsAdmin();
        }
      }
    });
  },
  methods: {
    ...mapActions(['signOutUser', 'setPersonalityType', 'setUser', 'checkIsAdmin']),
  },
};
</script>

<style>
.menu-logo {
  margin-top: 3px;
  font-family: 'title';
  color: #3da9fc;
}
</style>
