<template>
  <div class="container">
    <h1 class="page-title">Sign up</h1>
    <div class="box">
      <b-field label="ユーザー名">
        <b-input v-model="userName" placeholder="UserName" icon="account"></b-input>
      </b-field>
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
      <div class="signup-link">
        <button class="button is-primary" @click="registerWithEmail()">
          サインアップ
        </button>
        <div class="signup-link-api">
          <button class="button is-info is-light" @click="registerWithTwitter()">
            <b-icon icon="twitter"></b-icon>
            <p>ログイン</p>
          </button>
          <button class="button is-info is-light" @click="registerWithFacebook()">
            <b-icon icon="facebook"></b-icon>
            <p>ログイン</p>
          </button>
          <button class="button is-info is-light" @click="registerWithGoogle()">
            <b-icon icon="google"></b-icon>
            <p>ログイン</p>
          </button>
        </div>
        <div class="signin-link">
          <nuxt-link class="button is-primary " :to="{ path: '/signIn' }">
            サインインはこちら
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
      userName: '',
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
      'signUpWithEmail',
      'signUpWithGoogle',
      'signUpWithTwitter',
      'signUpWithFacebook',
      'setErrorMessage',
    ]),
    registerWithEmail() {
      this.validationRegister();
      this.signUpWithEmail({
        email: this.email,
        password: this.password,
        userName: this.userName,
      });
      this.userName = '';
      this.email = '';
      this.password = '';
    },
    registerWithGoogle() {
      this.signUpWithGoogle();
    },
    registerWithTwitter() {
      this.signUpWithTwitter();
    },
    registerWithFacebook() {
      this.signUpWithFacebook();
    },
    validationRegister() {
      this.setErrorMessage('');
      if (this.userName === '' || this.email === '' || this.password === '') {
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

.button p {
  color: #0d68ce;
}

.signup-link {
  text-align: center;
  margin-top: 2rem;
}

.page-title {
  text-align: center;
}

.signup-link a {
  width: 40%;
}
.signup-link-api {
  margin-top: 1rem;
}

.signup-link-api .button {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.signin-link {
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
