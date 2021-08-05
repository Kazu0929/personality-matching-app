import questions from '../assets/json/questions.json';
import types from '../assets/json/types.json';

export const state = () => ({
  questions,
  types,
  index: 0,
  resultType: [
    { type: 'driving', score: 11 },
    { type: 'expressive', score: 12 },
    { type: 'amiable', score: 12 },
    { type: 'analytical', score: 13 },
  ],
  personalityType: '',
  personalityTypeContents: '',
  user: null,
  otherUsersData: null,
  usersOfSamePersonalityType: null,
  chatId: null,
  theOtherUserOfchat: null,
  messeges: null,
  diagnosisTimeData: null,
  elapsedTime: null,
  numberOfUsersByPersonalityType: [
    { type: 'driving', number: null },
    { type: 'expressive', number: null },
    { type: 'amiable', number: null },
    { type: 'analytical', number: null },
  ],
  totalNumberOfPersonalityType: null,
  isAdmin: false,
  errMsg: '',
  errorCode: {
    notExist: 'このメールアドレスは存在しません。',
    wrongPassword: 'パスワードが間違っています。',
    manyRequests: 'パスワードが一定回数​確認できませんでした。しばらくしてからご利用ください。',
    alreadyInUse: 'このメールアドレスは既に使われています。',
    differentCredential: 'このメールアドレスは他の登録方法で既に登録済です。',
  },
});

export const getters = {
  getQuestion(state) {
    const index = state.index;
    return state.questions[index].question;
  },
  getAnswerType(state) {
    const index = state.index;
    return state.questions[index].type;
  },
  getTypes(state) {
    return state.types;
  },
  getPersonalityTypeContents(state) {
    switch (state.personalityType) {
      case 'ドライビング':
        return state.types.driving;
      case 'エクスプレッシブ':
        return state.types.expressive;
      case 'アミアブル':
        return state.types.amiable;
      case 'アナリティカル':
        return state.types.analytical;
    }
  },
  getIndex(state) {
    return state.index;
  },
  getPersonalityType(state) {
    return state.personalityType;
  },
  getUserName(state) {
    return state.user.displayName;
  },
  getHasUser(state) {
    return state.user;
  },
  getIsAdmin(state) {
    return state.isAdmin;
  },
  getUserId(state) {
    return state.user.uid;
  },
  getOtherUsersData(state) {
    return state.otherUsersData;
  },
  getTheOtherUserOfchat(state) {
    return state.theOtherUserOfchat;
  },
  getChatId(state) {
    return state.chatId;
  },
  getMessages(state) {
    return state.messeges;
  },
  getUsersOfSamePersonalityType(state) {
    return state.usersOfSamePersonalityType;
  },
  getNumberOfUsersByPersonalityType(state) {
    return state.numberOfUsersByPersonalityType;
  },
  getTotalNumberOfPersonalityType(state) {
    return state.totalNumberOfPersonalityType;
  },
  getDiagnosisTimeData(state) {
    return state.diagnosisTimeData;
  },
  getElapsedTime(state) {
    return state.elapsedTime;
  },
  getErrorMessage(state) {
    return state.errMsg;
  },
  getErrorCode(state) {
    return state.errorCode;
  },
};

