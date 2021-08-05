<template>
  <div class="container">
    <h1 class="page-title">Messages</h1>
    <div class="box">
      <h2 class="messages-title">{{ userName }}さんとのメッセージ</h2>
      <div class="messages-item">
        <div v-for="message in getMessages" :key="message.key">
          <transition name="fade">
            <div v-if="message.user_id === getUserId" class="message-right ">
              <div class="balloon1-right">
                <p>{{ message.content }}</p>
                <button class="delete is-small" @click="deleteMessage(message.key)"></button>
              </div>
            </div>
            <div v-else class="message-left">
              <div class="balloon1-left ">
                <p>{{ message.content }}</p>
                <button class="delete is-small" @click="deleteMessage(message.key)"></button>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="send-message">
        <b-input v-model="message" type="textarea" placeholder="メッセージを入力..."></b-input>
        <button class="button is-primary" @click="checkMessage()">送信</button>
        <transition name="fade">
          <p v-if="getErrorMessage" class="error-message">{{ getErrorMessage }}</p>
        </transition>
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
      message: '',
    };
  },
  computed: {
    ...mapGetters(['getErrorMessage', 'getTheOtherUserOfchat', 'getMessages', 'getUserId']),
  },
  mounted() {
    this.userName = this.getTheOtherUserOfchat.user_name;
  },
  methods: {
    ...mapActions(['setErrorMessage', 'sendMessage', 'deleteMessage']),
    checkMessage() {
      this.setErrorMessage('');
      if (!this.message) {
        this.setErrorMessage('メッセージを入力してください');
      } else {
        this.sendMessage(this.message);
        this.message = '';
      }
    },
  },
};
</script>

<style scoped>
.messages-title {
  font-size: 2rem;
  text-decoration: none;
}

.send-message {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  width: 50%;
}

.button {
  margin-top: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.messages-item {
  width: 50%;
  margin: 0 auto;
}

.message-right {
  text-align: right;
}

.message-left {
  text-align: left;
}

.balloon1-left {
  position: relative;
  display: inline-block;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: white;
  font-size: 16px;
  background: lightgray;
}

.balloon1-left:before {
  content: '';
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-right: 15px solid lightgray;
}

.balloon1-left p {
  margin: 0;
  padding: 0;
}

.balloon1-right {
  position: relative;
  display: inline-block;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #e0edff;
}

.balloon1-right:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -15px;
  border: 15px solid transparent;
  border-left: 15px solid #e0edff;
}

.balloon1-right p {
  margin: 0;
  padding: 0;
}
</style>
