<template>
  <div class="container">
    <h1 class="page-title">Sign in</h1>
    <div class="box">
      <b-field label="メールアドレス">
        <b-input v-model="email" type="email" placeholder="Email" icon="email"> </b-input>
      </b-field>
      <b-field label="パスワード">
        <b-input
          v-model="password"
          type="password"
          placeholder="Password"
          icon="account-key"
          password-reveal
        >
        </b-input>
      </b-field>
      <transition name="fade">
        <p v-if="getErrorMessage" class="error-message">{{ getErrorMessage }}</p>
      </transition>
      <div class="signin-link">
        <button class="button is-primary " @click="loginWithEmail()">
          サインイン
        </button>
        <div class="signin-link-api">
          <button class="button is-info is-light" @click="loginWithTwitter()">
            <b-icon icon="twitter"></b-icon>
            <p>ログイン</p>
          </button>
          <button class="button is-info is-light" @click="loginWithFacebook()">
            <b-icon icon="facebook"></b-icon>
            <p>ログイン</p>
          </button>
          <button class="button is-info is-light" @click="loginWithGoogle()">
            <b-icon icon="google"></b-icon>
            <p>ログイン</p>
          </button>
        </div>
        <div class="signup-link">
          <nuxt-link class="button is-primary " :to="{ path: '/signUp' }">
            サインアップはこちら
          </nuxt-link>
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
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters(['getErrorMessage']),
  },
  beforeDestroy() {
    this.setErrorMessage('');
  },
  methods: {
    ...mapActions([
      'signInWithEmail',
      'signInWithGoogle',
      'signInWithTwitter',
      'signInWithFacebook',
      'setErrorMessage',
    ]),
    loginWithEmail() {
      this.validationLogin();
      this.signInWithEmail({
        email: this.email,
        password: this.password,
      });
      this.email = '';
      this.password = '';
    },
    loginWithGoogle() {
      this.signInWithGoogle();
    },
    loginWithTwitter() {
      this.signInWithTwitter();
    },
    loginWithFacebook() {
      this.signInWithFacebook();
    },
    validationLogin() {
      this.setErrorMessage('');
      if (this.email === '' || this.password === '') {
        this.setErrorMessage('全ての項目を入力してください');
      } else if (this.password.length < 6) {
        this.setErrorMessage('6文字以上で入力してください');
      } else if (!this.password.match(/^[\x20-\x7E]*$/)) {
        this.setErrorMessage('半角英数記号で入力してください');
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 50%;
  margin-top: 2rem;
  text-align: left;
}
.page-title {
  text-align: center;
}

.button p {
  color: #0d68ce;
}

.signin-link {
  text-align: center;
  margin-top: 2rem;
}

.signin-link a {
  width: 40%;
}
.signin-link-api {
  margin-top: 1rem;
}

.signin-link-api .button {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.signup-link {
  margin-top: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