export const mutations = {
  incrementIndex(state) {
    state.index++;
  },
  sumAnswers(state, { answerType, answer }) {
    switch (answerType) {
      case 'Driving':
        state.resultType[0].score -= answer;
        break;
      case 'Expressive':
        state.resultType[1].score -= answer;
        break;
      case 'Amiable':
        state.resultType[2].score -= answer;
        break;
      case 'Analytical':
        state.resultType[3].score -= answer;
        break;
    }
  },
  judgePersonalityType(state) {
    const compareAnswers = state.resultType.map((result) => {
      return result.score;
    });
    const isPersonalityType = compareAnswers.indexOf(Math.max(...compareAnswers));
    switch (isPersonalityType) {
      case 0:
        state.personalityType = 'ドライビング';
        break;
      case 1:
        state.personalityType = 'エクスプレッシブ';
        break;
      case 2:
        state.personalityType = 'アミアブル';
        break;
      case 3:
        state.personalityType = 'アナリティカル';
        break;
    }
  },
  resetDiagnose(state) {
    state.index = 0;
    state.personalityType = '';
    state.personalityTypeContents = '';
    state.resultType[0].score = 11;
    state.resultType[1].score = 12;
    state.resultType[2].score = 12;
    state.resultType[3].score = 13;
  },
  resetState(state) {
    state.index = 0;
    state.user = null;
    state.otherUsersData = null;
    state.usersOfSamePersonalityType = null;
    state.chatId = null;
    state.theOtherUserOfchat = null;
    state.messeges = null;
    state.diagnosisTimeData = null;
    state.elapsedTime = null;
    state.isAdmin = false;
    state.totalNumberOfPersonalityType = null;
    state.personalityType = '';
    state.personalityTypeContents = '';
    state.resultType[0].score = 11;
    state.resultType[1].score = 12;
    state.resultType[2].score = 12;
    state.resultType[3].score = 13;
  },
  setUser(state, val) {
    state.user = val;
  },
  setIsAdmin(state, val) {
    state.isAdmin = val;
  },
  setOtherUsersData(state, val) {
    state.otherUsersData = val;
  },
  setTheOtherUserOfchat(state, val) {
    state.theOtherUserOfchat = val;
  },
  setChatId(state, val) {
    state.chatId = val;
  },
  setMessages(state, val) {
    state.messeges = val;
  },
  setUsersOfSamePersonalityType(state, val) {
    state.usersOfSamePersonalityType = val;
  },
  setPersonalityType(state, val) {
    state.personalityType = val;
  },
  setNumberOfUsersByPersonalityType(state, val) {
    for (let i = 0; i < 4; i++) {
      state.numberOfUsersByPersonalityType[i].number = val[i];
    }
  },
  setTotalNumberOfUsersByPersonalityType(state) {
    const totalNum = state.numberOfUsersByPersonalityType.reduce((prev, current) => {
      return prev + current.number;
    }, 0);
    state.totalNumberOfPersonalityType = totalNum;
  },
  setDiagnosisTimeData(state, val) {
    state.diagnosisTimeData = val;
  },
  setElapsedTime(state, val) {
    state.elapsedTime = val;
  },
  setErrorMessage(state, val) {
    state.errMsg = val;
  },
};

