<template>
  <div class="container">
    <h1 class="page-title">Admin</h1>
    <div class="box">
      <h2 class="item-title">ユーザー一覧</h2>
      <div class="users">
        <section>
          <b-collapse
            v-for="(user, index) in getOtherUsersData"
            :key="index"
            class="card"
            animation="slide"
            :open="isOpen == index"
            @open="isOpen = index"
          >
            <template #trigger="props">
              <div class="card-header" role="button">
                <p class="card-header-title">ユーザー名：{{ user.user_name }}</p>
                <a class="card-header-icon">
                  <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
                </a>
              </div>
            </template>
            <div class="card-content">
              <div class="content">
                <p>メールアドレス：{{ user.email }}</p>
                <p>性格タイプ：{{ user.personality_type }}</p>
              </div>
            </div>
          </b-collapse>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      isOpen: 0,
      userId: '',
    };
  },
  computed: {
    ...mapGetters(['getUserId', 'getOtherUsersData']),
  },
  mounted() {
    this.userId = this.getUserId;
    this.fetchOtherUsers(this.userId);
  },
  methods: {
    ...mapActions(['fetchOtherUsers']),
  },
};
</script>

<style scoped>
.users {
  width: 60%;
  margin: 0 auto;
}
</style>