export const actions = {
  incrementIndex({ commit }) {
    commit('incrementIndex');
  },
  sumAnswers({ getters, commit }, answer) {
    const answerType = getters.getAnswerType;
    commit('sumAnswers', { answerType, answer });
  },
  judgePersonalityType({ commit }) {
    commit('judgePersonalityType');
  },
  async updatePersonalityType({ getters }) {
    const uid = getters.getUserId;
    const personalityType = getters.getPersonalityType;
    const date = new Date();
    const localDate = date.toLocaleString();
    const updates = {};
    updates['/users/' + uid + '/personality_type'] = personalityType;
    updates['/users/' + uid + '/updated_at'] = localDate;
    return await this.$fire.database.ref().update(updates);
  },
  async countQuestions({ getters, dispatch }, answer) {
    const questionNumber = getters.getIndex;
    if (questionNumber < 19) {
      dispatch('sumAnswers', answer);
      dispatch('incrementIndex');
    } else {
      dispatch('judgePersonalityType');
      dispatch('updatePersonalityType');
      const personalityType = getters.getPersonalityType;
      switch (personalityType) {
        case 'ドライビング':
          await this.$router.push('/result/driving');
          break;
        case 'エクスプレッシブ':
          await this.$router.push('/result/expressive');
          break;
        case 'アミアブル':
          await this.$router.push('/result/amiable');
          break;
        case 'アナリティカル':
          await this.$router.push('/result/analytical');
          break;
      }
    }
  },
  resetDiagnose({ commit }) {
    commit('resetDiagnose');
  },
  resetState({ commit }) {
    commit('resetState');
  },
  sumNumberOfUsersByPersonalityType({ commit }) {
    commit('setTotalNumberOfUsersByPersonalityType');
  },
  judgeElapsedTime({ commit }, { personality, time }) {
    if (personality !== '未鑑定') {
      const diagnosisTime = time;
      const fromTime = new Date(diagnosisTime);
      const diffTime = new Date().getTime() - fromTime.getTime();
      const elapsed = new Date(diffTime);
      if (elapsed.getUTCFullYear() - 1970) {
        const elapsedTime = elapsed.getUTCFullYear() - 1970 + '年前';
        commit('setElapsedTime', elapsedTime);
      } else if (elapsed.getUTCMonth()) {
        const elapsedTime = elapsed.getUTCMonth() + 'ヶ月前';
        commit('setElapsedTime', elapsedTime);
      } else if (elapsed.getUTCDate() - 1) {
        const elapsedTime = elapsed.getUTCDate() - 1 + '日前';
        commit('setElapsedTime', elapsedTime);
      } else if (elapsed.getUTCHours()) {
        const elapsedTime = elapsed.getUTCHours() + '時間前';
        commit('setElapsedTime', elapsedTime);
      } else if (elapsed.getUTCMinutes()) {
        const elapsedTime = elapsed.getUTCMinutes() + '分前';
        commit('setElapsedTime', elapsedTime);
      } else {
        const elapsedTime = 'たった今';
        commit('setElapsedTime', elapsedTime);
      }
    }
  },
  async signUpWithEmail({ commit, dispatch }, { email, password, userName }) {
    try {
      const result = await this.$fire.auth.createUserWithEmailAndPassword(email, password);
      const user = await result.user;
      await user.updateProfile({
        displayName: userName,
      });
      await dispatch('registerUserData', user);
      commit('setPersonalityType', '未鑑定');
      await this.$router.push('/mypage');
    } catch (error) {
      console.log(error);
      dispatch('classifyErrors', error.code);
    }
  },
  async signUpWithGoogle({ commit, dispatch }) {
    try {
      const provider = new this.$fireModule.auth.GoogleAuthProvider();
      const result = await this.$fire.auth.signInWithPopup(provider);
      const user = await result.user;
      await dispatch('registerUserData', user);
      commit('setPersonalityType', '未鑑定');
      await this.$router.push('/mypage');
    } catch (error) {
      console.log(error);
      dispatch('classifyErrors', error.code);
    }
  },
  async signUpWithTwitter({ commit, dispatch }) {
    try {
      this.$fire.auth.useDeviceLanguage();
      const provider = new this.$fireModule.auth.TwitterAuthProvider();
      const result = await this.$fire.auth.signInWithPopup(provider);
      const user = await result.user;
      await dispatch('registerUserData', user);
      commit('setPersonalityType', '未鑑定');
      await this.$router.push('/mypage');
    } catch (error) {
      await dispatch('classifyErrors', error.code);
      console.log(error);
    }
  },
  async signUpWithFacebook({ commit, dispatch }) {
    try {
      this.$fire.auth.useDeviceLanguage();
      const provider = new this.$fireModule.auth.FacebookAuthProvider();
      const result = await this.$fire.auth.signInWithPopup(provider);
      const user = await result.user;
      await dispatch('registerUserData', user);
      commit('setPersonalityType', '未鑑定');
      await this.$router.push('/mypage');
    } catch (error) {
      await dispatch('classifyErrors', error.code);
      console.log(error);
    }
  },
  async signInWithEmail({ dispatch }, { email, password }) {
    try {
      const result = await this.$fire.auth.signInWithEmailAndPassword(email, password);
      const user = await result.user;
      dispatch('setUser', user);
      dispatch('setPersonalityType', user.uid);
      await this.$router.push('/mypage');
    } catch (error) {
      console.log(error);
      dispatch('classifyErrors', error.code);
    }
  },
  async signInWithGoogle({ dispatch }) {
    try {
      const provider = new this.$fireModule.auth.GoogleAuthProvider();
      const result = await this.$fire.auth.signInWithPopup(provider);
      const user = await result.user;
      dispatch('setUser', user);
      dispatch('confirmRegistration', user);
      dispatch('setPersonalityType', user.uid);
      await this.$router.push('/mypage');
    } catch (error) {
      console.log(error);
      dispatch('classifyErrors', error.code);
    }
  },
  async signInWithTwitter({ dispatch }) {
    try {
      const provider = new this.$fireModule.auth.TwitterAuthProvider();
      const result = await this.$fire.auth.signInWithPopup(provider);
      const user = await result.user;
      dispatch('setUser', user);
      dispatch('confirmRegistration', user);
      dispatch('setPersonalityType', user.uid);
      await this.$router.push('/mypage');
    } catch (error) {
      console.log(error);
      dispatch('classifyErrors', error.code);
    }
  },
  async signInWithFacebook({ dispatch }) {
    try {
      const provider = new this.$fireModule.auth.FacebookAuthProvider();
      const result = await this.$fire.auth.signInWithPopup(provider);
      const user = await result.user;
      dispatch('setUser', user);
      dispatch('confirmRegistration', user);
      dispatch('setPersonalityType', user.uid);
      await this.$router.push('/mypage');
    } catch (error) {
      console.log(error);
      dispatch('classifyErrors', error.code);
    }
  },
  async confirmRegistration({ dispatch }, user) {
    try {
      await this.$fire.database
        .ref('users')
        .child(user.uid)
        .once('value', (snapshot) => {
          const data = snapshot.exists();
          if (!data) {
            dispatch('registerUserData', user);
          }
        });
    } catch (error) {
      console.log(error);
    }
  },
  async registerUserData({ dispatch }, user) {
    try {
      dispatch('setUser', user);
      const date = new Date();
      const localDate = date.toLocaleString();
      await this.$fire.database
        .ref('users')
        .child(user.uid)
        .set({
          user_name: user.displayName,
          email: user.email,
          personality_type: '未鑑定',
          created_at: localDate,
          updated_at: localDate,
        });
    } catch (error) {
      console.log(error);
    }
  },
  async registerChat({ dispatch }, { chatId, theOtherUserId }) {
    try {
      const date = new Date();
      const localDate = date.toLocaleString();
      await this.$fire.database
        .ref('messages')
        .child(chatId)
        .set({
          created_at: localDate,
          updated_at: localDate,
          message: null,
        });
      dispatch('fetchTheOtherUser', theOtherUserId);
    } catch (error) {
      console.log(error);
    }
  },
  async sendMessage({ getters }, content) {
    try {
      const chatId = getters.getChatId;
      const userId = getters.getUserId;
      const newMessage = await this.$fire.database
        .ref('messages/' + chatId + '/')
        .child('message')
        .push();
      const key = newMessage.key;
      const date = new Date();
      const localDate = date.toLocaleString();
      newMessage.set({
        key,
        user_id: userId,
        content,
        created_at: localDate,
        updated_at: localDate,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteMessage({ getters }, key) {
    try {
      const chatId = getters.getChatId;
      await this.$fire.database
        .ref('messages/' + chatId + '/message')
        .child(key)
        .remove();
    } catch (error) {
      console.log(error);
    }
  },
  async fetchTheOtherUser({ commit }, theOtherUserId) {
    try {
      await this.$fire.database
        .ref('users')
        .child(theOtherUserId)
        .on('value', (snapshot) => {
          const data = snapshot.val();
          commit('setTheOtherUserOfchat', data);
        });
    } catch (error) {
      console.log(error);
    }
  },
  async fetchMessages({ getters, commit }) {
    try {
      const chatId = getters.getChatId;
      await this.$fire.database
        .ref('messages/' + chatId + '/message')
        .orderByChild('created_at')
        .on('value', (snapshot) => {
          const messagesData = [];
          snapshot.forEach((childSnapshot) => {
            const messageData = childSnapshot.val();
            messagesData.push(messageData);
          });
          commit('setMessages', messagesData);
        });
    } catch (error) {
      console.log(error);
    }
  },
  async fetchOtherUsers({ commit }, myId) {
    try {
      await this.$fire.database
        .ref('users/')
        .orderByChild('userName')
        .on('value', (snapshot) => {
          const usersData = [];
          snapshot.forEach((childSnapshot) => {
            const userId = childSnapshot.key;
            const childData = childSnapshot.val();
            if (myId !== userId) {
              const userData = { userId, ...childData };
              usersData.push(userData);
            }
          });
          commit('setOtherUsersData', usersData);
        });
    } catch (error) {
      console.log(error);
    }
  },
  async fetchUsersOfSamePersonalityType({ commit }, myId) {
    try {
      await this.$fire.database
        .ref('users/')
        .orderByChild('userName')
        .once('value', (snapshot) => {
          const usersData = [];
          let myData = {};
          snapshot.forEach((childSnapshot) => {
            const userId = childSnapshot.key;
            const childData = childSnapshot.val();
            if (myId !== userId) {
              const userData = { userId, ...childData };
              usersData.push(userData);
            } else {
              myData = { ...childData };
            }
          });
          const usersOfSamePersonalityType = usersData.filter((user) => {
            return user.personality_type === myData.personality_type;
          });
          commit('setUsersOfSamePersonalityType', usersOfSamePersonalityType);
        });
    } catch (error) {
      console.log(error);
    }
  },
  async fetchNumberOfUsersByPersonalityType({ commit }) {
    try {
      await this.$fire.database
        .ref('users/')
        .orderByChild('userName')
        .once('value', (snapshot) => {
          const usersOfPersonalityData = [];
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            const personalityData = childData.personality_type;
            usersOfPersonalityData.push(personalityData);
          });
          console.log(usersOfPersonalityData);
          const numberOfUsersByPersonalityType = [];
          const numberOfDriving = usersOfPersonalityData.filter((user) => {
            return user === 'ドライビング';
          });
          const numberOfExpressive = usersOfPersonalityData.filter((user) => {
            return user === 'エクスプレッシブ';
          });
          const numberOfAmiable = usersOfPersonalityData.filter((user) => {
            return user === 'アミアブル';
          });
          const numberOfAnalytical = usersOfPersonalityData.filter((user) => {
            return user === 'アナリティカル';
          });
          numberOfUsersByPersonalityType.push(numberOfDriving.length);
          numberOfUsersByPersonalityType.push(numberOfExpressive.length);
          numberOfUsersByPersonalityType.push(numberOfAmiable.length);
          numberOfUsersByPersonalityType.push(numberOfAnalytical.length);
          console.log(numberOfUsersByPersonalityType);
          commit('setNumberOfUsersByPersonalityType', numberOfUsersByPersonalityType);
        });
    } catch (error) {
      console.log(error);
    }
  },
  async fetchDiagnosisTimeData({ getters, commit, dispatch }) {
    try {
      await this.$fire.database
        .ref('users/')
        .orderByChild('updated_at')
        .limitToLast(5)
        .on('value', (snapshot) => {
          const usersData = [];
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            dispatch('judgeElapsedTime', {
              personality: childData.personality_type,
              time: childData.updated_at,
            });
            const elapsedTime = getters.getElapsedTime;
            const userName = childData.user_name;
            const personality = childData.personality_type;
            const userData = { elapsedTime, userName, personality };
            usersData.push(userData);
          });
          const reversedData = usersData.slice().reverse();
          commit('setDiagnosisTimeData', reversedData);
        });
    } catch (error) {
      console.log(error);
    }
  },
  async signOutUser({ dispatch }) {
    try {
      await this.$fire.auth.signOut();
      await dispatch('resetState');
      await this.$router.push('/');
    } catch (error) {
      console.log(error);
    }
  },
  async setPersonalityType({ commit }, userId) {
    try {
      await this.$fire.database
        .ref('users')
        .child(userId)
        .once('value', (snapshot) => {
          const data = snapshot.val();
          const personalityType = data.personality_type;
          commit('setPersonalityType', personalityType);
        });
    } catch (error) {
      console.log(error);
    }
  },
  async checkHasChat({ getters, commit, dispatch }, { chatId, theOtherUserId }) {
    try {
      commit('setChatId', chatId);
      await this.$fire.database
        .ref('messages')
        .child(chatId)
        .once('value', (snapshot) => {
          const data = snapshot.exists();
          if (!data) {
            dispatch('registerChat', { chatId, theOtherUserId });
          }
        });
      if (!getters.theOtherUserOfchat) {
        dispatch('fetchTheOtherUser', theOtherUserId);
      }
      dispatch('fetchMessages');
      await this.$router.push('/messages');
    } catch (error) {
      console.log(error);
    }
  },
  setUser({ commit }, user) {
    const { uid, displayName } = user;
    commit('setUser', { uid, displayName });
  },
  checkIsAdmin({ commit }) {
    commit('setIsAdmin', true);
  },
  classifyErrors({ getters, dispatch }, error) {
    const errorMessage = getters.getErrorCode;
    switch (error) {
      case 'auth/wrong-password':
        dispatch('setErrorMessage', errorMessage.wrongPassword);
        break;
      case 'auth/user-not-found':
        dispatch('setErrorMessage', errorMessage.notExist);
        break;
      case 'auth/too-many-requests':
        dispatch('setErrorMessage', errorMessage.manyRequests);
        break;
      case 'auth/email-already-in-use':
        dispatch('setErrorMessage', errorMessage.alreadyInUse);
        break;
      case 'auth/account-exists-with-different-credential':
        dispatch('setErrorMessage', errorMessage.differentCredential);
        break;
    }
  },
  setErrorMessage({ commit }, errMsg) {
    commit('setErrorMessage', errMsg);
  },
};
